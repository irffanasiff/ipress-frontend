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
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../Actions/productAction';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Faq from '../Components/Sections/FAQ';
import { NAV_ITEMS } from '../Components/Header/NavItems';

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
const productWithImages = [
  'Banners',
  'Business Cards',
  'Brochures',
  'Notebook',
  'Stickers',
  'Flyers',
  'Posters',
];
const product = id => {
  let properties = {
    image:
      'https://i.pinimg.com/736x/0e/fe/72/0efe728db4b33f979300967d7723c756.jpg',
    fields: [
      { name: 'First Name' },
      { name: 'Last Name' },
      { name: 'Email' },
      {
        name: 'Ink Type',
        type: 'option',
        value: ['Eco-solvent Ink', 'UV Ink'],
      },
      {
        name: 'Length',
        label: 'Length (cm)',
        placeholder: 'Enter only figures',
      },
      { name: 'Width', label: 'Width (cm)', placeholder: 'Enter only figures' },
      { name: 'Phone' },
      {
        name: 'Description',
        type: 'textarea',
        placeholder: 'Tell us a little bit about the design you had in mind',
      },
    ],
    uploadDesign: true,
  };
  let product;
  NAV_ITEMS.forEach(item =>
    item.children
      ? item.children.forEach(child =>
          child.href === `/product/${id}` ? (product = child) : ''
        )
      : ''
  );
  let finalProduct = { ...properties, ...product };
  finalProduct.fields = product.form
    ? [...properties.fields, ...product.fields]
    : [...product.fields];
  return finalProduct;
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center
        bg={'#8AADCF'}
        h={'20vw'}
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
        spacing={{ base: '4rem', lg: '2rem' }}
        p={{ base: '2rem 1.5rem', md: '3rem 2rem' }}
        maxW="6xl"
        mx="auto"
        direction={{ base: 'column-reverse', lg: 'row-reverse' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={'space-between'}
      >
        <VStack
          alignItems={'start'}
          maxW={{ base: '70vw', md: '35rem' }}
          p={{ base: '0 1rem', md: '0 2rem' }}
        >
          <Flex flexWrap={'wrap'} w="full" my={'30px !important'}>
            {productInfo.fields.map((field, index) => (
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
                    h={{ base: '2.5rem', md: '3rem' }}
                    outline={'1px solid rgba(0,0,0,0.5)'}
                    borderRadius={0}
                    minW={'170px'}
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
                    {...register(`${field.name}`, {
                      required: `Please enter ${field.name}`,
                    })}
                  />
                )}

                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
            ))}
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
                variant={'custom-black'}
                onClick={() => setAction('browse')}
              >
                Browse Design
              </Button>
            )}

            <>
              <Button
                variant={'custom-black'}
                bg="black"
                color={'white'}
                _hover={{ bg: 'white', color: 'black' }}
                type="submit"
                onClick={() => {
                  setAction('upload');
                }}
              >
                Upload Design
              </Button>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={uploadImg}
                onChange={e => handleImg(e)}
              />
            </>
          </Stack>
        </VStack>
        <Center mx="auto">
          <Image src={productInfo.image} w={'full'} />
        </Center>
      </Stack>
      <Faq data={data} />
    </form>
  );
};

export { ProductDetails };
