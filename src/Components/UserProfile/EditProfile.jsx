import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormErrorMessage,
  InputGroup,
  Tooltip,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../Actions/userAction';

export const EditProfile = () => {
  const [updated, setUpdated] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    // make a separate react hook that gives error and then send toast based on that
    if (updated) {
      toast({
        title: 'Update success',
        description: 'PROFILE UPDATED',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
      setUpdated(false);
    }
  }, [updated, toast]);
  const onSubmit = data => {
    if (data.name || data.email || data.password) {
      dispatch(updateUserProfile(data));
      setUpdated(true);
    }
    reset();
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        size="sm"
        w={'full'}
        variant={'custom-black'}
        fontSize={['10px', '13px', '15px']}
      >
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <Input
                  fontSize="xl"
                  variant="custom"
                  borderBottom={'1px solid gray'}
                  type={'text'}
                  px="0.5rem"
                  h={{ base: '3rem', md: '3.6rem' }}
                  placeholder="Full Name"
                  {...register('name', {
                    minLength: { value: 2, message: 'Too Short' },
                  })}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <Input
                  fontSize="xl"
                  variant="custom"
                  borderBottom={'1px solid gray'}
                  type={'text'}
                  px="0.5rem"
                  h={{ base: '3rem', md: '3.6rem' }}
                  placeholder="Email"
                  _placeholder={{ color: 'gray.400' }}
                  {...register('email', {
                    pattern: {
                      value:
                        /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <Tooltip
                  hasArrow
                  w={{ base: '16rem', md: '16rem' }}
                  label="Minimum 8 Characters"
                  arrowSize={8}
                  placement="top"
                  closeOnClick={false}
                  color="black"
                  fontWeight={'200'}
                  bg="gray.200"
                >
                  <InputGroup>
                    <Input
                      fontSize="xl"
                      variant="custom"
                      borderBottom={'1px solid gray'}
                      px="0.5rem"
                      h={{ base: '3rem', md: '3.6rem' }}
                      placeholder="Password"
                      _placeholder={{ color: 'gray.400' }}
                      type={'text'}
                      {...register('password', {
                        minLength: {
                          value: 4,
                          message: 'Minimum 4 Characters',
                        },
                        /* pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                        message: 'Use a strong password',
                      }, */
                      })}
                    />
                  </InputGroup>
                </Tooltip>
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              variant={'custom-black'}
              mr={3}
              type={'submit'}
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </Button>
            <Button variant={'custom-black'} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
