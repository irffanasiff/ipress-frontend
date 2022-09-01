import {
  Button,
  FormControl,
  Heading,
  VStack,
  Center,
  Stack,
  Input,
  FormErrorMessage,
  Flex,
  Textarea,
  Select,
  FormLabel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../Actions/productAction';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { NAV_ITEMS } from '../Components/Header/NavItems';
import { InquiryForm } from '../Components/Product/InquiryForm';
import { ProductCarousel } from '../Components/Product/ProductCarousel';
import { ProductInformation } from '../Components/Product/ProductInformation';
import { ProductStyles } from '../Components/Product/ProductStyles';
import { useEffect } from 'react';

/* const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(':url?:queryString', {
      url,
      queryString: params,
    });
    navigate(path);
  };
}; */
const product = id => {
  let product;
  NAV_ITEMS.forEach(item =>
    item.children
      ? item.children.forEach(child =>
          child.href === `/product/${id}` ? (product = child) : ''
        )
      : item.href === `/product/${id}`
      ? (product = item)
      : ''
  );
  return product;
};
const printingStyles = ['Event Backdrops', 'Flex Banners'];
const brochureTypes = ['Brochures'];
const noInfo = [
  'T-shirt',
  'Towels',
  'Caps',
  'Business Cards',
  'Lanyards',
  'Bags',
  'Corporate Gifts/Promotional Items',
  'Calenders',
  'Envelopes',
  'Awards',
];
const ProductDetails = ({ setUrl, setCategory, setProduct }) => {
  const { id } = useParams();
  const uploadImg = useRef();
  const [action, setAction] = useState();
  //const navigate = useNavigateParams();
  const productInfo = product(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    getValues,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const handleImg = e => {
    let img = URL.createObjectURL(e.target.files[0]);
    setUrl(img);
    navigate(`/designs/${id}/editor`);
  };
  const onSubmit = fields => {
    if (action === 'upload') {
      uploadImg.current.click();
    } else if (action === 'browse') {
      navigate(`/designs/${id}`);
    }
    if (action === 'inquiry') console.log(fields);
    else {
      const product = {
        name: productInfo.label,
        fields,
        browseDesign: false,
        uploadDesign: false,
      };
      action === 'upload'
        ? (product.uploadDesign = true)
        : (product.browseDesign = true);
      dispatch(saveProducts(product));
    }
  };
  useEffect(() => {
    setProduct(productInfo.label);
    NAV_ITEMS.forEach(item => {
      if (item.children && item.children.includes(productInfo))
        setCategory(item.label);
      else if (item === productInfo) setCategory(item.label);
    });
    return () => {
      setProduct('none');
      setCategory('none');
    };
  }, [productInfo, setProduct, setCategory]);
  useEffect(() => {
    reset();
  }, [productInfo, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={{ base: '4rem', md: '2rem' }}
        p={{ base: '2rem 1.5rem', md: '3rem 2rem' }}
        minH={'50vh'}
        maxW="8xl"
        mx="auto"
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent={'space-between'}
      >
        <VStack
          p={{ base: 0, md: '30px' }}
          maxW={{ base: '80%', md: '50%' }}
          minW={{ lg: '500px' }}
          spacing={productInfo.inquiry ? '10px' : { base: '30px', lg: '40px' }}
          minH={'600px'}
        >
          <Center flexDirection={'column'}>
            <Heading
              fontSize={{ base: '2.5rem', sm: '3.2rem', md: '3rem' }}
              color={'#00509E'}
              textAlign={'center'}
              fontWeight={500}
            >
              {productInfo.label}
            </Heading>
            <Heading
              fontSize={{ base: 'sm', md: '1rem' }}
              fontWeight={400}
              textAlign={'center'}
              mt={5}
            >
              {productInfo.subLabel}
            </Heading>
          </Center>
          <Flex
            pt={10}
            flexWrap={'wrap'}
            w="full"
            justifyContent={productInfo.inquiry ? 'flex-start' : 'space-evenly'}
            gap={productInfo.inquiry ? 0 : '15px'}
          >
            {productInfo.inquiry ? (
              <InquiryForm
                fields={productInfo.fields}
                errors={errors}
                register={register}
              />
            ) : (
              productInfo.fields.map((field, index) => (
                <FormControl
                  isInvalid={errors.name}
                  minW={'200px'}
                  isRequired
                  mb="1rem"
                  mx={2}
                  key={index}
                  w={{
                    base: 'full',
                    md:
                      field.type === 'textarea'
                        ? '100%'
                        : field.type
                        ? '40%'
                        : '45%',
                  }}
                >
                  {field.label || productInfo.form ? (
                    <FormLabel>{field.label || field.name}</FormLabel>
                  ) : (
                    ''
                  )}
                  {field.type === 'option' ? (
                    <Select
                      alignSelf={'center'}
                      h={['2.3rem', '2.6rem', '2.3rem', '2.8rem']}
                      fontSize={{ base: 'sm', sm: 'md' }}
                      borderRadius={'30px'}
                      boxShadow={'5px 7px 25px rgba(0,0,0,0.25)'}
                      cursor={'pointer'}
                      _focus={{
                        outline: 'none',
                      }}
                      placeholder={field.name}
                      {...register(`${field.name}`, {
                        required: `Please enter ${field.placeholder}`,
                      })}
                    >
                      {field.value.map(i => (
                        <option value={i} key={i}>
                          {i}
                        </option>
                      ))}
                    </Select>
                  ) : field.type === 'textarea' ? (
                    <Textarea
                      fontSize="md"
                      px="0.5rem"
                      minH={'150px'}
                      placeholder={field.placeholder}
                      {...register(`${field.name}`, {
                        required: `Please enter ${field.placeholder}`,
                      })}
                    />
                  ) : (
                    <Input
                      outline={'1px solid rgba(0,0,0,0.5)'}
                      fontSize={['sm', 'md', 'lg']}
                      type={field.type || 'text'}
                      px="0.5rem"
                      h={{ base: '2.5rem', md: '3rem' }}
                      size={{ base: '12px', md: 'lg' }}
                      placeholder={field.placeholder || field.name}
                      _focus={{
                        outline: '2px solid rgba(0,0,0, 0.7)',
                        boxShadow: 'none',
                      }}
                      {...register(`${field.name}`, {
                        required: `Please enter ${field.name}`,
                      })}
                    />
                  )}

                  {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                  )}
                </FormControl>
              ))
            )}
          </Flex>
          <Stack
            spacing={6}
            alignItems={'center'}
            direction={'column'}
            justify={productInfo.inquiry ? 'flex-start' : 'space-evenly'}
            px="0.5rem"
            w="full"
          >
            {productInfo.browse && (
              <Button
                w={['100%', '65%', '80%', '65%']}
                type="submit"
                variant={'ipress-black'}
                onClick={() => setAction('browse')}
              >
                Browse Our Design
              </Button>
            )}

            <>
              {productInfo.inquiry ? (
                <Button
                  w={'50%'}
                  minW={'200px'}
                  textTransform={'uppercase'}
                  type="submit"
                  rounded={false}
                  fontWeight={400}
                  fontSize={{ base: 'sm', md: 'md' }}
                  letterSpacing={'2px'}
                  py={'25px'}
                  bg="black"
                  color={'white'}
                  border={'1px solid black'}
                  _hover={{
                    bg: 'white',
                    color: 'black',
                  }}
                  onClick={() => {
                    setAction('inquiry');
                  }}
                >
                  Send Inquiry
                </Button>
              ) : (
                <Button
                  w={['100%', '65%', '80%', '65%']}
                  textTransform={'uppercase'}
                  type="submit"
                  borderRadius={'30px'}
                  fontWeight={600}
                  fontSize={{
                    base: '11px',
                    sm: '12px',
                    md: '11px',
                    lg: '14px',
                  }}
                  letterSpacing={'2px'}
                  py={'25px'}
                  bg="black"
                  color={'white'}
                  border={'1px solid black'}
                  _hover={{
                    bg: 'white',
                    color: 'black',
                  }}
                  onClick={() => setAction('upload')}
                >
                  Upload your design
                </Button>
              )}
              <input
                type="file"
                style={{ display: 'none' }}
                ref={uploadImg}
                onChange={e => handleImg(e)}
              />
            </>
          </Stack>
        </VStack>
        <ProductCarousel images={productInfo.image} />
      </Stack>
      <Tabs
        maxW={'8xl'}
        mx={'auto'}
        p={{ base: 0, sm: 5 }}
        bg={'#F5F5F5'}
        my={5}
      >
        <TabList>
          {noInfo.includes(productInfo.label) ? (
            ''
          ) : (
            <Tab fontSize={['0.8rem', '1rem', '1.2rem']}>
              Product Information
            </Tab>
          )}
          {!productInfo.styleImages ? (
            ''
          ) : (
            <Tab fontSize={['0.8rem', '1rem', '1.2rem']}>
              {printingStyles.includes(productInfo.label)
                ? 'Printing Styles'
                : 'Finishing Styles'}
            </Tab>
          )}
          {!brochureTypes.includes(productInfo.label) ? (
            ''
          ) : (
            <Tab fontSize={['0.8rem', '1rem', '1.2rem']}>Brochure Types</Tab>
          )}
        </TabList>
        <TabPanels>
          {noInfo.includes(productInfo.label) ? (
            ''
          ) : (
            <TabPanel>
              <ProductInformation label={productInfo.label} />
            </TabPanel>
          )}
          {!productInfo.styleImages ? (
            ''
          ) : (
            <TabPanel
              px={{ base: 0, sm: 4 }}
              fontSize={['0.8rem', '1rem', '1.2rem']}
            >
              <ProductStyles styles={productInfo.styleImages} />
            </TabPanel>
          )}
          {!brochureTypes.includes(productInfo.label) ? (
            ''
          ) : (
            <TabPanel
              px={{ base: 0, sm: 4 }}
              fontSize={['0.8rem', '1rem', '1.2rem']}
            >
              <ProductStyles
                styles={productInfo.fields[0].value}
                brochure={true}
              />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </form>
  );
};

export { ProductDetails };
