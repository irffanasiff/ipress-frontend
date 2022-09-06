import Marquee from 'react-fast-marquee';
import Logo from '../../Images/logo.webp';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  useDisclosure,
  Container,
  Heading,
  Center,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Input,
  VStack,
  useOutsideClick,
  Image,
  Avatar,
} from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { RiCustomerService2Line, RiUserLocationLine } from 'react-icons/ri';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsMinecart } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Cart, Login, ChangePassword, Signup } from '../../Screens';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/userAction';

export default function WithSubnavigation({ product, category, NAV_ITEMS }) {
  const { isOpen, onToggle } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector(state => state.userLogin);
  const userDetails = useSelector(state => state.userDetails);
  const { userInfo } = userLogin;
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const btnRef = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setSearchInput(''),
  });
  const onSignupClickHandler = () => {
    onDrawerOpen();
    if (userInfo) setDrawerContent(3);
    else setDrawerContent(1);
  };
  const logoutHandeler = () => {
    dispatch(logout());
  };
  const onCartClickHandler = () => {
    onDrawerOpen();
    setDrawerContent(2);
  };
  const renderList = word => {
    let items = [];
    NAV_ITEMS.forEach(item => {
      let label;
      if (item.children)
        label = item.children.filter(child => {
          return child.label.toLowerCase().includes(word.toLowerCase());
        });
      if (label) items = [...items, ...label];
    });
    return items;
  };
  return (
    <Container maxW="9xl" display="flex" flexDirection={'column'} p="0">
      <Center maxW="8xl" w="100%" mx="auto" bgColor="#00509E" py={{ base: 4 }}>
        {' '}
        {/* TOP 1: MARQUEE */}
        <Marquee
          style={{
            width: '70%',
          }}
          speed={80}
          gradient={false}
        >
          <Text color="white" mx={{ base: '100px' }}>
            Fast delivery options available.{' '}
          </Text>
          <Text color="white">
            Sign up to our mailing list to receive exclusive discounts.
          </Text>
        </Marquee>
      </Center>
      <Container maxW="8xl" mx="auto" px={{ base: 3, sm: 6, lg: 10 }} py={2}>
        <Flex
          alignItems={'center'}
          w={{ base: '100%', md: '52%' }}
          justifyContent={'space-between'}
          fontSize={{ base: 'sm', md: '1rem', xl: '1.2rem' }}
        >
          <Center>
            <Icon
              as={RiCustomerService2Line}
              color={'#00509E'}
              w={{ base: 5, md: 6 }}
              h={{ base: 5, md: 6 }}
            ></Icon>
            <Text mx={{ base: 1, md: 3, lg: 4 }}> 0813 894 1946 </Text>
          </Center>
          <Center
            display={{ base: 'none', md: 'flex' }}
            onClick={() => {
              navigate('/customer-support/stores');
            }}
            _hover={{ cursor: 'pointer' }}
          >
            <Icon as={RiUserLocationLine} color={'#00509E'} w={6} h={6}></Icon>
            <Text mx={{ md: 3, lg: 4 }} _hover={{ cursor: 'pointer' }}>
              {' '}
              View our locations{' '}
            </Text>
          </Center>
          <NavLink to="/">
            <Image
              src={Logo}
              alt="print"
              w={{ base: '60px', md: '90px' }}
              h={{ base: '60px', md: '90px' }}
            />{' '}
          </NavLink>
          <Flex display={{ base: 'flex', md: 'none' }} alignItems={'center'}>
            <Icon as={RiUserLocationLine} color={'#00509E'} w={5} h={5}></Icon>
            <Text mx={1}> Our Locations </Text>
          </Flex>
        </Flex>
      </Container>
      <Container maxW="8xl" mx="auto" px={0}>
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4, sm: 8, lg: 10 }}
          align={'center'}
          bgColor="#DFB373"
          justify={'space-between'}
        >
          {/* Toggle button for small screen */}
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
          >
            <IconButton
              _hover={{ bg: '#bf730c', color: 'white' }}
              _active={{ bg: '#bf730c', color: 'white' }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon size={32} />
                ) : (
                  <HiOutlineMenuAlt4 size={32} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Box
            display="flex"
            flexDirection={'row'}
            alignItems="center"
            w={{ base: '30vw' }}
            minW={'150px'}
            mx={2}
            h={{ base: '25px', md: '35px' }}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={500}
            position={'relative'}
          >
            <Input
              bgColor={'white'}
              fontSize={{ base: 'sm', md: 'md' }}
              outline={'1px solid #00509E'}
              borderRadius={'0'}
              width={'100%'}
              h={'100%'}
              maxW={'250px'}
              value={searchInput}
              placeholder={'Search...'}
              onChange={e => setSearchInput(e.target.value)}
              onFocus={e => {
                if (!searchVisible) setSearchVisible(true);
              }}
            />

            <Center
              bgColor={'#00509E'}
              color={'white'}
              outline={'1px solid #00509E'}
              px={2}
              alignSelf={'stretch'}
            >
              <Icon
                as={AiOutlineSearch}
                w={{ base: 4, md: 6 }}
                h={{ base: 4, md: 6 }}
              ></Icon>
            </Center>

            {searchInput ? (
              <VStack
                ref={ref}
                position={'absolute'}
                top={'100%'}
                bgColor={'white'}
                left={0}
                boxShadow={'md'}
                display={searchVisible ? 'flex' : 'none'}
                width={searchVisible ? '100%' : '0%'}
                minW={searchVisible ? '150px' : '0'}
                maxH={'400px'}
                overflowY={'auto'}
                maxW={'200px'}
                alignItems={'stretch'}
                zIndex={100}
              >
                {renderList(searchInput).map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item.href}
                      onClick={() => setSearchInput('')}
                    >
                      <Text
                        p={2}
                        px={3}
                        w={'full'}
                        textAlign={'left'}
                        _hover={{ bg: 'gray.200' }}
                        color={'black'}
                        fontSize={{ base: 'sm', md: 'md' }}
                      >
                        {item.label}
                      </Text>
                    </NavLink>
                  );
                })}
                {renderList(searchInput).length === 0 ? (
                  <Text
                    p={2}
                    px={3}
                    w={'full'}
                    textAlign={'left'}
                    color={'gray.500'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    No match found.
                  </Text>
                ) : (
                  ''
                )}
              </VStack>
            ) : (
              ''
            )}
          </Box>
          <Center gap={{ base: 2, md: 4 }}>
            {userInfo ? (
              <Box key="user_dropdown">
                <Menu isLazy m="auto">
                  <MenuButton
                    fontWeight={500}
                    m={'auto'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <Avatar
                      w={['30px', '36px']}
                      h={['30px', '36px']}
                      bg={'gray.300'}
                      borderRadius="50%"
                      textAlign={'left'}
                    />
                  </MenuButton>
                  <MenuList zIndex={5}>
                    <Link to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={logoutHandeler}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            ) : (
              <Box
                as="button"
                onClick={onSignupClickHandler}
                display="flex"
                flexDirection={'row'}
                alignItems="center"
                fontSize={'md'}
                fontWeight={500}
              >
                <Avatar w={['30px']} h={['30px']} bg={'black'} mx={3}></Avatar>
                <Text as="span" display={{ base: 'none', md: 'inline' }}>
                  Signup
                </Text>
              </Box>
            )}

            <Drawer
              isOpen={isDrawerOpen}
              placement="right"
              size={'xl'}
              onClose={onDrawerClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg="white">
                  {drawerContent === 1 ? (
                    <Signup close={onDrawerClose} reset={setDrawerContent} />
                  ) : drawerContent === 2 ? (
                    <Cart />
                  ) : drawerContent === 3 ? (
                    <ChangePassword close={onDrawerClose} />
                  ) : drawerContent === 4 ? (
                    <Login close={onDrawerClose} reset={setDrawerContent} />
                  ) : (
                    <Container>
                      <Box>Profile</Box>
                      <Box>Profile</Box>
                      <Box>Profile</Box>
                    </Container>
                  )}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Box
              as="button"
              onClick={onCartClickHandler}
              display="flex"
              flexDirection={'row'}
              alignItems="center"
              gap={2}
              fontSize={'md'}
              fontWeight={500}
              href={'#'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <Icon
                as={BsMinecart}
                w={{ base: 6, md: 8 }}
                h={{ base: 6, md: 8 }}
              ></Icon>
              <Text as="span" display={{ base: 'none', md: 'inline' }}>
                Cart
              </Text>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <NavLink to="/customer-support">
                <Text>Customer Support</Text>
              </NavLink>
            </Box>
          </Center>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav
            category={category}
            product={product}
            toggle={onToggle}
            NAV_ITEMS={NAV_ITEMS}
          />
        </Collapse>
      </Container>
      <Center
        maxW="8xl"
        display={['none', 'none', 'none', 'flex']}
        w={'100%'}
        mx="auto"
        px={10}
        py={4}
      >
        <DesktopNav
          category={category}
          product={product}
          NAV_ITEMS={NAV_ITEMS}
        />
      </Center>
    </Container>
  );
}

const DesktopNav = ({ category, product, NAV_ITEMS }) => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} justifyContent={'space-between'} w={'100%'}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Center
                as={Link}
                to={navItem.href ?? '#'}
                fontSize={{ md: 'sm', lg: 'sm', xl: 'md' }}
                fontWeight={500}
                color={
                  `/category/${category}` === navItem.href ||
                  category === navItem.label
                    ? 'red'
                    : 'black'
                }
                textAlign={'center'}
                _hover={{
                  textDecoration: 'none',
                  color: 'red.400',
                }}
                cursor={'pointer'}
              >
                {navItem.label}
              </Center>
            </PopoverTrigger>

            {navItem.children && navItem.children.length > 0 && (
              <PopoverContent
                border={'1px solid #00509E'}
                boxShadow={'2xl'}
                bg={popoverContentBgColor}
                p={2}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                      product={product}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, product }) => {
  return (
    <NavLink to={href}>
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'gray.50' }}
      >
        <Stack
          direction={'row'}
          align={'center'}
          color={product === label ? 'red' : 'black'}
        >
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={'red.300'}
              fontWeight={500}
              fontSize={'sm'}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </NavLink>
  );
};

const MobileNav = ({ category, product, toggle, NAV_ITEMS }) => {
  return (
    <Stack bg={'white'} p={4} display={{ lg: 'none' }}>
      {NAV_ITEMS.map(navItem => {
        return navItem.children ? (
          <MobileNavItem
            key={navItem.label}
            {...navItem}
            product={product}
            category={category}
            toggle={toggle}
          />
        ) : (
          <Text
            key={navItem.label}
            fontWeight={500}
            cursor={'pointer'}
            color={category === navItem.label ? 'red' : 'black'}
          >
            {navItem.label}
          </Text>
        );
      })}
    </Stack>
  );
};

const MobileNavItem = ({
  label,
  children,
  href,
  product,
  category,
  toggle,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={500}
          cursor={'pointer'}
          color={category === label ? 'red' : 'black'}
        >
          {label}
        </Text>
        {children.length > 0 && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children.length > 0 &&
            children.map((child, index) => (
              <Text
                key={index}
                color={product === child.label ? 'red' : 'black'}
                onClick={toggle}
              >
                <NavLink
                  to={child.href}
                  key={child.label}
                  py={2}
                  color={'red !important'}
                >
                  {child.label}
                </NavLink>
              </Text>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
