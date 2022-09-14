import {
  Alert,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItemSample, editNavItem } from '../../Actions/itemAction';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getImages } from '../../Actions/imageAction';
export const NavChildren = ({ item, id, childIndex }) => {
  const {
    isOpen: openField,
    onOpen: onOpenField,
    onClose: onCloseField,
  } = useDisclosure();
  const {
    isOpen: isLoading,
    onOpen: onLoading,
    onClose: onCloseLoading,
  } = useDisclosure();
  const {
    isOpen: openImg,
    onOpen: onOpenImg,
    onClose: onCloseImg,
  } = useDisclosure();
  const { isOpen, onToggle } = useDisclosure();
  const {
    items: { navItem, loading },
    images: { imageData, loading: imagesLoading, error },
  } = useSelector(state => state);
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const uploadImg = useRef();
  let type = item.href.split('product/')[1];
  let productName =
    type === 'Paper-Stickers' || type === 'Transparent-Stickers'
      ? 'Stickers'
      : type.split('-').join(' ');
  function getFile(file, obj) {
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async function (e) {
        setValue({ image: e.target.result, ...obj });
      };
    }
  }
  const showImages = () => {
    if (!imageData || !imageData[productName]) {
      dispatch(getImages(productName));
    }
    onToggle();
  };
  useEffect(() => {
    if (!loading && navItem && isLoading) {
      onCloseLoading();
    }
  }, [navItem, loading, isLoading, onCloseLoading]);
  useEffect(() => {
    if (imagesLoading) onLoading();
    else if (!imagesLoading) onCloseLoading();
  }, [imagesLoading, onLoading, onCloseLoading]);
  return (
    <>
      <VStack
        key={item.label}
        bg={'whiteAlpha.800'}
        w={'full'}
        p={'20px'}
        alignItems={'flex-start'}
        gap={3}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        <Heading
          w={'full'}
          textAlign={'left'}
          color="#00509E"
          fontWeight={500}
          fontSize={['1.2rem', '1.5rem', '1.8rem']}
        >
          {item.label}
        </Heading>
        <HStack
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
          w={'full'}
          alignItems={'center'}
        >
          <Heading
            w={'200px'}
            textAlign={'left'}
            color="#00509E"
            fontWeight={500}
            fontSize={['1rem', '1.3rem', '1.5rem']}
          >
            Price :
          </Heading>
          <HStack gap={3}>
            <Heading fontWeight={500} fontSize={{ base: 'sm', md: 'lg' }}>
              ${item.price || 500}
            </Heading>
            <Button
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight={{ base: 500, md: 600 }}
              border={'1px solid gray'}
              onClick={() => {
                setValue({
                  id,
                  index: childIndex,
                  item: item.label,
                  price: item.price || 500,
                });
                onOpenField();
              }}
            >
              edit
            </Button>
          </HStack>
        </HStack>
        <VStack w={'full'} gap={2}>
          <Heading
            w={'full'}
            textAlign={'left'}
            color="#00509E"
            fontWeight={500}
            fontSize={['1rem', '1.3rem', '1.5rem']}
          >
            Fields
          </Heading>
          {item.fields.map((field, index) => (
            <HStack
              w={'full'}
              key={index}
              alignItems={'center'}
              justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            >
              <Heading
                fontWeight={500}
                fontSize={{ base: 'sm', md: 'lg' }}
                w={{ base: '115px', md: '200px' }}
              >
                {field.name} :
              </Heading>
              {field.value ? (
                <HStack gap={2} justifyContent={'flex-end'} wrap={'wrap'}>
                  {field.value.map((value, index) => (
                    <Text key={index} as={'span'}>
                      {value}{' '}
                    </Text>
                  ))}
                  <Button
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight={{ base: 500, md: 600 }}
                    border={'1px solid gray'}
                    onClick={() => {
                      setValue({
                        id,
                        index: childIndex,
                        item: item.label,
                        field: index,
                        value: field.value.toString(),
                      });
                      onOpenField();
                    }}
                  >
                    edit
                  </Button>
                </HStack>
              ) : (
                <Text>Type: {field.type}</Text>
              )}
            </HStack>
          ))}
        </VStack>
        <HStack alignItems={'flex-start'} gap={6}>
          <Heading
            color="#00509E"
            fontWeight={500}
            fontSize={['1rem', '1.3rem', '1.5rem']}
          >
            Images
          </Heading>
          <HStack wrap={'wrap'} spacing={0}>
            {item.image.map((url, index) => (
              <VStack key={index} spacing={0} p={1}>
                <Image
                  src={`${
                    url.split('q_auto')[0] +
                    'q_auto,h_700' +
                    url.split('q_auto')[1]
                  }`}
                  w={'120px'}
                  h={'100px'}
                ></Image>
                <VStack
                  p={2}
                  bg={'gray.500'}
                  w={'100%'}
                  cursor={'pointer'}
                  _hover={{ bg: 'gray.700' }}
                  transition={'all 0.1s linear'}
                  onClick={() => {
                    setValue({
                      id,
                      index: childIndex,
                      item: item.label,
                      type: 'Delete',
                      image: 'IPRESS' + url.split('/IPRESS')[1],
                    });
                    onOpenImg();
                  }}
                >
                  <DeleteIcon color={'white'} cursor={'pointer'} />
                </VStack>
              </VStack>
            ))}
          </HStack>
          <Button
            alignSelf={'flex-end'}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={{ base: 500, md: 600 }}
            onClick={() => {
              uploadImg.current.click();
            }}
          >
            Add <AddIcon ml={3} fontSize="12px" />
          </Button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={uploadImg}
            onChange={async e => {
              let obj = {
                id,
                index: childIndex,
                item: item.label,
                type: 'Upload',
              };
              getFile(e.target.files[0], obj);
              onOpenImg();
            }}
          />
        </HStack>
        <HStack alignItems={'flex-start'} gap={[2, 4, 6]}>
          <Heading
            color="#00509E"
            fontWeight={500}
            fontSize={['1rem', '1.3rem', '1.5rem']}
          >
            Product Images
          </Heading>
          <Flex flexDir={{ base: 'column', sm: 'row' }} gap={2}>
            <Button
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight={{ base: 500, md: 600 }}
              pos={'relative'}
            >
              Add Images
              <AddIcon
                ml={3}
                fontSize="12px"
                display={{ base: 'none', md: 'flex' }}
              />
              <Input
                type={'file'}
                pos={'absolute'}
                w={'100%'}
                opacity={0}
                onChange={async e => {
                  let obj = {
                    id,
                    index: childIndex,
                    item: item.label,
                    type: 'Upload',
                    folder: productName,
                  };
                  getFile(e.target.files[0], obj);
                  onOpenImg();
                }}
              />
            </Button>
            <Button
              colorScheme={isOpen ? 'red' : 'blue'}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight={{ base: 500, md: 600 }}
              onClick={showImages}
            >
              {isOpen ? 'Hide' : 'View'} Images
            </Button>
          </Flex>
        </HStack>
        <Flex wrap={'wrap'}>
          {isOpen &&
          imageData &&
          imageData[productName] &&
          imageData[productName].length > 0 ? (
            imageData[productName].map((img, index) => {
              let urlArr = img['secure_url'].split('upload/');
              let url = urlArr[0] + 'upload/q_auto,w_1000/' + urlArr[1];
              return (
                <VStack spacing={0} p={1} key={index}>
                  <Image
                    key={index}
                    src={`${
                      url.split('q_auto')[0] +
                      'q_auto,h_700' +
                      url.split('q_auto')[1]
                    }`}
                    w={'120px'}
                    h={'100px'}
                  ></Image>
                  <VStack
                    p={2}
                    bg={'gray.500'}
                    w={'100%'}
                    cursor={'pointer'}
                    _hover={{ bg: 'gray.700' }}
                    transition={'all 0.1s linear'}
                    onClick={() => {
                      setValue({
                        id,
                        index: childIndex,
                        item: item.label,
                        type: 'Delete',
                        folder: productName,
                        image: 'IPRESS' + url.split('/IPRESS')[1],
                      });
                      onOpenImg();
                    }}
                  >
                    <DeleteIcon color={'white'} cursor={'pointer'} />
                  </VStack>
                </VStack>
              );
            })
          ) : isOpen && !imagesLoading ? (
            <Text>No Image Found</Text>
          ) : isOpen && imagesLoading ? (
            <HStack>
              <Spinner
                thickness="3px"
                speed="0.65s"
                emptyColor="gray.200"
                color="green"
                size={'lg'}
              />
              <Text mx={3}>Loading...</Text>
            </HStack>
          ) : (
            ''
          )}
        </Flex>
      </VStack>

      {/* FIELD CHANGE MODAL */}
      <Modal key={'modal1'} isOpen={openField} onClose={onCloseField}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={500} fontSize={{ base: 'md', md: 'lg' }}>
            {value && value.price
              ? 'Enter Price'
              : 'Enter field values separated by commas'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              defaultValue={value.price || value.value}
              onChange={e => {
                let newValue = value.price
                  ? { price: e.target.value }
                  : { value: e.target.value };
                setValue({ ...value, ...newValue });
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              rounded={'none'}
              mr={3}
              onClick={onCloseField}
            >
              Close
            </Button>
            <Button
              type={'submit'}
              colorScheme="blue"
              rounded={'none'}
              onClick={() => {
                onLoading();
                onCloseField();
                if (value.price !== item.price) dispatch(editNavItem(value));
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* IMAGE UPLOAD MODAL */}
      <Modal key={'modal2'} isOpen={openImg} onClose={onCloseImg}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={500} fontSize={{ base: 'md', md: 'lg' }}>
            {value ? value.type : 'upload'} Image
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Do you want to {value ? value.type : 'upload'} the selected image
              ?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              rounded={'none'}
              mr={3}
              onClick={onCloseImg}
            >
              Cancel
            </Button>
            <Button
              type={'submit'}
              colorScheme="blue"
              rounded={'none'}
              onClick={() => {
                //ADD A DISPATCH TO SOME ACTION THAT SEND AI CALL TO UPDATE FIELD
                onCloseImg();
                if (value.folder) {
                  dispatch(editItemSample(value));
                  onToggle();
                } else {
                  onLoading();
                  dispatch(editNavItem(value));
                }
              }}
            >
              {value ? value.type : 'upload'} Image
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* LOADING MODAL */}
      <Modal
        key={'modal3'}
        closeOnOverlayClick={false}
        isOpen={isLoading}
        onClose={onCloseLoading}
      >
        <ModalOverlay />
        <ModalContent bg={'green.200'} w={{ base: '90%', sm: 'auto' }}>
          <ModalHeader color={'green.800'}>Loading...</ModalHeader>
          <ModalBody
            pb={6}
            display={'flex'}
            alignItems={'center'}
            px={{ base: 2, sm: 5 }}
          >
            <Spinner
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="green"
              size={'lg'}
            />
            <Text as="span" mx={3} fontSize={{ base: 'sm', md: 'md' }}>
              Please wait your changes are being updated.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
