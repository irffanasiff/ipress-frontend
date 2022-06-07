import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
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
  UnorderedList,
  ListItem,
  VStack,
  useOutsideClick,
} from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
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
    <Container
      maxW="9xl"
      display="flex"
      gap="1rem"
      flexDirection={'column'}
      p="0"
    >
      <Container maxW="7xl" mx="auto">
        <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
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
          <Flex
            display={{ base: 'none', lg: 'flex' }}
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
          >
            <Heading
              fontWeight={'300'}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('gray.800', 'white')}
            >
              <Link to="/">ipress</Link>
            </Heading>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}></Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Box
              as="button"
              display="flex"
              flexDirection={'row'}
              justifyContent={'flex-end'}
              alignItems="center"
              gap="1rem"
              w={{ base: '30vw', sm: '40vw' }}
              fontSize={'md'}
              fontWeight={600}
              href={'#'}
              _hover={{
                textDecoration: 'underline',
              }}
              position={'relative'}
            >
              <Box display={{ md: 'none' }}>
                <AiOutlineSearch
                  size={32}
                  onClick={() => setSearchVisible(!searchVisible)}
                />
              </Box>

              <Input
                display={{ md: 'none' }}
                width={searchVisible ? '90%' : '0%'}
                maxW={'200px'}
                opacity={searchVisible ? '1' : '0'}
                transition={'all 0.5s linear'}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <Box display={{ base: 'none', md: 'block' }}>
                <AiOutlineSearch size={32} />
              </Box>
              <Input
                display={{ base: 'none', md: 'block' }}
                width={'90%'}
                maxW={'200px'}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onFocus={e => {
                  if (!searchVisible) setSearchVisible(true);
                }}
              />
              {searchInput ? (
                <VStack
                  ref={ref}
                  position={'absolute'}
                  top={'100%'}
                  bgColor={'white'}
                  right={['-20%', '0']}
                  boxShadow={'md'}
                  display={searchVisible ? 'flex' : 'none'}
                  width={searchVisible ? '90%' : '0%'}
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
                          color={'#646464'}
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
            {userInfo ? (
              <Box key="user_dropdown">
                <Menu isLazy m="auto">
                  <MenuButton
                    fontWeight={600}
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
                fontWeight={600}
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
              fontWeight={600}
              href={'#'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <BsMinecart size={32} />
            </Box>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
      <Center display={['none', 'none', 'none', 'flex']} mx="auto">
        <DesktopNav />
      </Center>
    </Container>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={{ base: 2, lg: 6 }}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                p={{ base: 2 }}
                href={navItem.href ?? '#'}
                fontSize={{ md: 'sm', lg: 'lg' }}
                fontWeight={500}
                color={'gray.600'}
                _hover={{
                  textDecoration: 'none',
                  color: 'red.400',
                }}
                cursor={'pointer'}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
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
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
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
    children: [
      {
        label: 'Flex Banners',
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
        label: 'Instagram Frames',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Instagram-Frames',
      },
      {
        label: 'Backdrops',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Backdrops',
      },
      {
        label: 'Car Branding',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Car-Branding',
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
        label: 'Throw Pillows',
        subLabel: 'Find your dream design job',
        href: '/product/Throw-Pillows',
      },
      {
        label: 'Jersey',
        subLabel: 'Find your dream design job',
        href: '/product/Jersey',
      },
      {
        label: 'Jean Patch Work',
        subLabel: 'Find your dream design job',
        href: '/product/Jean-Patch',
      },
      {
        label: 'Caps',
        subLabel: 'Find your dream design job',
        href: '/product/Caps',
      },
      {
        label: 'Kaftan',
        subLabel: 'Find your dream design job',
        href: '/product/Kaftan',
      },
      {
        label: 'Baby Beeps',
        subLabel: 'Find your dream design job',
        href: '/product/Baby-Beeps',
      },
      {
        label: 'Seat Covers',
        subLabel: 'Find your dream design job',
        href: '/product/Seat-Covers',
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
        label: 'Wedding IV',
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
        label: 'Membership Cards',
        subLabel: 'Find your dream design job',
        href: '/product/Membership-Card',
      },
      {
        label: 'Lanyards',
        subLabel: 'Find your dream design job',
        href: '/product/Lanyards',
      },
      {
        label: 'Laoel Pin',
        subLabel: 'Find your dream design job',
        href: '/product/Laoel-Pin',
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
        label: 'Flash Drives',
        subLabel: 'Find your dream design job',
        href: '/product/Flash-Drives',
      },
      {
        label: 'Promotional Items',
        subLabel: 'Find your dream design job',
        href: '/product/Promotional-Items',
      },
      {
        label: 'Corporate Gifts',
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
        label: 'Flyers',
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
        label: 'Diary',
        subLabel: 'Find your dream design job',
        href: '/product/Diary',
      },
      {
        label: 'Receipts',
        subLabel: 'Find your dream design job',
        href: '/product/Receipts',
      },
      {
        label: 'Company Profile',
        subLabel: 'Find your dream design job',
        href: '/product/Company-Profile',
      },
      {
        label: 'Prospectus',
        subLabel: 'Find your dream design job',
        href: '/product/Prospectus',
      },
      {
        label: 'Tickets/Vouchers',
        subLabel: 'Find your dream design job',
        href: '/product/Tickets',
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
        label: 'Notepads',
        subLabel: 'Find your dream design job',
        href: '/product/Notepads',
      },
      {
        label: 'Pens',
        subLabel: 'Find your dream design job',
        href: '/product/Pens',
      },
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
        label: 'Folders',
        subLabel: 'Find your dream design job',
        href: '/product/Folders',
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
        label: 'Clothing Labels',
        subLabel: 'Find your dream design job',
        href: '/product/Clothing-Labels',
      },
      {
        label: 'White Stickers',
        subLabel: 'Find your dream design job',
        href: '/product/White-Stickers',
      },
      {
        label: 'Transparent Sticker',
        subLabel: 'Find your dream design job',
        href: '/product/Transparent-Sticker',
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
    label: 'Graphic Design',
    children: [
      {
        label: 'New Design',
        subLabel: 'Find your dream design job',
        href: '/product/New-Design',
      },
      {
        label: 'Editing',
        subLabel: 'Find your dream design job',
        href: '/product/Editing',
      },
      {
        label: 'Logo Creation',
        subLabel: 'Find your dream design job',
        href: '/product/Logo-Creation',
      },
    ],
  },
  {
    label: 'Store',
    children: [
      {
        label: 'Branded Tshirts',
        subLabel: 'Find your dream design job',
        href: '/product/Branded-Tshirts',
      },
      {
        label: 'Plain Tshirts',
        subLabel: 'Find your dream design job',
        href: '/product/Plain-Tshirts',
      },
      {
        label: 'Gifts',
        subLabel: 'Find your dream design job',
        href: '/product/Gifts',
      },
      {
        label: 'Machines',
        subLabel: 'Find your dream design job',
        href: '/product/Machines',
      },
    ],
  },
  {
    label: 'Customer Reviews',
  },
];
