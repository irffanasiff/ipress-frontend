import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';

export const InquiryForm = ({ fields, errors, register }) => {
  return (
    <>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
        w={{
          base: 'full',
          md: '44%',
        }}
        minW={'200px'}
      >
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>First Name</FormLabel>
        <Input
          outline={'1px solid rgba(0,0,0,0.3)'}
          fontSize={{ base: 'sm', md: 'md' }}
          type={'text'}
          px="0.5rem"
          h={{ base: '1.5rem', md: '2rem' }}
          size={{ base: 'sm', md: 'md' }}
          _focus={{
            outline: '2px solid rgba(0,0,0,0.5)',
            boxShadow: 'none',
          }}
          {...register('First Name', {
            required: `Please enter your first name`,
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
        w={{
          base: 'full',
          md: '44%',
        }}
        minW={'200px'}
      >
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Last Name</FormLabel>
        <Input
          outline={'1px solid rgba(0,0,0,0.3)'}
          fontSize={{ base: 'sm', md: 'md' }}
          type={'text'}
          px="0.5rem"
          h={{ base: '1.7rem', md: '2.2rem' }}
          size={{ base: 'sm', md: 'md' }}
          _focus={{
            outline: '2px solid rgba(0,0,0,0.5)',
            boxShadow: 'none',
          }}
          {...register('Last Name', {
            required: `Please enter your last name`,
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
        w={{
          base: 'full',
          md: '80%',
        }}
      >
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
        <Input
          outline={'1px solid rgba(0,0,0,0.3)'}
          _focus={{
            outline: '2px solid rgba(0,0,0,0.5)',
            boxShadow: 'none',
          }}
          fontSize={{ base: 'sm', md: 'md' }}
          type={'email'}
          px="0.5rem"
          h={{ base: '1.7rem', md: '2.2rem' }}
          size={{ base: 'sm', md: 'md' }}
          {...register('Email', {
            required: `Please enter your email`,
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <Text
        w={'100%'}
        fontSize={{ base: 'sm', md: 'md' }}
        my={5}
        mx={{ base: 0, md: 3 }}
      >
        Select your product details:
      </Text>
      {fields.map((field, index) => (
        <FormControl
          minW={field.type === 'option' ? '176px' : '100px'}
          isInvalid={errors.name}
          mx={{ base: 0, md: 3 }}
          isRequired
          mb={{ base: '1rem', md: '1.5rem' }}
          key={index}
          w={{
            base: 'full',
            md: field.type === 'textarea' ? '100%' : field.type ? '40%' : '45%',
          }}
        >
          <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
            {field.label || field.name}
          </FormLabel>
          {field.type === 'option' ? (
            <Select
              h={{ base: '1.7rem', md: '2.2rem' }}
              outline={'1px solid rgba(0,0,0,0.3)'}
              _focus={{
                outline: '2px solid rgba(0,0,0,0.5)',
                boxShadow: 'none',
              }}
              borderRadius={0}
              fontSize={{ base: 'sm', md: 'md' }}
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
              outline={'1px solid rgba(0,0,0,0.3)'}
              _focus={{
                outline: '2px solid rgba(0,0,0,0.5)',
                boxShadow: 'none',
              }}
              fontSize={{ base: 'sm', md: 'md' }}
              type={field.type || 'text'}
              px="0.5rem"
              h={{ base: '1.7rem', md: '2.2rem' }}
              size={{ base: 'sm', md: 'md' }}
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
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
        w={{
          base: 'full',
          md: '70%',
        }}
      >
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Phone</FormLabel>
        <Input
          outline={'1px solid rgba(0,0,0,0.3)'}
          _focus={{
            outline: '2px solid rgba(0,0,0,0.5)',
            boxShadow: 'none',
          }}
          fontSize={{ base: 'sm', md: 'md' }}
          type={'tel'}
          px="0.5rem"
          h={{ base: '1.7rem', md: '2.2rem' }}
          size={{ base: 'sm', md: 'md' }}
          {...register('Phone', {
            required: `Please enter your phone number`,
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb="1.5rem"
        w={{
          base: 'full',
          md: '100%',
        }}
      >
        <Textarea
          fontSize="md"
          outline={'1px solid rgba(0,0,0,0.3)'}
          _focus={{
            outline: '2px solid rgba(0,0,0,0.5)',
            boxShadow: 'none',
          }}
          px="0.5rem"
          minH={'150px'}
          placeholder={'Tell us a litte bit about the design you have in mind.'}
          {...register('Description', {
            required: `Please enter Description`,
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
        w={{
          base: 'full',
          md: '60%',
        }}
      >
        <Input
          _focus={{
            outline: 'none',
            boxShadow: 'none',
          }}
          fontSize={'sm'}
          type={'file'}
          px="0.5rem"
          size={{ base: 'sm' }}
          {...register('Upload', {
            required: `Please upload your design`,
          })}
        />
        <FormLabel fontSize={{ base: 'xs', md: 'sm' }}>
          Upload supported file (Max 15MB)
        </FormLabel>
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={errors.name}
        mx={{ base: 0, md: 3 }}
        isRequired
        mb={{ base: '1rem', md: '1.5rem' }}
      >
        <Checkbox
          {...register('T&C', {
            required: `Please accept the terms & conditions.`,
          })}
        >
          <Text as={'span'} fontSize={{ base: 'xs', md: 'sm' }}>
            I accept the terms and conditions.
          </Text>
        </Checkbox>
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
