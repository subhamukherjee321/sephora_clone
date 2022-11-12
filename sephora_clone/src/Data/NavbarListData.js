export const navbarList = [
    {
        name: "SALE", id: 1, submenu: false, sublinks: []
    },
    {
      name: "MAKEUP", id: 2, submenu: true, sublinks: [
           {
              head: "FACE",
              id: 2,
              sublink: [
                {name: "Foundation", link: "/face-foundation"},
                {name: "BB & CC Cream", link: "/bb-and-cc-cream"},
                {name: "Concealer", link: "/face-concealer"},
                {name: "Face Primer", link: "/face-primer"},
                {name: "Highlighter", link: "/face-highlighter"},
                {name: "Face Brushes", link: "/face-brushes"},
                {name: "Makeup Palette", link: "/face-makeup-palette"},
              ]
           },
           {
            head: "EYE",
              sublink: [
                {name: "Eye Palettes", link: "/eye-palettes"},
                {name: "Mascara", link: "/eye-mascara"},
                {name: "Eyeliner", link: "/eye-eyeliner"},
                {name: "Eyeshadow", link: "/eye-eyeshadow"},
                {name: "Eye Primer", link: "/eye-eyeprimer"},
                {name: "Eye Brushes", link: "/eye-brushes"},
                {name: "Contact Lenses", link: "/eye-contact-lenses"},
              ]
           },
           {
            head: "LIP",
              sublink: [
                {name: "Lipstick", link: "/lipstick"},
                {name: "Lip Stain", link: "/lip-stain"},
                {name: "Lip Gloss", link: "/lip-gloss"},
                {name: "Lip Plumper", link: "/lip-plumper"},
                {name: "Lip Balm & Treatment", link: "/lip-blam"},
                {name: "Lip Brushes", link: "/lip-brushes"},
                {name: "Contact Lenses", link: "/lip-contact-lenses"},
              ]
           },
           {
            head: "CHEEK",
              sublink: [
                {name: "Blush", link: "/cheek-blush"},
                {name: "Bronzer", link: "/cheek-bronzer"},
                {name: "Face Oil", link: "/cheek-face-Oil"},
                {name: "cheekshadow", link: "/cheek-cheekshadow"},
                {name: "Highlighter", link: "/cheek-highlighter"},
              ]
           },
           {
            head: "Nail Makeup",
              sublink: [
                {name: "Nail Polish", link: "/nail-polish"},
                {name: "Nail Care", link: "/nail-care"},
              ]
           },
           {
            head: "MAKEUP ACCESSORIES",
              sublink: [
                {name: "Tweezers & Eyebrow Tools", link: "/tweezers-eyebrow-tools"},
                {name: "Makeup Removers", link: "/makeup-removers"},
                {name: "Makeup Bags & Travel Cases", link: "/makeup-bags-travel-cases"},
                {name: "Sponges & Applicators", link: "/sponges-applicators"}
              ]
           },
           {
            head: "VEGAN",
              sublink: [
                {name: "Eye", link: "/eye"},
                {name: "Face", link: "/Face"},
                {name: "Makeup Bags & Travel Cases", link: "/makeup-bags-travel-cases"},
                {name: "Sponges & Applicators", link: "/sponges-applicators"}
              ]
           }
        ]
    },
    {
      name: "SKINCARE", id: 3, submenu: true, sublinks: [
        {
            head: "MOISTURIZERS",
            sublink: [
              {name: "Moisturizers", link: "/moisturizers"},
              {name: "Night Creams", link: "/night-cream"},
              {name: "Mists & Essences", link: "/mists-essencesr"},
              {name: "BB & CC Creams", link: "/bb-cc-creams"},
            ]
         },
         {
          head: "CLEANSERS",
            sublink: [
              {name: "Face Wash & Cleansers", link: "/face-wash-cleansers"},
              {name: "Makeup Removers", link: "/makeup-removers"},
              {name: "Face Wipes", link: "/face-wipes"},
              {name: "Toners", link: "/toners"},
              {name: "Hand Sanitizers", link: "/hand-sanitizers"},
            ]
         },
         {
          head: "TREATMENTS & HIGH TECH TOOLS",
            sublink: [
              {name: "Face Serums", link: "/face-serums"},
              {name: "Cleansing Tools", link: "/cleansing-tools"},
              {name: "Lip Gloss", link: "/lip-gloss"},
              {name: "Eye Creams & Treatments", link: "/eye-creams-treatments"},
            ]
         },
         {
          head: "MASKS",
            sublink: [
              {name: "Face Masks", link: "/face-masks"},
              {name: "Sheet Masks", link: "/sheet-masks"},
              {name: "Eye Masks", link: "/eye-masks"},
              {name: "Nose Masks & Strips", link: "/nose-masks-strips"},
              {name: "Lip Masks", link: "/lip-masks"},
              {name: "Hair Masks", link: "/hair-masks"},
              {name: "Hand Masks", link: "/hand-masks"},
              {name: "Foot Masks", link: "/foot-masks"}
            ]
         },
         {
          head: "BATH & SHOWER",
            sublink: [
              {name: "Body Wash and Shower Gel", link: "/body-wash-shower-gel"},
              {name: "Scrub and Exfoliants", link: "/scrub-exfoliants"},
              {name: "Exfoliants", link: "/exfoliants"}
            ]
         },
         {
          head: "BODY MOISTURIZERS",
            sublink: [
              {name: "Body Lotions & Body Oils", link: "/body-lotions-body-oils"},
              {name: "Hand Cream & Foot Cream", link: "/hand-cream-foot-cream"}
            ]
         },
         {
          head: "VEGAN",
            sublink: [
              {name: "Face Care", link: "/face-care"},
            ]
         }
      ]
    },
    {
      name: "FRAGRANCE", id: 4, submenu: true, sublinks: [
        {
            head: "WOMEN",
            sublink: [
              {name: "Perfume", link: "/perfume"},
              {name: "Mists and Deodorants", link: "/mists-deodorants"}
            ]
         },
         {
          head: "MEN",
            sublink: [
              {name: "Perfume", link: "/perfume"},
              {name: "Body Sprays & Deodorant", link: "/body-sprays-deodorant"}
            ]
         },
      ]
    },
    {
      name: "HAIR CARE", id: 6, submenu: true, sublinks: [
        {
            head: "SHAMPOO & CONDITIONER",
            sublink: [
              {name: "Shampoo", link: "/shampoo"},
              {name: "Conditioner", link: "/conditioner"}
            ]
         },
         {
          head: "HAIR STYLING & TREATMENTS",
            sublink: [
              {name: "Hair Spray & Styling Products", link: "/hair-spray-styling-products"},
              {name: "Hair Oil", link: "/hair-oil"},
              {name: "Hair Masks", link: "/hair-masks"},
              {name: "Hair Clips", link: "/hair-clips"}
            ]
         },
      ]
    },
    {
      name: "TOOLS & BRUSHES", id: 7, submenu: true, sublinks: [
        {
            head: "BRUSHES",
            sublink: [
              {name: "Face Brushes", link: "/face-brushes"},
              {name: "Eye Brushes", link: "/eye-brushes"},
              {name: "Lip Brushes", link: "/lip-brushes"}
            ]
         },
         {
          head: "TOOLS",
            sublink: [
              {name: "Sponges & Applicators", link: "/sponges-aplicators"},
              {name: "Face Tools", link: "/face-tools"},
              {name: "Hair Clips", link: "/hair-clips"},
              {name: "Sharpeners", link: "/sharpeners"},
              {name: "Tweezers & Eyebrow Tools", link: "/tweezers-eyebrow-tools"},
              {name: "Eyelash Curlers", link: "/eyelash-curlers"},
              {name: "Accessories", link: "/accessories"},
              {name: "Brush Cleaners", link: "/brush-cleaners"}
            ]
         }
      ]
    },
    {
      name: "BRANDS", id: 7, submenu: true, sublinks: [
        {
            head: "TOP MAKEUP BRANDS",
            sublink: [
              {name: "Sephora Collection", link: "/face-brushes"},
              {name: "Lancôme", link: "/eye-brushes"},
              {name: "Huda Beauty", link: "/lip-brushes"},
              {name: "Benefit Cosmetics", link: "/face-brushes"},
              {name: "Anastasia Beverly Hills", link: "/eye-brushes"},
              {name: "Bobbi Brown", link: "/lip-brushes"},
              {name: "Smashbox", link: "/face-brushes"},
              {name: "Estee Lauder", link: "/eye-brushes"},
              {name: "Nudestix", link: "/lip-brushes"},
              {name: "MAC", link: ""},
              {name: "Make Up For Ever", link: ""},
              {name: "Guerlain", link: ""}
            ]
         },
         {
          head: "TOP FRAGRANCE BRANDS",
            sublink: [
              {name: "Tom Ford", link: ""},
              {name: "Hugo Boss", link: ""},
              {name: "Issey Miyake", link: ""},
              {name: "Ermenegildo Zegna", link: ""},
              {name: "Dolce & Gabbana", link: ""},
              {name: "Paco Rabanne", link: ""},
              {name: "Bvlgari", link: ""},
              {name: "Kayali", link: ""},
              {name: "Roberto Cavalli", link: ""},
              {name: "Versace", link: ""},
              {name: "Davidoff", link: ""},
              {name: "Calvin Klein", link: ""},
              {name: "Chopard", link: ""},
              {name: "Yves Saint Laurent", link: ""},
              {name: "Burberry", link: ""}
            ]
         },
         {
          head: "NEW IN",
            sublink: [
              {name: "ONE/SIZE by Patrick Starrr", link: ""},
              {name: "Dior", link: ""},
              {name: "Too Faced", link: ""},
              {name: "Hanz de Fuko", link: ""},
              {name: "Ikoo", link: ""},
              {name: "Ouai", link: ""},
              {name: "Abhati Suisse", link: ""},
              {name: "Kora Organics", link: ""},
              {name: "Caudalie", link: ""},
              {name: "Mario Badescu", link: ""},
              {name: "Moroccanoil", link: ""}
            ]
         },
         {
          head: "BRANDS A - Z",
            sublink: []
         }
      ]
    }
];