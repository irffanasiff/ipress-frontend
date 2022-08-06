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
} from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { RiCustomerService2Line, RiUserLocationLine } from 'react-icons/ri';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsMinecart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Cart, Login, ChangePassword, Signup } from '../../Screens';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/userAction';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
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
          <Text color="white" mx={'auto'}>
            Fast delivery options available.{' '}
          </Text>
          <Text color="white">
            Sign up to our mailing list to receive exclusive discounts.
          </Text>
        </Marquee>
      </Center>
      <Container maxW="8xl" mx="auto" px={10} py={2}>
        <Flex alignItems={'center'} w={'52%'} justifyContent={'space-between'}>
          <Flex>
            <RiCustomerService2Line size={30} color={'#00509E'} />{' '}
            <Text mx={4}> 0813 894 1946 </Text>
          </Flex>
          <Flex>
            <RiUserLocationLine size={30} color={'#00509E'} />
            <Text mx={4}> View our locations </Text>
          </Flex>
          <NavLink to="/">
            <Image src={Logo} alt="print" w={'90px'} h={'90px'} />{' '}
          </NavLink>
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
            w={{ base: '30vw', sm: '40vw' }}
            fontSize={'md'}
            fontWeight={500}
            position={'relative'}
          >
            <Input
              bgColor={'white'}
              outline={'1px solid #00509E'}
              borderRadius={'0'}
              width={'100%'}
              maxW={'200px'}
              value={searchInput}
              placeholder={'Search...'}
              onChange={e => setSearchInput(e.target.value)}
              onFocus={e => {
                if (!searchVisible) setSearchVisible(true);
              }}
            />

            <Box
              bgColor={'#00509E'}
              color={'white'}
              outline={'1px solid #00509E'}
              px={2}
              py={'1'}
              alignSelf={'stretch'}
            >
              <AiOutlineSearch size={32} />
            </Box>

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
                borderRadius={'8px'}
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
              </VStack>
            ) : (
              ''
            )}
          </Box>
          <Center gap={4}>
            {userInfo ? (
              <Box key="user_dropdown">
                <Menu isLazy m="auto">
                  <MenuButton
                    fontWeight={500}
                    m={'auto'}
                    p={'5px 15px'}
                    borderRadius={'8px'}
                    border={`1px solid gray`}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    {userDetails.user.name
                      ? userDetails.user.name.split(' ')[0]
                      : ''}
                  </MenuButton>
                  <MenuList>
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
                <AiOutlineUser size={32} /> Signup
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
              gap="1rem"
              fontSize={'md'}
              fontWeight={500}
              href={'#'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <BsMinecart size={32} /> Cart
            </Box>
          </Center>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
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
        <DesktopNav />
      </Center>
    </Container>
  );
}

const DesktopNav = () => {
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
                color={'black'}
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

            {navItem.children && (
              <PopoverContent
                border={'1px solid #00509E'}
                boxShadow={'2xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
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

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NavLink to={href}>
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'gray.50' }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={'red.300'}
              fontWeight={500}
              fontSize={'sm'}
            >
              {label}
            </Text>
            <Text fontSize={'xs'}>{subLabel}</Text>
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

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
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
        <Text fontWeight={500} cursor={'pointer'}>
          {label}
        </Text>
        {children && (
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
          {children &&
            children.map(child => (
              <NavLink to={child.href} key={child.label} py={2}>
                {child.label}
              </NavLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Large Formats',
    href: '/product/Banners',
    children: [
      {
        label: 'Flex Banner/Event Backdrops',
        subLabel: 'Trending Design to inspire you',
        href: '/product/Banners',
      },
      {
        label: 'Billboards',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Billboards',
      },
      {
        label: 'Dummy Cheques',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Dummy-Cheques',
      },
      {
        label: 'Roll Up Stands',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Roll-Up-Stands',
      },
      {
        label: 'Instagram Frame Boards',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Instagram-Frame-Boards',
      },
      {
        label: 'Car/Bike/Tricycle Branding',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Car-Bike-Tricycle-Branding',
      },
      {
        label: 'Window Graphics',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Window-Graphics',
      },
    ],
  },
  {
    label: 'Clothes Branding',
    children: [
      {
        label: 'Tshirts',
        subLabel: 'Find your dream design job',
        href: '/product/Tshirts',
      },
      {
        label: 'Caps',
        subLabel: 'Find your dream design job',
        href: '/product/Caps',
      },
      {
        label: 'Towels',
        subLabel: 'Find your dream design job',
        href: '/product/Towels',
      },
    ],
  },
  {
    label: 'Cards',
    children: [
      {
        label: 'Business Cards',
        subLabel: 'Find your dream design job',
        href: '/product/Business-Cards',
      },
      {
        label: 'Greeting Cards',
        subLabel: 'Find your dream design job',
        href: '/product/Greeting-Cards',
      },
      {
        label: 'ID Card',
        subLabel: 'Find your dream design job',
        href: '/product/Id-Cards',
      },
      {
        label: 'Wedding Invitations',
        subLabel: 'Find your dream design job',
        href: '/product/Wedding',
      },
      {
        label: 'Scratch Card',
        subLabel: 'Find your dream design job',
        href: '/product/Scratch-Card',
      },
      {
        label: 'Bookmarks',
        subLabel: 'Find your dream design job',
        href: '/product/Bookmarks',
      },
      {
        label: 'Event Badge',
        subLabel: 'Find your dream design job',
        href: '/product/Event-Badge',
      },
      {
        label: 'Lanyards',
        subLabel: 'Find your dream design job',
        href: '/product/Lanyards',
      },
      {
        label: 'Lapel Pin',
        subLabel: 'Find your dream design job',
        href: '/product/Lapel-Pin',
      },
    ],
  },
  {
    label: 'Custom/Promotional Gifts',
    children: [
      {
        label: 'Mouse Pads',
        subLabel: 'Find your dream design job',
        href: '/product/Mouse-Pads',
      },
      {
        label: 'Key Rings',
        subLabel: 'Find your dream design job',
        href: '/product/Key-Rings',
      },
      {
        label: 'Mugs',
        subLabel: 'Find your dream design job',
        href: '/product/Mugs',
      },
      {
        label: 'Corporate Gifts/Promotional Items',
        subLabel: 'Find your dream design job',
        href: '/product/Corporate-Gifts',
      },
      {
        label: 'Bags',
        subLabel: 'Find your dream design job',
        href: '/product/Bags',
      },
    ],
  },
  {
    label: 'Booklets',
    children: [
      {
        label: 'Brochures',
        subLabel: 'Find your dream design job',
        href: '/product/Brochures',
      },
      {
        label: 'Flyers/Leaflets',
        subLabel: 'Find your dream design job',
        href: '/product/Flyers',
      },
      {
        label: 'Posters',
        subLabel: 'Find your dream design job',
        href: '/product/Posters',
      },
      {
        label: 'Calender',
        subLabel: 'Find your dream design job',
        href: '/product/Calender',
      },
      {
        label: 'Magazines',
        subLabel: 'Find your dream design job',
        href: '/product/Magazines',
      },
      {
        label: 'Company Profile',
        subLabel: 'Find your dream design job',
        href: '/product/Company-Profile',
      },
      {
        label: 'Books',
        subLabel: 'Find your dream design job',
        href: '/product/Books',
      },
      {
        label: 'Jotter',
        subLabel: 'Find your dream design job',
        href: '/product/Jotter',
      },
    ],
  },
  {
    label: 'Stationery',
    children: [
      {
        label: 'Envelope',
        subLabel: 'Find your dream design job',
        href: '/product/Envelope',
      },
      {
        label: 'Certificates',
        subLabel: 'Find your dream design job',
        href: '/product/Certificates',
      },
      {
        label: 'Letterheads',
        subLabel: 'Find your dream design job',
        href: '/product/Letterheads',
      },
    ],
  },
  {
    label: 'Label & Stickers',
    children: [
      {
        label: 'Paper Stickers',
        subLabel: 'Find your dream design job',
        href: '/product/Paper-Stickers',
      },
      {
        label: 'Transparent Stickers',
        subLabel: 'Find your dream design job',
        href: '/product/Transparent-Stickers',
      },
    ],
  },
  {
    label: 'Awards',
    children: [
      {
        label: 'Wooden Plaque',
        subLabel: 'Find your dream design job',
        href: '/product/Wooden-Plaque',
      },
      {
        label: 'Acrylic',
        subLabel: 'Find your dream design job',
        href: '/product/Acrylic',
      },
      {
        label: 'Crystal',
        subLabel: 'Find your dream design job',
        href: '/product/Crystal',
      },
      {
        label: 'Mettalic',
        subLabel: 'Find your dream design job',
        href: '/product/Mettalic',
      },
    ],
  },
  {
    label: 'Customer Reviews',
  },
];
