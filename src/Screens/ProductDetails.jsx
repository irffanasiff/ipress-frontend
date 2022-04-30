import {
  Button,
  Select,
  FormControl,
  Container,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
  Center,
  Stack,
  Input,
  FormErrorMessage,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../Components/Product/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, saveProducts } from '../Actions/productAction';
import { useNavigate, generatePath } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Faq from '../Components/Sections/FAQ';

const isAdmin = true;
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
  let productInfo = {
    image:
      'https://i.pinimg.com/736x/0e/fe/72/0efe728db4b33f979300967d7723c756.jpg',
    name: id,
    details: `Get custom ${id} with all the details you need. Explore fully customisable templates, or upload your own design`,
    fields: [
      {
        name: 'product_orientation',
        placeholder: 'Product Orientation (landscape or portrait)',
        type: 'text',
      },
      { name: 'length', placeholder: 'Length (in inches)', grow: 1 },
      { name: 'breadth', placeholder: 'Breadth (in inches)', grow: 1 },
      { name: 'paper_thickness', placeholder: 'Paper thickness(in mm)' },
      { name: 'quantity', placeholder: 'Quantity' },
    ],
    browseDesign: true,
    uploadDesign: true,
  };
  return productInfo;
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
  const [qty, setQty] = useState(0);
  //const navigate = useNavigateParams();
  const productInfo = product(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  /* const addToCartHandler = () => {
    navigate(`/cart/${id}`, `qty=${qty}`);
  }; */

  const handleImg = e => {
    let img = URL.createObjectURL(e.target.files[0]);
    setUrl(img);
    navigate(`/designs/${id}/editor`);
  };
  const onSubmit = ({
    quantity,
    paper_thickness,
    product_orientation,
    length,
    breadth,
  }) => {
    if (action === 'upload') {
      uploadImg.current.click();
    } else if (action === 'browse') {
      navigate(`/designs/${id}`);
    }
    const product = {
      name: productInfo.name,
      fields: [
        {
          quantity,
          paper_thickness,
          product_orientation,
          size: length + '_' + breadth,
        },
      ],
      browseDesign: false,
      uploadDesign: false,
    };
    action === 'upload'
      ? (product.uploadDesign = true)
      : (product.browseDesign = true);
    dispatch(saveProducts(product));
    console.log(action);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={{ base: '4rem', lg: '2rem' }}
        p={{ base: '4rem 1.5rem', md: '6rem 2rem' }}
        maxW="6xl"
        mx="auto"
        direction={{ base: 'column-reverse', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={'space-between'}
      >
        <VStack alignItems={'start'} maxW={{ base: '70vw', md: '35rem' }}>
          <Heading fontWeight={'400'}>{productInfo.name}</Heading>
          <Text>{productInfo.details}</Text>
          <Flex flexWrap={'wrap'} w="full" p={{ base: '1rem', md: '2rem' }}>
            {productInfo.fields.map((field, index) => (
              <FormControl
                flexGrow={field.grow || 1}
                isRequired
                mb="1rem"
                key={index}
                w={{ base: 'full', md: field.grow ? '50%' : 'full' }}
              >
                <Input
                  fontSize="xl"
                  variant="custom"
                  borderBottom={'1px solid gray'}
                  type={field.type || 'number'}
                  px="0.5rem"
                  h={{ base: '3rem', md: '3.6rem' }}
                  size={{ base: 'sm', md: 'lg' }}
                  placeholder={field.placeholder}
                  {...register(`${field.name}`, {
                    required: `Please enter ${field.placeholder}`,
                  })}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
            ))}
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify={'space-around'}
            w="full"
          >
            {productInfo.browseDesign && (
              <Button
                type="submit"
                variant={'custom-black'}
                onClick={() => setAction('browse')}
              >
                Browse Design
              </Button>
            )}
            {productInfo.uploadDesign && (
              <>
                <Button
                  variant={'custom-black'}
                  color="red"
                  borderColor={'red'}
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
            )}
          </Stack>
        </VStack>
        <Center mx="auto">
          <Image src={productInfo.image} w={{ base: '18rem', md: '25rem' }} />
        </Center>
      </Stack>
      <Faq data={data} />
    </form>
  );
};

export { ProductDetails };
