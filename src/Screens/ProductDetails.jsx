import {
  Button,
  FormControl,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Center,
  Stack,
  Input,
  FormErrorMessage,
  Flex,
  RadioGroup,
  Radio,
  Textarea,
  Select,
  FormLabel,
  Box,
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
import { Controller, useForm } from 'react-hook-form';
import Faq from '../Components/Sections/FAQ';
import { NAV_ITEMS } from '../Components/Header/NavItems';
import { InquiryForm } from '../Components/Product/InquiryForm';
import { ProductCarousel } from '../Components/Product/ProductCarousel';
import { ProductInformation } from '../Components/Product/ProductInformation';
import { ProductStyles } from '../Components/Product/ProductStyles';

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
      : ''
  );
  return product;
};
const printingStyles = ['Flex Banner/Event Backdrops'];
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
const ProductDetails = ({ setUrl }) => {
  const { id } = useParams();
  const uploadImg = useRef();
  const [action, setAction] = useState();
  //const navigate = useNavigateParams();
  const productInfo = product(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  /* const addToCartHandler = () => {
    navigate(`/cart/${id}`, `qty=${qty}`);
  }; */

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
        name: productInfo.name,
        fields,
        browseDesign: false,
        uploadDesign: false,
      };
      action === 'upload'
        ? (product.uploadDesign = true)
        : (product.browseDesign = true);
      console.log(product);
      dispatch(saveProducts(product));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center
        bg={'#8AADCF'}
        h={'20vw'}
        maxH={'300px'}
        minH={'200px'}
        color={'#00509E'}
        flexDirection={'column'}
      >
        <Heading fontSize={['3xl', '4xl', '5xl']}>{productInfo.label}</Heading>
        <Heading fontSize={['lg', 'xl', '2xl']} fontWeight={400} mt={5}>
          {productInfo.subLabel}
        </Heading>
      </Center>
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
          p={{ base: '0 1rem', md: '0 1.8rem' }}
          maxW={{ base: '80%', md: '50%' }}
          spacing={'30px'}
          alignSelf={'center'}
        >
          <Flex
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
                  minW={'170px'}
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
                      h={{ base: '2rem', md: '2.5rem' }}
                      borderRadius={'30px'}
                      boxShadow={'5px 7px 25px rgba(0,0,0,0.25)'}
                      _focus={{
                        outline: '2px solid rgba(0,0,0,0.5)',
                        boxShadow: 'none',
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
                      fontSize="lg"
                      type={field.type || 'text'}
                      px="0.5rem"
                      h={{ base: '2.5rem', md: '3rem' }}
                      size={{ base: 'sm', md: 'lg' }}
                      placeholder={field.placeholder || field.name}
                      _focus={{
                        outline: '2px solid rgba(0,0,0,0.5)',
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
            direction={{ base: 'column', md: 'row' }}
            justify={productInfo.inquiry ? 'flex-start' : 'space-evenly'}
            px="0.5rem"
            w="full"
          >
            {productInfo.browse && (
              <Button
                type="submit"
                borderRadius={'30px'}
                variant={'custom-black'}
                _hover={{ bg: 'white', color: 'black' }}
                onClick={() => setAction('browse')}
              >
                Browse Design
              </Button>
            )}

            <>
              {productInfo.inquiry ? (
                <Button
                  variant={'custom-black'}
                  bg="black"
                  color={'white'}
                  fontSize={{ base: 'md', md: 'xl' }}
                  p={{ base: '1rem', md: '1.5rem' }}
                  rounded={false}
                  _hover={{ bg: 'whiteAlpha.600', color: 'black' }}
                  type="submit"
                  onClick={() => {
                    setAction('inquiry');
                  }}
                >
                  Send Inquiry
                </Button>
              ) : (
                <Button
                  variant={'custom-black'}
                  bg="black"
                  color={'white'}
                  borderRadius={'30px'}
                  _hover={{ bg: 'white', color: 'black' }}
                  type="submit"
                  onClick={() => {
                    setAction('upload');
                  }}
                >
                  Upload Design
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
