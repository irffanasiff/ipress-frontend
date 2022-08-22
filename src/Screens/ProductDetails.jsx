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
const data = [
  {
    question:
      'Praesentium ipsa ipsam non aut repellat dolorem itaque illo nisi odio cum!',
    answer:
      '. Adipisci dolores soluta ad, harum consequuntur itaque ducimus architecto nemo illum! Natus magnam dolores consequuntur perferendis. Unde eligendi est atque! Error, ad? Tenetur similique quisquam amet officiis hic officia molestiae quos.',
  },
  {
    question:
      'Rem sed illo quos perferendis itaque provident exercitationem reiciendis, corrupti enim.',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Cumque ea itaque voluptates incidunt.',
    answer:
      'Praesentium ipsa ipsam non aut repellat dolorem itaque illo nisi odio cum!',
  },
  {
    question:
      'Autem in commodi adipisci earum impedit rem laboriosam eligendi accusantium ex modi possimus',
    answer:
      '. Adipisci dolores soluta ad, harum consequuntur itaque ducimus architecto nemo illum! Natus magnam dolores consequuntur perferendis. Unde eligendi est atque! Error, ad? Tenetur similique quisquam amet officiis hic officia molestiae quos.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cumque totam, culpa nemo quibusdam voluptatem sequi architecto nobis beatae quaerat saepe nesciunt quis numquam similique! Rem, hic. Non, veritatis eius perferendis voluptates porro cum possimus similique aliquid dolores labore dolorum quam vel rem quas, necessitatibus expedita et ut est, blanditiis eaque natus odio atque nostrum commodi expedita minima sint velit! Nihil, placeat quibusdam voluptatum quisquam officiis aut, praesentium debitis quae fugiat obcaecati modi rerum adipisci fuga ea vel minima doloremque quas',
  },
  {
    question: 'Provident exercitationem reiciendis, corrupti enim.',
    answer:
      'Praesentium ipsa ipsam non aut repellat dolorem itaque illo nisi odio cum!',
  },
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
            justifyContent={'space-evenly'}
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
                      h={{ base: '2rem', md: '2.5rem' }}
                      borderRadius={'30px'}
                      boxShadow={'5px 7px 25px rgba(0,0,0,0.25)'}
                      minW={'170px'}
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
            justify={'flex-start'}
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
      <Faq data={data} />
    </form>
  );
};

export { ProductDetails };
