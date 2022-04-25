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
} from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsMinecart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Cart, Login, ChangePassword } from '../../Screens';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/userAction';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState();
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
  const onLoginClickHandler = () => {
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
            display={{ base: 'flex', md: 'none' }}
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
            display={{ base: 'none', md: 'flex' }}
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
              alignItems="center"
              gap="1rem"
              w={{ base: '2rem', md: '8rem' }}
              fontSize={'md'}
              fontWeight={600}
              href={'#'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <AiOutlineSearch size={32} />
              <Text display={{ base: 'none', md: 'block' }}>Search</Text>
            </Box>
            {userInfo ? (
              <Box key="user_dropdown">
                <Menu isLazy m="auto">
                  <MenuButton
                    fontWeight={600}
                    p={'5px 15px'}
                    borderRadius={'8px'}
                    border={`2px solid gray`}
                  >
                    {userDetails.user.name}
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
                onClick={onLoginClickHandler}
                display="flex"
                flexDirection={'row'}
                alignItems="center"
                fontSize={'md'}
                fontWeight={600}
              >
                <AiOutlineUser size={32} /> Login
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
                    <Login close={onDrawerClose} reset={setDrawerContent} />
                  ) : drawerContent === 2 ? (
                    <Cart />
                  ) : drawerContent === 3 ? (
                    <ChangePassword close={onDrawerClose} />
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
      <Center display={{ base: 'none', md: 'flex' }} mx="auto">
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
                p={{ base: 2, lg: 4 }}
                href={navItem.href ?? '#'}
                fontSize={{ md: 'sm', lg: 'lg' }}
                fontWeight={500}
                color={'gray.600'}
                _hover={{
                  textDecoration: 'none',
                  color: 'red.400',
                }}
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
      display={{ md: 'none' }}
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
        <Text fontWeight={500}>{label}</Text>
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
              <Box key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
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
        label: 'Banners',
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
        href: '/product/dummyCheques',
      },
      {
        label: 'Roll Up Stands',
        subLabel: 'Up-and-coming Designers',
        href: '/product/rollUpStands',
      },
      {
        label: 'Instagram Frames',
        subLabel: 'Up-and-coming Designers',
        href: '/product/instagramFrames',
      },
    ],
  },
  {
    label: 'Trade Shows',
    children: [
      {
        label: 'Booth Display',
        subLabel: 'Find your dream design job',
        href: '/product/boothDisplay',
      },
    ],
  },
  {
    label: 'Cards',
    children: [
      {
        label: 'Business Card',
        subLabel: 'Find your dream design job',
        href: '/product/businessCard',
      },
      {
        label: 'Greeting Card',
        subLabel: 'Find your dream design job',
        href: '/product/greetingCard',
      },
      {
        label: 'ID Card',
        subLabel: 'Find your dream design job',
        href: '/product/idCard',
      },
    ],
  },
  {
    label: 'Branding',
    children: [
      {
        label: 'Water Bottel',
        subLabel: 'Find your dream design job',
        href: '/product/waterBottel',
      },
      {
        label: 'Pens',
        subLabel: 'Find your dream design job',
        href: '/product/pens',
      },
      {
        label: 'Car Branding',
        subLabel: 'Find your dream design job',
        href: '/product/carBranding',
      },
      {
        label: 'Key Rings',
        subLabel: 'Find your dream design job',
        href: '/product/keyRings',
      },
      {
        label: 'Mugs',
        subLabel: 'Find your dream design job',
        href: '/product/mugs',
      },
      {
        label: 'Flash Drives',
        subLabel: 'Find your dream design job',
        href: '/product/flashDrives',
      },
      {
        label: 'T-shirts',
        subLabel: 'Find your dream design job',
        href: '/product/tShirts',
      },
    ],
  },
  {
    label: 'Broachers & Flyers',
    children: [
      {
        label: 'Broachers',
        subLabel: 'Find your dream design job',
        href: '/product/broachers',
      },
      {
        label: 'Fleyers',
        subLabel: 'Find your dream design job',
        href: '/product/flyers',
      },
    ],
  },
  {
    label: 'Stationery',
    children: [
      {
        label: 'Notebook',
        subLabel: 'Find your dream design job',
        href: '/product/notebook',
      },
      {
        label: 'Pens',
        subLabel: 'Find your dream design job',
        href: '/product/pens',
      },
      {
        label: 'Envelope',
        subLabel: 'Find your dream design job',
        href: '/product/envelope',
      },
    ],
  },
  {
    label: 'Label & Stickers',
    children: [
      {
        label: 'Stickers',
        subLabel: 'Find your dream design job',
        href: '/product/stickers',
      },
      {
        label: 'Clothing Labels',
        subLabel: 'Find your dream design job',
        href: '/product/clothingLabels',
      },
      {
        label: 'Mouse Pads',
        subLabel: 'Find your dream design job',
        href: '/product/mousePads',
      },
    ],
  },
];
