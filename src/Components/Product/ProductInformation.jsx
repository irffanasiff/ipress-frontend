import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
const getInformation = label => {
  const info = [
    {
      heading: 'Material Thinkness : ',
      info: '420gsm',
      includedIn: [
        'Billboards',
        'Event Backdrops',
        'Flex Banners',
        'Window Graphics',
      ],
    },
    {
      heading: 'Eco-Solvent Ink?',
      info: [
        'Perfect Vibrant Colours',
        'Waterproof',
        'Environmentally Harmless',
        'Scratch-Resistant',
      ],
      includedIn: [
        'Billboards',
        'Event Backdrops',
        'Flex Banners',
        'Window Graphics',
        'Car/Bike/Tricycle Branding',
        'Dummy Cheques',
        'Instagram Frame Boards',
        'Roll Up Stands',
        'Paper Stickers',
        'Transparent Stickers',
      ],
    },
    {
      heading: 'UV Ink?',
      info: [
        'Sharper & crisper image',
        'Longer Lasting for indoors and outdoors',
        'Kinder to the environment -not solvent based so no harmful chemicals evaporate',
        'Faster Printing',
      ],
      includedIn: [
        'Billboards',
        'Event Backdrops',
        'Flex Banners',
        'Window Graphics',
        'Car/Bike/Tricycle Branding',
        'Dummy Cheques',
        'Instagram Frame Boards',
        'Roll Up Stands',
        'Paper Stickers',
        'Transparent Stickers',
      ],
    },
    {
      heading: 'Correx board ?',
      info: 'Correx is the brand name for polypropylene fluted board, which is a type of corrugated plastic. It is very lightweight, durable, and waterproof.',
      includedIn: ['Dummy Cheques', 'Instagram Frame Boards'],
    },
    {
      heading: 'What is GSM?',
      info: 'GSM stands for "grams per meter square". It is the standard weight of various types of paper. ',
      includedIn: [
        'Wedding Invitations',
        'Greeting Cards',
        'Bookmarks',
        'Event/Membership Cards',
        'Lapel Pin',
        'ID Cards',
        'Brochures',
        'Posters',
        'Magazines',
        'Company Profile',
        'Books',
        'Jotters',
        'Flyers/Leaflets',
        'Certificates',
      ],
    },
    {
      heading: 'Difference between art paper, art card & bond paper',
      collapse: true,
      info2:
        'Art paper and Art card are commonly used to print flyers, brochures, posters and similar items because the surface of the paper is smooth and even, therefore print definition can be seen as sharper and has mo',
      info: "Art paper and Art card are commonly used to print flyers, brochures, posters and similar items because the surface of the paper is smooth and even, therefore print definition can be seen as sharper and has more vibrant colour to it compared to Uncoated Paper. However, because of the smoothness of its surface, it doesn't absorb normal ink properly and may cause smudges if one were to write on it using a pen or marker.  Art paper is usually lighter in weight than art card. Bond paper is usually heaver in weight and they are most commonly used to print out business stationery such as business card, letterhead, receipt books etc. The surface of the material is rough and uneven, therefore it absorbs ink nicely.",
      includedIn: [
        'Wedding Invitations',
        'Greeting Cards',
        'Bookmarks',
        'Event/Membership Cards',
        'Lapel Pin',
        'ID Cards',
        'Brochures',
        'Posters',
        'Magazines',
        'Company Profile',
        'Books',
        'Jotters',
        'Flyers/Leaflets',
        'Certificates',
      ],
    },
    {
      heading: 'What is Textured Cardstock?',
      info: 'Textured cardstock has a very nice feel and is often used in making greeting cards.',
      includedIn: [
        'Wedding Invitations',
        'Greeting Cards',
        'Bookmarks',
        'Event/Membership Cards',
        'Lapel Pin',
        'ID Cards',
        'Brochures',
        'Posters',
        'Magazines',
        'Company Profile',
        'Books',
        'Jotters',
        'Flyers/Leaflets',
        'Certificates',
      ],
    },
    {
      heading: '',
      info: 'Your shape design will determine the style of the scratch area. The image above indicates a rectangular shape design.',
      includedIn: ['Scratch Cards'],
    },
    {
      heading: '',
      info: `Our custom ${label.toLowerCase()} are made with DTP stickers.`,
      includedIn: ['Mouse Pads', 'Mugs', 'Keyrings'],
    },
    {
      heading: '',
      info: 'Mouse Pad Size: Approx.  23 * 20cm/ 9.06*7.8"',
      includedIn: ['Mouse Pads'],
    },
    {
      heading: '',
      info: 'Our letterheads are all A4 size.',
      includedIn: ['Letterheads'],
    },
    {
      heading: 'What is difference between Plain and Conqueror envelopes?',
      info: '',
      includedIn: ['Letterheads'],
    },
  ];
  const filteredInfo = info.filter(item => item.includedIn.includes(label));
  return filteredInfo;
};

export const ProductInformation = ({ label }) => {
  const [lessText, setLessText] = useState(true);
  const info = getInformation(label);
  return (
    <VStack
      alignItems={'flex-start'}
      m={[0, 5, '20px 100px']}
      fontSize={{ base: 'sm', md: 'md' }}
      spacing={'30px'}
    >
      {info.map((field, index) => (
        <Box key={index}>
          <Heading
            fontSize={['1rem', '1.2rem', '1.7rem']}
            fontWeight={500}
            my={[3, 3, 5]}
          >
            {field.heading}
          </Heading>
          {typeof field.info === 'string' ? (
            <>
              <Text>
                {field.collapse && lessText ? field.info2 : field.info}{' '}
                <Text
                  as="span"
                  display={field.collapse ? 'inline' : 'none'}
                  onClick={() => setLessText(!lessText)}
                  fontWeight={500}
                  mx={2}
                  textDecoration={'underline'}
                  _hover={{ cursor: 'pointer' }}
                >
                  Read {lessText ? 'more' : 'less'}
                </Text>
              </Text>
            </>
          ) : (
            <UnorderedList>
              {field.info.map((list, index) => (
                <ListItem key={index}>{list}</ListItem>
              ))}
            </UnorderedList>
          )}
        </Box>
      ))}
    </VStack>
  );
};
