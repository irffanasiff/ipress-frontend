export const NAV_ITEMS = [
  {
    label: 'Large Formats',
    href: '/category/Large-Formats',
    children: [
      {
        label: 'Flex Banner/Event Backdrops',
        subLabel: 'Trending Design to inspire you',
        href: '/product/Banners',
        form: true,
        fields: [
          {
            name: 'Product Type',
            type: 'option',
            value: ['Event Backdrops', 'Flex Banners'],
          },
          {
            name: 'Eyelet Number',
            type: 'option',
            value: [2, 4, 6],
          },
          {
            name: 'Print Style',
            type: 'option',
            value: ['Non-reflective', 'Reflective', 'Canvas'],
          },
        ],
      },
      {
        label: 'Billboards',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Billboards',
        form: true,
        fields: [
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Dummy Cheques',
        subLabel: 'Minimum qty starting at 100pcs',
        href: '/product/Dummy-Cheques',
        fields: [
          {
            name: 'Ink Type',
            type: 'option',
            value: ['Eco-solvent Ink', 'UV Ink'],
          },
          {
            name: 'Board Type',
            type: 'option',
            value: ['Paper Board', 'Correx Board'],
          },
          {
            name: 'Length',
            label: 'Enter Length in cm',
          },
          {
            name: 'Width',
            label: 'Enter Width in cm',
          },
          { name: 'Upload Your Design', type: 'file' },
        ],
      },
      {
        label: 'Roll Up Stands',
        subLabel: 'Minimum qty starting at 100pcs',
        href: '/product/Roll-Up-Stands',
        fields: [
          {
            name: 'Base Type',
            type: 'option',
            value: ['Normal Base', 'Royal Base', 'Slim Base', 'Big Base'],
          },
          {
            name: 'Size',
            type: 'option',
            value: ['3ft/7ft', '4ft/7ft'],
          },
          {
            name: 'Ink Type',
            type: 'option',
            value: ['Eco-solvent Ink', 'UV Ink'],
          },
          { name: 'Upload Your Design', type: 'file' },
        ],
      },
      {
        label: 'Instagram Frame Boards',
        subLabel: 'Minimum qty starting at 100pcs',
        href: '/product/Instagram-Frame-Boards',
        fields: [
          {
            name: 'Ink Type',
            type: 'option',
            value: ['Eco-solvent Ink', 'UV Ink'],
          },
          {
            name: 'Length',
            label: 'Enter Length in cm',
          },
          {
            name: 'Width',
            label: 'Enter Width in cm',
          },
          { name: 'Upload Your Design', type: 'file' },
        ],
      },
      {
        label: 'Car/Bike/Tricycle Branding',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Car-Bike-Tricycle-Branding',
        form: true,
        fields: [
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
          {
            name: 'Print Type',
            type: 'option',
            value: ['Reflective SAV', 'Transparent SAV', 'Normal SAV'],
          },
        ],
      },
      {
        label: 'Window Graphics',
        subLabel: 'Up-and-coming Designers',
        href: '/product/Window-Graphics',
        form: true,
        fields: [
          {
            name: 'One way vision ?',
            type: 'option',
            value: ['Yes', 'No'],
          },
        ],
      },
    ],
  },
  {
    label: 'Clothes Branding',
    href: '/category/Clothes-Branding',
    children: [
      {
        label: 'Tshirts',
        subLabel: 'Minimum qty starting at 20pcs',
        href: '/product/Tshirts',
        fields: [
          {
            name: 'Print Area',
            type: 'option',
            value: ['A2', 'A3', 'A4', 'A5', 'A6'],
          },
          {
            name: 'Finishing Style',
            type: 'option',
            value: [
              'Glow in the dark',
              'Vinyl Flex',
              'Glitter Flex',
              'Printable Flex',
              'Hologram',
            ],
          },
          {
            name: 'Size',
            type: 'option',
            value: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
          },
        ],
      },
      {
        label: 'Caps',
        subLabel: 'Find your dream design job',
        href: '/product/Caps',
        fields: [
          {
            name: 'Print Area',
            type: 'option',
            value: ['A2', 'A3', 'A4', 'A5', 'A6'],
          },
          {
            name: 'Finishing Style',
            type: 'option',
            value: [
              'Glow in the dark',
              'Vinyl Flex',
              'Glitter Flex',
              'Printable Flex',
              'Hologram',
            ],
          },
          {
            name: 'Size',
            type: 'option',
            value: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
          },
        ],
      },
      {
        label: 'Towels',
        subLabel: 'Find your dream design job',
        href: '/product/Towels',
        fields: [
          {
            name: 'Print Area',
            type: 'option',
            value: ['A2', 'A3', 'A4', 'A5', 'A6'],
          },
          {
            name: 'Finishing Style',
            type: 'option',
            value: [
              'Glow in the dark',
              'Vinyl Flex',
              'Glitter Flex',
              'Printable Flex',
              'Hologram',
            ],
          },
          {
            name: 'Size',
            type: 'option',
            value: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
          },
          {
            name: 'Color',
            type: 'option',
            value: ['Black', 'White', 'Gray'],
          },
        ],
      },
    ],
  },
  {
    label: 'Cards',
    href: '/category/Cards',
    children: [
      {
        label: 'Business Cards',
        subLabel: 'Minimum qty starting at 100pcs',
        href: '/product/Business-Cards',
        browse: true,
        fields: [
          {
            name: 'Card Type',
            type: 'option',
            value: ['Metal', 'Paper', 'Kraft', 'Plastic Textured Cards'],
          },
          {
            name: 'Size',
            type: 'option',
            value: [
              'Standard (3.5”x 2”)',
              'Square (2”x2”)',
              'Round (3.5”x2”)',
              'Folded (3.5”x 4”)',
            ],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              'Glitter',
              'Spot Laminate',
              'Foil Stamping',
            ],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: ['250 GSM', '500 GSM', '750 GSM', '1000 GSM'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Greeting Cards',
        subLabel: 'Find your dream design job',
        href: '/product/Greeting-Cards',
        browse: true,
        fields: [
          {
            name: 'Paper Type',
            type: 'option',
            value: [
              'Card',
              'Art Paper',
              'Bon Paper',
              'Textured Cards',
              'Kraft cards',
            ],
          },
          {
            name: 'Size',
            type: 'option',
            value: [
              'Standard (3.5”x 2”)',
              'Round (3.5”x2”)',
              'Folded (3.5”x 4”)',
            ],
          },

          {
            name: 'Thickness',
            type: 'option',
            value: [
              '80 GSM',
              '200 GSM',
              '250 GSM',
              '500 GSM',
              '750 GSM',
              '1000 GSM',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              'Glitter',
              'Spot Laminate',
              'Embossed',
              'Foil Stamping',
            ],
          },
        ],
      },
      {
        label: 'ID Card',
        subLabel: 'Find your dream design job',
        href: '/product/Id-Cards',
        browse: true,
        fields: [
          {
            name: 'Size',
            type: 'option',
            value: ['Standard (3.5”x 2”)'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: ['Gloss', 'Hologram'],
          },
        ],
      },
      {
        label: 'Wedding Invitations',
        subLabel: 'Find your dream design job',
        href: '/product/Wedding',
        browse: true,
        fields: [
          {
            name: 'Paper Type',
            type: 'option',
            value: ['Card', 'Art Paper', 'Bon Paper'],
          },
          {
            name: 'Size',
            type: 'option',
            value: [
              'Standard (3.5”x 2”)',
              'Round (3.5”x2”)',
              'Folded (3.5”x 4”)',
            ],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: ['250 GSM', '500 GSM', '750 GSM', '1000 GSM'],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              'Glitter',
              'Spot Laminate',
              'Embossed',
              'Foil Stamping',
            ],
          },
          {
            name: 'Envelopes',
            type: 'option',
            value: ['Plain', 'Conqueror'],
          },
          {
            name: 'If Folded',
            type: 'option',
            value: ['2 folds', '3 folds'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Scratch Card',
        subLabel: 'Find your dream design job',
        href: '/product/Scratch-Card',
        browse: true,
        fields: [
          {
            name: 'Shape Design',
            type: 'option',
            value: ['Rectangle', 'Square', 'Heart', 'Round'],
          },
          {
            name: 'Size',
            type: 'option',
            value: ['1 inch/ 25 mm', '23/44 mm'],
          },
          {
            name: 'Rolls',
            label: 'Number of Rolls',
            type: 'number',
          },
        ],
      },
      {
        label: 'Bookmarks',
        subLabel: 'Find your dream design job',
        href: '/product/Bookmarks',
        browse: true,
        fields: [
          {
            name: 'Paper Type',
            type: 'option',
            value: ['Card', 'Art Paper', 'Kraft Cards', 'Textured Cards'],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: ['80 GSM', '200 GSM', '250 GSM', '500 GSM'],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              'Glitter',
              'Spot Laminate',
              'Embossed',
              'Foil Stamping',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
          {
            name: 'Length',
            label: 'Enter Length in inches',
            type: 'number',
          },
          {
            name: 'Width',
            label: 'Enter Width in inches',
            type: 'number',
          },
        ],
      },
      {
        label: 'Event Badge',
        subLabel: 'Find your dream design job',
        href: '/product/Event-Badge',
        browse: true,
        fields: [
          {
            name: 'Card Type',
            type: 'option',
            value: ['Metal', 'Paper', 'Kraft', 'Plastic Textured Cards'],
          },
          {
            name: 'Size',
            type: 'option',
            value: [
              'Standard (3.5”x 2”)',
              'Square (2”x2”)',
              'Round (3.5”x2”)',
              'Folded (3.5”x 4”)',
            ],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: ['250 GSM', '500 GSM', '750 GSM', '1000 GSM'],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              'Glitter',
              'Spot Laminate',
              'Embossed',
              'Foil Stamping',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Lanyards',
        subLabel: 'Find your dream design job',
        href: '/product/Lanyards',
        fields: [
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'DTF',
              '3D Sublimation',
              'Vinyl Flock',
              'Flex Glitter',
              'Hologram',
              'Glow In The Dark',
              'Printable Flex',
              'Printable Flock',
              'Opaque',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Lapel Pin',
        subLabel: 'Find your dream design job',
        href: '/product/Lapel-Pin',
        browse: true,
        fields: [
          {
            name: 'Paper Type',
            type: 'option',
            value: ['Card Paper', 'Art Paper'],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: ['250 GSM', '500 GSM', '750 GSM', '1000 GSM'],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              '3D Lamination',
              'Canvas',
              'Star',
              'Glitter',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500, 600, 700],
          },
          {
            name: 'Length',
            label: 'Enter Length in cm',
            type: 'number',
          },
          {
            name: 'Width',
            label: 'Enter Width in cm',
            type: 'number',
          },
        ],
      },
    ],
  },
  {
    label: 'Custom/Promotional Gifts',
    href: '/category/Promotional-Gifts',
    children: [
      {
        label: 'Mouse Pads',
        subLabel: 'Find your dream design job',
        href: '/product/Mouse-Pads',
        fields: [
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Key Rings',
        subLabel: 'Minimum qty starting at 10pcs',
        href: '/product/Key-Rings',
        fields: [
          {
            name: 'Keyring Type',
            type: 'option',
            value: ['Metal', 'Plastic'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [10, 20, 30, 40, 50, 60, 70],
          },
          {
            name: 'Keyring Shape',
            label: 'From left to right',
            type: 'option',
            value: [
              'Shape 1',
              'Shape 2',
              'Shape 3',
              'Shape 4',
              'Shape 5',
              'Shape 6',
              'Shape 7',
              'Shape 8',
              'Shape 9',
            ],
          },
        ],
      },
      {
        label: 'Mugs',
        subLabel: 'Find your dream design job',
        href: '/product/Mugs',
        fields: [
          {
            name: 'Mug Style',
            type: 'option',
            value: ['Ceramic Mug', 'Glass Mug', 'Frosted Beer Mug'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [10, 20, 30, 40, 50, 60, 70],
          },
        ],
      },
      {
        label: 'Corporate Gifts/Promotional Items',
        subLabel: 'Find your dream design job',
        href: '/product/Corporate-Gifts',
        fields: [
          { name: 'First Name' },
          { name: 'Last Name' },
          { name: 'Email' },
          {
            name: 'Promotional Item',
            type: 'option',
            value: [
              'Pillows',
              'Kaftans',
              'Flashdrives',
              'Umbrella',
              'Baby Beeps',
              'Jean Patch',
              'Pens',
              'Lighter',
              'Seat Covers',
              'Jersey',
              'Other',
            ],
          },
          {
            name: 'Other',
            label: "If 'Other', please specify:",
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [20, 40, 60, 80, 100],
          },
          { name: 'Phone' },
          {
            name: 'Description',
            type: 'textarea',
            placeholder:
              'Tell us a little bit about the design you had in mind',
          },
        ],
      },
      {
        label: 'Bags',
        subLabel: 'Find your dream design job',
        href: '/product/Bags',
        fields: [
          { name: 'First Name' },
          { name: 'Last Name' },
          { name: 'Email' },
          {
            name: 'Bag Type',
            type: 'option',
            value: ['Woven', 'Paper', 'Plastic'],
          },
          {
            name: 'Sicker Size',
            type: 'option',
            value: ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [20, 40, 60, 80, 100],
          },
          { name: 'Phone' },
          {
            name: 'Description',
            type: 'textarea',
            placeholder:
              'Tell us a little bit about the design you had in mind',
          },
        ],
      },
    ],
  },
  {
    label: 'Booklets',
    href: '/category/Booklets',
    children: [
      {
        label: 'Brochures',
        subLabel: '$50 Minimum qty starting at 100pcs',
        href: '/product/Brochures',
        browse: true,
        fields: [
          {
            name: 'Type',
            type: 'option',
            value: [
              'Half Fold',
              'C Fold',
              'Z Fold',
              'Gate Fold',
              'W Fold',
              'M Fold',
            ],
          },
          {
            name: 'Brochure Size',
            type: 'option',
            value: [
              'A5 (210mm x 148mm)',
              'A4 (210 x 297mm)',
              'A3(210mm x148mm)',
              'A4 X3(420mm x297mm)',
              'A4 X4(840mm x 297mm)',
            ],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: [
              'Art paper(130gsm)',
              'Art paper (135gsm)',
              'Art Card (250)',
            ],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: [
              'Gloss',
              'Matte',
              '3D Laminaton',
              'Canvas',
              'Glitter',
              'Spot Laminate',
              'Embossed',
              'Foil Stamping',
            ],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Flyers/Leaflets',
        subLabel: 'Find your dream design job',
        href: '/product/Flyers',
        browse: true,
        fields: [
          {
            name: 'Flyer Size',
            type: 'option',
            value: [
              'A4 Double Sided',
              'A5 Double Sided',
              'A6 Double Sided',
              'A4 Single Sided',
              'A5 Single Sided',
              'A6 Single Sided',
            ],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: [
              'Art paper(130gsm)',
              'Art paper (135gsm)',
              'Art paper (150gsm)',
              'Art Card (250)',
            ],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: ['Gloss', 'Matte', '3D Laminaton', 'Canvas', 'Glitter'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Posters',
        subLabel: '$50 Minimum qty starting at 100pcs',
        href: '/product/Posters',
        browse: true,
        fields: [
          {
            name: 'Poster Size',
            type: 'option',
            value: ['A2', 'A3'],
          },
          {
            name: 'Thickness',
            type: 'option',
            value: [
              'Art paper(130gsm)',
              'Art paper (135gsm)',
              'Art paper (150gsm)',
            ],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: ['Gloss', 'Matte'],
          },
          {
            name: 'Quantity',
            type: 'option',
            value: [100, 200, 300, 400, 500],
          },
        ],
      },
      {
        label: 'Calender',
        subLabel: 'Find your dream design job',
        href: '/product/Calender',
        browse: true,
        fields: [
          {
            name: 'Calender Size',
            type: 'option',
            value: [
              'A5 Desktop Calendar',
              'A3 Wall Calendar',
              'A2 Wall Calendar',
            ],
          },
          {
            name: 'Sheet Number',
            type: 'option',
            value: ['7 sheets', '13 sheets'],
          },
          {
            name: 'Finishing',
            type: 'option',
            value: ['Gloss', 'Matte'],
          },
          {
            name: 'Orientation',
            type: 'option',
            value: ['Landscape', 'Portrait'],
          },
        ],
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
    href: '/category/Stationery',
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
    href: '/category/Label-Stickers',
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
    href: '/category/Awards',
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
