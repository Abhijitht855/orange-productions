// // components/DropdownMenuData.tsx
// export interface SubItem {
//   name: string;
//   image?: string; // optional image for hover preview
// }

// export interface Product {
//   name: string;
//   image: string;
// }

// export interface SubCategory {
//   items: SubItem[];
// }

// export interface MenuContent {
//   categories: {
//     [categoryName: string]: SubCategory;
//   };
//   popularProducts: Product[]; // Now at the top level of the menu
// }

// export const dropdownMenus: { [menuName: string]: MenuContent } = {
//   "PRINT AND MARKETING": {
//     categories: {
//       "Stationery Items": {
//         items: [
//           { name: "Notebook", image: "/images/Folders.webp" },
//           { name: "Binding", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Business Cards", image: "/images/cd_printing_dubai.webp" },
//           { name: "Envelopes", image: "/images/Home Wallpaper.webp" },
//           { name: "Folder", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Notepad", image: "/images/Folders.webp" },
//           { name: "Certificate", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Handtags", image: "/images/cd_printing_dubai.webp" }
//         ],
//       },
//       "Brochures And Flyers": {
//         items: [
//           { name: "Brochure Printing", image: "/images/Home Wallpaper.webp" },
//           { name: "Booklets", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Catalogues", image: "/images/Folders.webp" },
//           { name: "Flyers", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Seals": {
//         items: [
//           { name: "Self Ink Stamps", image: "/images/cd_printing_dubai.webp" },
//           { name: "Wax Seal", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Voucher Books": {
//         items: [
//           { name: "NCR Books", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Computerized Invoice", image: "/images/Folders.webp" }
//         ],
//       },
//       "Stickers": {
//         items: [
//           { name: "Die Cut Stickers", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Print & Cut Stickers", image: "/images/cd_printing_dubai.webp" },
//           { name: "Transparent Stickers", image: "/images/Home Wallpaper.webp" },
//           { name: "Epoxy Stickers", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Promotion Items": {
//         items: [
//           { name: "Scratch And Win Coupons", image: "/images/Folders.webp" },
//           { name: "Tent Card", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Table Mat", image: "/images/cd_printing_dubai.webp" },
//           { name: "Danglers", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Gift Box": {
//         items: [
//           { name: "Corrugated Boxes", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Wooden Boxes", image: "/images/Folders.webp" },
//           { name: "Pouches", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Tissue Boxes (Leather And Acrylic)", image: "/images/cd_printing_dubai.webp" },
//           { name: "Luxury Leather Boxes", image: "/images/Home Wallpaper.webp" },
//           { name: "Corporate Gift Box", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Custom Gift Boxes", image: "/images/Folders.webp" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "Premium Business Cards", image: "/images/cd_printing_dubai.webp" },
//       { name: "Tri-Fold Deluxe Brochure", image: "/images/custom_design_pu_notebook_dubai.webp" },
//       { name: "Custom Corrugated Gift Box", image: "/images/Folders.webp" },
//     ],
//   },

//   "OFFICE BRANDING": {
//     categories: {
//       "Frosted Sticker": {
//         items: [
//           { name: "Reverse Cut Frosted Stickers", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Standard Cut Frosted Sticker", image: "/images/cd_printing_dubai.webp" },
//           { name: "Printable Frosted Sticker", image: "/images/Home Wallpaper.webp" },
//           { name: "Plain Frosted Sticker", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Window Branding": {
//         items: [
//           { name: "High Quality Vinyl Sticker", image: "/images/Folders.webp" },
//           { name: "High Quality Graphics", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "One Way Vision Sticker", image: "/images/cd_printing_dubai.webp" },
//           { name: "Window Films", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Wall Branding": {
//         items: [
//           { name: "Vinyl Lettering", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Wall Stickers", image: "/images/Folders.webp" },
//           { name: "Wall Decal", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Wall Frames": {
//         items: [
//           { name: "Canvas Frames", image: "/images/cd_printing_dubai.webp" },
//           { name: "Wooden Frames", image: "/images/Home Wallpaper.webp" },
//           { name: "Acrylic Frame", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Metal Frame", image: "/images/Folders.webp" }
//         ],
//       },
//       "Display Stand": {
//         items: [
//           { name: "3D Display Stand", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Counter Top Stand", image: "/images/cd_printing_dubai.webp" }
//         ],
//       },
//       "Vehicle Branding": {
//         items: [
//           { name: "Car Branding", image: "/images/Home Wallpaper.webp" },
//           { name: "Truck Branding", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Magnet Sheet": {
//         items: [
//           { name: "Car Magnet", image: "/images/Folders.webp" },
//           { name: "Fridge Magnet", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Wall Magnet", image: "/images/cd_printing_dubai.webp" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "Premium One Way Vision", image: "/images/Home Wallpaper.webp" },
//       { name: "Reverse Cut Frosted Vinyl", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//       { name: "Gallery Wrap Canvas Print", image: "/images/Folders.webp" },
//     ],
//   },

//   "SIGNAGES": {
//     categories: {
//       "Sign Boards": {
//         items: [
//           { name: "3D Signage", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Backlit Signage", image: "/images/cd_printing_dubai.webp" },
//           { name: "Flex Signage", image: "/images/Home Wallpaper.webp" },
//           { name: "Frontlit Signage", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Push Through Letter Signage", image: "/images/Folders.webp" },
//           { name: "Neon Signage", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Name Plates": {
//         items: [
//           { name: "Metal Name Plates", image: "/images/cd_printing_dubai.webp" },
//           { name: "Wooden Name Plates", image: "/images/Home Wallpaper.webp" },
//           { name: "Table Top Signage", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Acrylic Signage", image: "/images/Folders.webp" }
//         ],
//       },
//       "Light Box": {
//         items: [
//           { name: "Fabric Light Box", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Poster Light Box", image: "/images/cd_printing_dubai.webp" },
//           { name: "Acrylic Signage Board", image: "/images/Home Wallpaper.webp" },
//           { name: "Flex Face Sign (Light Box)", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Self Standing Letters": {
//         items: [
//           { name: "Metal Letters", image: "/images/Folders.webp" },
//           { name: "Wooden Letters", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Acrylic Letters", image: "/images/cd_printing_dubai.webp" },
//           { name: "Forex Letters", image: "/images/Home Wallpaper.webp" },
//           { name: "Foamboard Letters", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Direction Signage": {
//         items: [
//           { name: "Wall Mounted Signage", image: "/images/Folders.webp" },
//           { name: "Hanging Signage", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Direction Signage", image: "/images/cd_printing_dubai.webp" },
//           { name: "Self Standing Signage", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Labels": {
//         items: [
//           { name: "PVC/Acrylic Label", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Metal Label", image: "/images/Folders.webp" },
//           { name: "Wooden Label", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Acrylic Label", image: "/images/cd_printing_dubai.webp" }
//         ],
//       },
//       "Safety Signage": {
//         items: [
//           { name: "Floor Sign/Signage", image: "/images/Home Wallpaper.webp" },
//           { name: "Self-Standing Sign", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "LED Backlit 3D Acrylic Sign", image: "/images/Folders.webp" },
//       { name: "Custom LED Neon Sign", image: "/images/custom_design_pu_notebook_dubai.webp" },
//       { name: "Brushed Steel Engraved Name Plate", image: "/images/cd_printing_dubai.webp" },
//     ],
//   },

//   "FLAGS": {
//     categories: {
//       "Branding Flags": {
//         items: [
//           { name: "Teardrop Flag", image: "/images/Home Wallpaper.webp" },
//           { name: "Curved Top Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "L-Shape Flag", image: "/images/Folders.webp" },
//           { name: "Advertising Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Telescopic Flag", image: "/images/cd_printing_dubai.webp" }
//         ],
//       },
//       "Flag Base": {
//         items: [
//           { name: "Water Base", image: "/images/Home Wallpaper.webp" },
//           { name: "Cross Base", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Concrete Base", image: "/images/Folders.webp" },
//           { name: "Plastic Coated Concrete Base", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Office Flags": {
//         items: [
//           { name: "Table Flag", image: "/images/cd_printing_dubai.webp" },
//           { name: "Table Flags - Royal", image: "/images/Home Wallpaper.webp" },
//           { name: "Conference Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Conference Hanging Flag", image: "/images/Folders.webp" }
//         ],
//       },
//       "Outdoor Flags": {
//         items: [
//           { name: "Stadium Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Wall Mounted Flags", image: "/images/cd_printing_dubai.webp" },
//           { name: "Hosting Flag", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Event Gear": {
//         items: [
//           { name: "Pole Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Hand Flag", image: "/images/Folders.webp" },
//           { name: "Back Pack Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Finish Line Flag", image: "/images/cd_printing_dubai.webp" },
//           { name: "Fan Scarf Flag", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Decorative Flags": {
//         items: [
//           { name: "Desert Car Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Toothpick Flags", image: "/images/Folders.webp" },
//           { name: "Bunting Flags", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Dashboard Flag", image: "/images/cd_printing_dubai.webp" },
//           { name: "Pennant Flags", image: "/images/Home Wallpaper.webp" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "Medium Teardrop Flag Kit", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//       { name: "Heavy Fillable Water Base", image: "/images/Folders.webp" },
//       { name: "Backpack Banner System", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     ],
//   },

//   "BACKDROPS & EXHIBITION": {
//     categories: {
//       "Standees": {
//         items: [
//           { name: "Rollup Stand", image: "/images/cd_printing_dubai.webp" },
//           { name: "X Banner Stand", image: "/images/Home Wallpaper.webp" },
//           { name: "Broad Base Roll Up Stand", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Classic Backlit Standee", image: "/images/Folders.webp" },
//           { name: "Barricade", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Cut Out Standee", image: "/images/cd_printing_dubai.webp" },
//           { name: "Toblerone Frame", image: "/images/Home Wallpaper.webp" },
//           { name: "Popout Banner/Spring A Board", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Backdrops": {
//         items: [
//           { name: "Adjustable Backdrop Stands", image: "/images/Folders.webp" },
//           { name: "Tension Fabric Stand Straight", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Tension Fabric Stand Curved", image: "/images/cd_printing_dubai.webp" },
//           { name: "Straight Pop Up", image: "/images/Home Wallpaper.webp" },
//           { name: "Fabric Straight", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Wooden Backdrop", image: "/images/Folders.webp" },
//           { name: "Pop Up", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Photo Booth", image: "/images/cd_printing_dubai.webp" },
//           { name: "LED Screen", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Exhibitions & Event": {
//         items: [
//           { name: "Outdoor Umbrella", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Tent/Gazebo", image: "/images/Folders.webp" },
//           { name: "Promotional Table", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Table Cover/Table Cloth", image: "/images/cd_printing_dubai.webp" },
//           { name: "Exhibition Counter", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Event Booth": {
//         items: [
//           { name: "Panel/Seamless Branding", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Modular Backlit Booth", image: "/images/Folders.webp" },
//           { name: "Island Backlit Shell Scheme", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Event Props": {
//         items: [
//           { name: "Social Media Frames", image: "/images/cd_printing_dubai.webp" },
//           { name: "Hashtags", image: "/images/Home Wallpaper.webp" },
//           { name: "Giant Cheques", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Party Props", image: "/images/Folders.webp" },
//           { name: "Easel Stand", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Metal Brochure Stand", image: "/images/cd_printing_dubai.webp" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "8ft x 8ft Tension Fabric Backdrop", image: "/images/Home Wallpaper.webp" },
//       { name: "Premium Broad Base Roll-Up Banner", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//       { name: "Custom Branded Gazebo Tent 3x3m", image: "/images/Folders.webp" },
//     ],
//   },

//   "CORPORATE GIFTS": {
//     categories: {
//       "Technology": {
//         items: [
//           { name: "Headphones & Speaker", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Powerbanks", image: "/images/cd_printing_dubai.webp" },
//           { name: "Wireless Charger", image: "/images/Home Wallpaper.webp" },
//           { name: "USB Flash Drive", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Mousepads", image: "/images/Folders.webp" }
//         ],
//       },
//       "Drinkware": {
//         items: [
//           { name: "Tumblers", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Ceramic Mug", image: "/images/cd_printing_dubai.webp" },
//           { name: "Water Bottle & Infuser", image: "/images/Home Wallpaper.webp" },
//           { name: "Travel Mug", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
//         ],
//       },
//       "Shopping & Promotion": {
//         items: [
//           { name: "Jute Bags", image: "/images/Folders.webp" },
//           { name: "Cotton Bags", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Non Woven Bags", image: "/images/cd_printing_dubai.webp" },
//           { name: "Customised Shopping Bags", image: "/images/Home Wallpaper.webp" },
//           { name: "String Bag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Backpacks", image: "/images/Folders.webp" },
//           { name: "Laptop Bags", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Stationery Items": {
//         items: [
//           { name: "Keychain", image: "/images/cd_printing_dubai.webp" },
//           { name: "Clock", image: "/images/Home Wallpaper.webp" },
//           { name: "Card Holder", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Mementos & Awards", image: "/images/Folders.webp" },
//           { name: "Metal Pen", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Plastic Pen", image: "/images/cd_printing_dubai.webp" },
//           { name: "Name Badge", image: "/images/Home Wallpaper.webp" },
//           { name: "Notebook", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Ecofriendly Items", image: "/images/Folders.webp" },
//           { name: "Organizer", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Apparel & Show Items": {
//         items: [
//           { name: "Jersey", image: "/images/cd_printing_dubai.webp" },
//           { name: "Caps", image: "/images/Home Wallpaper.webp" },
//           { name: "Safety Vest", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Wristbands", image: "/images/Folders.webp" },
//           { name: "Lanyards", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "ID Card And Badge", image: "/images/cd_printing_dubai.webp" },
//           { name: "Fridge Magnet", image: "/images/Home Wallpaper.webp" },
//           { name: "Hoodie", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "Anti Stress Ball", image: "/images/Folders.webp" },
//           { name: "Ribbons", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       }
//     },
//     popularProducts: [
//       { name: "Custom Logo Power Bank (10000mAh)", image: "/images/cd_printing_dubai.webp" },
//       { name: "Engraved Insulated Tumbler", image: "/images/Home Wallpaper.webp" },
//       { name: "Laser Engraved Metal Pen", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//     ],
//   },

//   "VIDEO BROCHURE": {
//     categories: {
//       "Video Brochure Card": {
//         items: [
//           { name: "5 Inch Video Brochure Card", image: "/images/Folders.webp" },
//           { name: "7 Inch Video Brochure Card", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "10 Inch Video Brochure Card", image: "/images/cd_printing_dubai.webp" },
//           { name: "Customised Size", image: "/images/Home Wallpaper.webp" }
//         ],
//       },
//       "Video Brochure Box": {
//         items: [
//           { name: "5 Inch Video Brochure Box", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "7 Inch Video Brochure Box", image: "/images/Folders.webp" },
//           { name: "10 Inch Video Brochure Box", image: "/images/custom_design_pu_notebook_dubai.webp" },
//           { name: "Customised Size", image: "/images/cd_printing_dubai.webp" }
//         ],
//       },
//       "Video Brochure Screen": {
//         items: [
//           { name: "5 Inch Screen", image: "/images/Home Wallpaper.webp" },
//           { name: "7 Inch Screen", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//           { name: "10 Inch Screen", image: "/images/Folders.webp" },
//           { name: "Customised", image: "/images/custom_design_pu_notebook_dubai.webp" }
//         ],
//       },
//       "Video Brochure Folder": {
//         items: [
//           { name: "A4 Video Folder", image: "/images/cd_printing_dubai.webp" },
//           { name: "Custom Video Folder", image: "/images/Home Wallpaper.webp" }
//         ]
//       }
//     },
//     popularProducts: [
//       { name: "7-Inch HD Video Card", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
//       { name: "Luxury Video Gift Box (7 Inch)", image: "/images/Folders.webp" },
//       { name: "A4 Video Folder with Pockets", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     ],
//   }
// };


// components/DropdownMenuData.tsx
export interface Variant {
  name: string;
  image?: string;
  description?: string;
  price?: number;
}

export interface SubItem {
  name: string;
  image?: string; // Optional image for hover preview
  variants?: Variant[]; // Added variants for sub-items
}

export interface Product {
  name: string;
  image: string;
}

export interface SubCategory {
  items: SubItem[];
}

export interface MenuContent {
  categories: {
    [categoryName: string]: SubCategory;
  };
  popularProducts: Product[]; // Now at the top level of the menu
}

export const dropdownMenus: { [menuName: string]: MenuContent } = {
  "PRINT AND MARKETING": {
    categories: {
      "Stationery Items": {
        items: [
          {
            name: "Notebook",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "Plain Notebook",
                image: "/images/glue_binding_notepads_dubai.webp",
                description: "Unruled pages for freeform writing or sketching.",
                price: 5.99,
              },
              {
                name: "Lined Notebook",
                image: "/images/lined-notebook.jpg",
                description: "Ruled pages for organized notes.",
                price: 6.49,
              },
              {
                name: "Spiral Notebook",
                image: "/images/spiral-notebook.jpg",
                description: "Spiral-bound for easy page flipping.",
                price: 7.99,
              },
            ],
          },
          {
            name: "Binding",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "Perfect Binding",
                image: "/images/perfect-binding.jpg",
                description: "Professional glue-bound finish.",
                price: 10.00,
              },
              {
                name: "Saddle Stitch Binding",
                image: "/images/saddle-stitch.jpg",
                description: "Stapled binding for booklets.",
                price: 8.00,
              },
            ],
          },
          {
            name: "Business Cards",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Standard Business Cards",
                image: "/images/standard-business-card.jpg",
                description: "Classic matte or glossy finish.",
                price: 15.00,
              },
              {
                name: "Premium Business Cards",
                image: "/images/premium-business-card.jpg",
                description: "Thick cardstock with spot UV coating.",
                price: 25.00,
              },
            ],
          },
          {
            name: "Envelopes",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Standard Envelopes",
                image: "/images/standard-envelope.jpg",
                description: "White envelopes for business use.",
                price: 12.00,
              },
              {
                name: "Window Envelopes",
                image: "/images/window-envelope.jpg",
                description: "Envelopes with a transparent window.",
                price: 15.00,
              },
            ],
          },
          {
            name: "Folder",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "Pocket Folder",
                image: "/images/pocket-folder.jpg",
                description: "Two-pocket folder for documents.",
                price: 20.00,
              },
              {
                name: "Presentation Folder",
                image: "/images/presentation-folder.jpg",
                description: "Glossy finish with business card slot.",
                price: 25.00,
              },
            ],
          },
          {
            name: "Notepad",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "A4 Notepad",
                image: "/images/a4-notepad.jpg",
                description: "50-sheet A4 notepad with logo.",
                price: 4.99,
              },
              {
                name: "A5 Notepad",
                image: "/images/a5-notepad.jpg",
                description: "Compact A5 notepad for quick notes.",
                price: 3.99,
              },
            ],
          },
          {
            name: "Certificate",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "Standard Certificate",
                image: "/images/standard-certificate.jpg",
                description: "Printed on premium paper.",
                price: 2.50,
              },
              {
                name: "Foil-Stamped Certificate",
                image: "/images/foil-certificate.jpg",
                description: "Gold or silver foil accents.",
                price: 5.00,
              },
            ],
          },
          {
            name: "Handtags",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Paper Hangtags",
                image: "/images/paper-hangtag.jpg",
                description: "Standard paper tags for products.",
                price: 0.50,
              },
              {
                name: "Plastic Hangtags",
                image: "/images/plastic-hangtag.jpg",
                description: "Durable plastic tags.",
                price: 1.00,
              },
            ],
          },
        ],
      },
      "Brochures And Flyers": {
        items: [
          {
            name: "Brochure Printing",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Tri-Fold Brochure",
                image: "/images/tri-fold-brochure.jpg",
                description: "Compact tri-fold design.",
                price: 30.00,
              },
              {
                name: "Bi-Fold Brochure",
                image: "/images/bi-fold-brochure.jpg",
                description: "Two-panel brochure.",
                price: 25.00,
              },
            ],
          },
          {
            name: "Booklets",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "8-Page Booklet",
                image: "/images/8-page-booklet.jpg",
                description: "Stapled booklet for catalogs.",
                price: 40.00,
              },
              {
                name: "16-Page Booklet",
                image: "/images/16-page-booklet.jpg",
                description: "Extended booklet for detailed content.",
                price: 60.00,
              },
            ],
          },
          {
            name: "Catalogues",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "Standard Catalogue",
                image: "/images/standard-catalogue.jpg",
                description: "Glossy product catalog.",
                price: 50.00,
              },
              {
                name: "Premium Catalogue",
                image: "/images/premium-catalogue.jpg",
                description: "High-quality paper and binding.",
                price: 75.00,
              },
            ],
          },
          {
            name: "Flyers",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "A5 Flyer",
                image: "/images/a5-flyer.jpg",
                description: "Single-sided A5 flyer.",
                price: 20.00,
              },
              {
                name: "A4 Flyer",
                image: "/images/a4-flyer.jpg",
                description: "Double-sided A4 flyer.",
                price: 30.00,
              },
            ],
          },
        ],
      },
      "Seals": {
        items: [
          {
            name: "Self Ink Stamps",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Round Self Ink Stamp",
                image: "/images/round-stamp.jpg",
                description: "Circular stamp for branding.",
                price: 15.00,
              },
              {
                name: "Rectangular Self Ink Stamp",
                image: "/images/rectangular-stamp.jpg",
                description: "Standard rectangular stamp.",
                price: 12.00,
              },
            ],
          },
          {
            name: "Wax Seal",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Custom Wax Seal",
                image: "/images/custom-wax-seal.jpg",
                description: "Personalized wax seal design.",
                price: 25.00,
              },
              {
                name: "Standard Wax Seal",
                image: "/images/standard-wax-seal.jpg",
                description: "Pre-designed wax seal.",
                price: 20.00,
              },
            ],
          },
        ],
      },
      "Voucher Books": {
        items: [
          {
            name: "NCR Books",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "50-Set NCR Book",
                image: "/images/50-set-ncr.jpg",
                description: "Carbonless copy paper, 50 sets.",
                price: 30.00,
              },
              {
                name: "100-Set NCR Book",
                image: "/images/100-set-ncr.jpg",
                description: "Carbonless copy paper, 100 sets.",
                price: 50.00,
              },
            ],
          },
          {
            name: "Computerized Invoice",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "A4 Invoice",
                image: "/images/a4-invoice.jpg",
                description: "Printable A4 invoices.",
                price: 25.00,
              },
              {
                name: "A5 Invoice",
                image: "/images/a5-invoice.jpg",
                description: "Compact A5 invoices.",
                price: 20.00,
              },
            ],
          },
        ],
      },
      "Stickers": {
        items: [
          {
            name: "Die Cut Stickers",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "Small Die Cut Sticker",
                image: "/images/small-die-cut.jpg",
                description: "Custom shape, 2x2 inch.",
                price: 0.50,
              },
              {
                name: "Large Die Cut Sticker",
                image: "/images/large-die-cut.jpg",
                description: "Custom shape, 4x4 inch.",
                price: 1.00,
              },
            ],
          },
          {
            name: "Print & Cut Stickers",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Glossy Print & Cut",
                image: "/images/glossy-print-cut.jpg",
                description: "Glossy finish stickers.",
                price: 0.75,
              },
              {
                name: "Matte Print & Cut",
                image: "/images/matte-print-cut.jpg",
                description: "Matte finish stickers.",
                price: 0.70,
              },
            ],
          },
          {
            name: "Transparent Stickers",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Clear Transparent Sticker",
                image: "/images/clear-transparent.jpg",
                description: "Fully transparent vinyl.",
                price: 1.20,
              },
              {
                name: "Frosted Transparent Sticker",
                image: "/images/frosted-transparent.jpg",
                description: "Frosted effect vinyl.",
                price: 1.50,
              },
            ],
          },
          {
            name: "Epoxy Stickers",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "Small Epoxy Sticker",
                image: "/images/small-epoxy.jpg",
                description: "3D epoxy dome, small size.",
                price: 1.00,
              },
              {
                name: "Large Epoxy Sticker",
                image: "/images/large-epoxy.jpg",
                description: "3D epoxy dome, large size.",
                price: 2.00,
              },
            ],
          },
        ],
      },
      "Promotion Items": {
        items: [
          {
            name: "Scratch And Win Coupons",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "Standard Scratch Coupon",
                image: "/images/standard-scratch.jpg",
                description: "Single-sided scratch-off coupon.",
                price: 0.80,
              },
              {
                name: "Premium Scratch Coupon",
                image: "/images/premium-scratch.jpg",
                description: "Double-sided with foil accents.",
                price: 1.50,
              },
            ],
          },
          {
            name: "Tent Card",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "A6 Tent Card",
                image: "/images/a6-tent-card.jpg",
                description: "Compact tent card for tables.",
                price: 2.00,
              },
              {
                name: "A5 Tent Card",
                image: "/images/a5-tent-card.jpg",
                description: "Larger tent card for promotions.",
                price: 3.00,
              },
            ],
          },
          {
            name: "Table Mat",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Paper Table Mat",
                image: "/images/paper-table-mat.jpg",
                description: "Disposable paper mat.",
                price: 1.50,
              },
              {
                name: "Vinyl Table Mat",
                image: "/images/vinyl-table-mat.jpg",
                description: "Reusable vinyl mat.",
                price: 5.00,
              },
            ],
          },
          {
            name: "Danglers",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Circular Dangler",
                image: "/images/circular-dangler.jpg",
                description: "Round hanging dangler.",
                price: 1.20,
              },
              {
                name: "Square Dangler",
                image: "/images/square-dangler.jpg",
                description: "Square hanging dangler.",
                price: 1.20,
              },
            ],
          },
        ],
      },
      "Gift Box": {
        items: [
          {
            name: "Corrugated Boxes",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "Small Corrugated Box",
                image: "/images/small-corrugated.jpg",
                description: "Compact corrugated gift box.",
                price: 3.00,
              },
              {
                name: "Large Corrugated Box",
                image: "/images/large-corrugated.jpg",
                description: "Spacious corrugated gift box.",
                price: 5.00,
              },
            ],
          },
          {
            name: "Wooden Boxes",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "Engraved Wooden Box",
                image: "/images/engraved-wooden-box.jpg",
                description: "Custom-engraved wooden gift box.",
                price: 15.00,
              },
              {
                name: "Plain Wooden Box",
                image: "/images/plain-wooden-box.jpg",
                description: "Simple wooden gift box.",
                price: 10.00,
              },
            ],
          },
          {
            name: "Pouches",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              {
                name: "Velvet Pouch",
                image: "/images/velvet-pouch.jpg",
                description: "Soft velvet gift pouch.",
                price: 2.50,
              },
              {
                name: "Satin Pouch",
                image: "/images/satin-pouch.jpg",
                description: "Elegant satin gift pouch.",
                price: 3.00,
              },
            ],
          },
          {
            name: "Tissue Boxes (Leather And Acrylic)",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              {
                name: "Leather Tissue Box",
                image: "/images/leather-tissue-box.jpg",
                description: "Premium leather tissue box.",
                price: 12.00,
              },
              {
                name: "Acrylic Tissue Box",
                image: "/images/acrylic-tissue-box.jpg",
                description: "Clear acrylic tissue box.",
                price: 10.00,
              },
            ],
          },
          {
            name: "Luxury Leather Boxes",
            image: "/images/Home Wallpaper.webp",
            variants: [
              {
                name: "Small Leather Box",
                image: "/images/small-leather-box.jpg",
                description: "Compact luxury leather box.",
                price: 20.00,
              },
              {
                name: "Large Leather Box",
                image: "/images/large-leather-box.jpg",
                description: "Spacious luxury leather box.",
                price: 30.00,
              },
            ],
          },
          {
            name: "Corporate Gift Box",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              {
                name: "Standard Corporate Box",
                image: "/images/standard-corporate-box.jpg",
                description: "Branded corporate gift box.",
                price: 15.00,
              },
              {
                name: "Premium Corporate Box",
                image: "/images/premium-corporate-box.jpg",
                description: "Luxury branded gift box.",
                price: 25.00,
              },
            ],
          },
          {
            name: "Custom Gift Boxes",
            image: "/images/Folders.webp",
            variants: [
              {
                name: "Personalized Gift Box",
                image: "/images/personalized-gift-box.jpg",
                description: "Custom-designed gift box.",
                price: 20.00,
              },
              {
                name: "Themed Gift Box",
                image: "/images/themed-gift-box.jpg",
                description: "Event-specific themed box.",
                price: 22.00,
              },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "Premium Business Cards", image: "/images/cd_printing_dubai.webp" },
      { name: "Tri-Fold Deluxe Brochure", image: "/images/custom_design_pu_notebook_dubai.webp" },
      { name: "Custom Corrugated Gift Box", image: "/images/Folders.webp" },
    ],
  },

  "OFFICE BRANDING": {
    categories: {
      "Frosted Sticker": {
        items: [
          {
            name: "Reverse Cut Frosted Stickers",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "White Frosted", description: "Reverse cut for inside glass application.", price: 25.50 },
              { name: "Grey Frosted", description: "Reverse cut with a darker tint.", price: 27.50 },
            ],
          },
          {
            name: "Standard Cut Frosted Sticker",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Finish", description: "Cut for outside glass application.", price: 22.00 },
              { name: "Fine Etch", description: "A smoother, finer frosted look.", price: 24.00 },
            ],
          },
          {
            name: "Printable Frosted Sticker",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Full Color Print", description: "Frosted sticker with full color graphics.", price: 35.00 },
              { name: "Spot Color Print", description: "Frosted sticker with limited color printing.", price: 30.00 },
            ],
          },
          {
            name: "Plain Frosted Sticker",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Standard Roll (50m)", description: "Uncut roll of plain frosted film.", price: 150.00 },
              { name: "Custom Square Meter", description: "Sold per square meter.", price: 3.50 },
            ],
          },
        ],
      },
      "Window Branding": {
        items: [
          {
            name: "High Quality Vinyl Sticker",
            image: "/images/Folders.webp",
            variants: [
              { name: "Glossy Vinyl", description: "High-shine permanent vinyl.", price: 18.00 },
              { name: "Matte Vinyl", description: "Non-reflective permanent vinyl.", price: 17.50 },
            ],
          },
          {
            name: "High Quality Graphics",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "UV Print Graphics", description: "UV resistant printing for longevity.", price: 28.00 },
              { name: "Eco-Solvent Print", description: "Standard, vibrant color print.", price: 24.00 },
            ],
          },
          {
            name: "One Way Vision Sticker",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Perforation", description: "Standard one-way visibility film.", price: 21.00 },
              { name: "High Definition Vision", description: "Finer perforation for clearer image.", price: 25.00 },
            ],
          },
          {
            name: "Window Films",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Solar Control Film", description: "Reduces heat and UV light.", price: 30.00 },
              { name: "Privacy Film (Non-Printed)", description: "Simple film for privacy.", price: 20.00 },
            ],
          },
        ],
      },
      "Wall Branding": {
        items: [
          {
            name: "Vinyl Lettering",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Matte Vinyl Lettering", description: "Precision cut non-glossy text.", price: 15.00 },
              { name: "Glossy Vinyl Lettering", description: "Precision cut high-gloss text.", price: 16.00 },
            ],
          },
          {
            name: "Wall Stickers",
            image: "/images/Folders.webp",
            variants: [
              { name: "Fabric Wall Stickers", description: "Removable and repositionable fabric vinyl.", price: 20.00 },
              { name: "Standard Vinyl Wall Stickers", description: "Permanent wall-grade vinyl stickers.", price: 15.00 },
            ],
          },
          {
            name: "Wall Decal",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Large Format Decal", description: "Full wall graphic application.", price: 35.00 },
              { name: "Small Logo Decal", description: "Small branded logo decal.", price: 10.00 },
            ],
          },
        ],
      },
      "Wall Frames": {
        items: [
          {
            name: "Canvas Frames",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Gallery Wrap Canvas", description: "Stretched canvas with hidden staples.", price: 40.00 },
              { name: "Rolled Canvas Print", description: "Print ready for you to frame.", price: 25.00 },
            ],
          },
          {
            name: "Wooden Frames",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Dark Wood Finish", description: "Classic dark brown wooden frame.", price: 30.00 },
              { name: "Light Wood Finish", description: "Modern light wood wooden frame.", price: 30.00 },
            ],
          },
          {
            name: "Acrylic Frame",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Clear Acrylic", description: "Sleek, modern clear acrylic frame.", price: 45.00 },
              { name: "Black Acrylic", description: "Opaque black acrylic frame.", price: 48.00 },
            ],
          },
          {
            name: "Metal Frame",
            image: "/images/Folders.webp",
            variants: [
              { name: "Brushed Aluminum", description: "Modern brushed aluminum frame.", price: 55.00 },
              { name: "Matte Black Metal", description: "Minimalist matte black metal frame.", price: 50.00 },
            ],
          },
        ],
      },
      "Display Stand": {
        items: [
          {
            name: "3D Display Stand",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Small Countertop 3D", description: "Small display for product showcases.", price: 60.00 },
              { name: "Large Floor 3D", description: "Large free-standing 3D display.", price: 150.00 },
            ],
          },
          {
            name: "Counter Top Stand",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "A4 Acrylic Counter Stand", description: "Acrylic stand for A4 flyers.", price: 20.00 },
              { name: "Literature Holder Stand", description: "Stand for brochures and pamphlets.", price: 25.00 },
            ],
          },
        ],
      },
      "Vehicle Branding": {
        items: [
          {
            name: "Car Branding",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Full Vehicle Wrap", description: "Complete wrap for car body.", price: 500.00 },
              { name: "Partial Vinyl Graphics", description: "Branding on doors or specific panels.", price: 150.00 },
            ],
          },
          {
            name: "Truck Branding",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Truck Cabin Wrap", description: "Branding on the driver's cabin.", price: 300.00 },
              { name: "Truck Trailer Graphics", description: "Large graphics for the trailer box.", price: 800.00 },
            ],
          },
        ],
      },
      "Magnet Sheet": {
        items: [
          {
            name: "Car Magnet",
            image: "/images/Folders.webp",
            variants: [
              { name: "Small Car Magnet (A3)", description: "Removable magnetic sign for car doors.", price: 45.00 },
              { name: "Large Car Magnet (A2)", description: "Larger magnetic sign for vehicles.", price: 60.00 },
            ],
          },
          {
            name: "Fridge Magnet",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Die-Cut Fridge Magnet", description: "Custom-shaped promotional magnet.", price: 1.50 },
              { name: "Rectangular Fridge Magnet", description: "Standard rectangular promotional magnet.", price: 1.00 },
            ],
          },
          {
            name: "Wall Magnet",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Wall Magnet Sheet", description: "Flexible magnetic sheeting for walls.", price: 35.00 },
              { name: "Magnetic Whiteboard", description: "Large magnetic writable surface.", price: 50.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "Premium One Way Vision", image: "/images/Home Wallpaper.webp" },
      { name: "Reverse Cut Frosted Vinyl", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
      { name: "Gallery Wrap Canvas Print", image: "/images/Folders.webp" },
    ],
  },

  "SIGNAGES": {
    categories: {
      "Sign Boards": {
        items: [
          {
            name: "3D Signage",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Acrylic 3D Letters", description: "3D sign with acrylic finish.", price: 80.00 },
              { name: "Metal 3D Letters", description: "3D sign with brushed metal finish.", price: 120.00 },
            ],
          },
          {
            name: "Backlit Signage",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "LED Backlit Sign", description: "Energy-efficient LED illuminated sign.", price: 150.00 },
              { name: "Fluorescent Backlit Sign", description: "Standard fluorescent illuminated sign.", price: 120.00 },
            ],
          },
          {
            name: "Flex Signage",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Frontlit Flex", description: "Flex banner illuminated from the front.", price: 50.00 },
              { name: "Backlit Flex", description: "Flex banner illuminated from behind.", price: 65.00 },
            ],
          },
          {
            name: "Frontlit Signage",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Aluminum Frontlit Box", description: "Aluminum frame with front lighting.", price: 110.00 },
              { name: "Slimline Frontlit", description: "A thin, sleek frontlit sign.", price: 130.00 },
            ],
          },
          {
            name: "Push Through Letter Signage",
            image: "/images/Folders.webp",
            variants: [
              { name: "White Acrylic Push Through", description: "White letters pushed through a panel.", price: 140.00 },
              { name: "Colored Acrylic Push Through", description: "Colored letters pushed through a panel.", price: 150.00 },
            ],
          },
          {
            name: "Neon Signage",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Custom LED Neon", description: "Flexible LED tubing in custom shapes.", price: 180.00 },
              { name: "Traditional Glass Neon", description: "Classic glass neon tube signage.", price: 250.00 },
            ],
          },
        ],
      },
      "Name Plates": {
        items: [
          {
            name: "Metal Name Plates",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Brushed Steel Engraved", description: "Elegant brushed stainless steel plate.", price: 40.00 },
              { name: "Brass Etched Plate", description: "Classic brass plate with chemical etching.", price: 55.00 },
            ],
          },
          {
            name: "Wooden Name Plates",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Engraved Oak Wood", description: "Deeply engraved on solid oak.", price: 35.00 },
              { name: "Printed Bamboo Plate", description: "Eco-friendly bamboo with direct print.", price: 30.00 },
            ],
          },
          {
            name: "Table Top Signage",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Acrylic T-Shape", description: "Double-sided acrylic table stand.", price: 15.00 },
              { name: "Wooden Block Base", description: "Nameplate with a solid wooden base.", price: 20.00 },
            ],
          },
          {
            name: "Acrylic Signage",
            image: "/images/Folders.webp",
            variants: [
              { name: "Clear Acrylic Stand-Off", description: "Clear acrylic with wall stand-off mounts.", price: 45.00 },
              { name: "Frosted Acrylic Print", description: "Printed graphics on frosted acrylic.", price: 50.00 },
            ],
          },
        ],
      },
      "Light Box": {
        items: [
          {
            name: "Fabric Light Box",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Wall Mounted Fabric Box", description: "Tension fabric graphic, wall-mounted.", price: 180.00 },
              { name: "Free Standing Fabric Box", description: "Double-sided fabric light box.", price: 250.00 },
            ],
          },
          {
            name: "Poster Light Box",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Snap Frame LED Box", description: "Easy-to-change snap frame poster box.", price: 90.00 },
              { name: "Slimline Poster Box", description: "Ultra-thin LED poster light box.", price: 110.00 },
            ],
          },
          {
            name: "Acrylic Signage Board",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Edge-Lit Acrylic", description: "Acrylic board with lighting on the edges.", price: 120.00 },
              { name: "Back-Painted Acrylic", description: "Opaque acrylic with custom back-paint.", price: 80.00 },
            ],
          },
          {
            name: "Flex Face Sign (Light Box)",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Small Flex Face", description: "Smaller size flex face light box.", price: 150.00 },
              { name: "Large Format Flex Face", description: "Large outdoor flex face light box.", price: 300.00 },
            ],
          },
        ],
      },
      "Self Standing Letters": {
        items: [
          {
            name: "Metal Letters",
            image: "/images/Folders.webp",
            variants: [
              { name: "Brushed Aluminum Letters", description: "Freestanding letters in brushed metal.", price: 60.00 },
              { name: "Polished Chrome Letters", description: "Freestanding letters with a mirror finish.", price: 75.00 },
            ],
          },
          {
            name: "Wooden Letters",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Natural Wood Finish", description: "Raw, unfinished wooden letters.", price: 30.00 },
              { name: "Painted MDF Letters", description: "MDF letters painted in a custom color.", price: 35.00 },
            ],
          },
          {
            name: "Acrylic Letters",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Glossy White Acrylic", description: "Thick, glossy white acrylic letters.", price: 40.00 },
              { name: "Colored Matte Acrylic", description: "Colored acrylic letters with a matte finish.", price: 45.00 },
            ],
          },
          {
            name: "Forex Letters",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "10mm Forex", description: "Durable and lightweight 10mm Forex letters.", price: 25.00 },
              { name: "19mm Forex", description: "Thicker 19mm Forex letters for more depth.", price: 30.00 },
            ],
          },
          {
            name: "Foamboard Letters",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Standard Foamboard", description: "Lightweight foam core letters for temporary display.", price: 15.00 },
              { name: "Reinforced Foamboard", description: "Foam core with a tougher surface.", price: 20.00 },
            ],
          },
        ],
      },
      "Direction Signage": {
        items: [
          {
            name: "Wall Mounted Signage",
            image: "/images/Folders.webp",
            variants: [
              { name: "Flat Panel Wall Mount", description: "Simple aluminum or acrylic flat panel.", price: 40.00 },
              { name: "Curved Wall Mount", description: "Curved profile aluminum sign.", price: 50.00 },
            ],
          },
          {
            name: "Hanging Signage",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Ceiling Hung Banner", description: "Lightweight banner for ceiling suspension.", price: 30.00 },
              { name: "Double Sided Hanging Sign", description: "Rigid sign for visibility from both directions.", price: 60.00 },
            ],
          },
          {
            name: "Direction Signage",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Modular Directory", description: "Interchangeable slat system for directories.", price: 70.00 },
              { name: "Arrow Signage", description: "Custom shape arrow-style direction sign.", price: 45.00 },
            ],
          },
          {
            name: "Self Standing Signage",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Wayfinding Totem", description: "Tall, vertical freestanding directory.", price: 180.00 },
              { name: "A-Frame Sign (Sandwich Board)", description: "Portable folding pavement sign.", price: 75.00 },
            ],
          },
        ],
      },
      "Labels": {
        items: [
          {
            name: "PVC/Acrylic Label",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Engraved PVC Label", description: "Durable engraved plastic label.", price: 5.00 },
              { name: "Printed Acrylic Label", description: "UV printed acrylic label.", price: 6.00 },
            ],
          },
          {
            name: "Metal Label",
            image: "/images/Folders.webp",
            variants: [
              { name: "Aluminum Asset Tag", description: "Serialized aluminum tags for equipment.", price: 3.00 },
              { name: "Stainless Steel Engraved", description: "High-durability stainless steel label.", price: 7.00 },
            ],
          },
          {
            name: "Wooden Label",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Laser Cut Plywood", description: "Laser cut thin plywood labels.", price: 2.50 },
              { name: "Engraved Hardwood", description: "Engraved solid hardwood labels.", price: 4.00 },
            ],
          },
          {
            name: "Acrylic Label",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Numbered Acrylic Tags", description: "Consecutively numbered acrylic labels.", price: 3.50 },
              { name: "Color Fill Acrylic Tags", description: "Engraved acrylic with color-filled text.", price: 5.00 },
            ],
          },
        ],
      },
      "Safety Signage": {
        items: [
          {
            name: "Floor Sign/Signage",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Anti-Slip Floor Graphic", description: "Durable, non-slip floor stickers.", price: 18.00 },
              { name: "Wet Floor Cones", description: "Standard yellow safety cones.", price: 10.00 },
            ],
          },
          {
            name: "Self-Standing Sign",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Caution A-Board", description: "Folding safety warning sign.", price: 25.00 },
              { name: "Portable Barrier Sign", description: "Extendable temporary barrier sign.", price: 80.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "LED Backlit 3D Acrylic Sign", image: "/images/Folders.webp" },
      { name: "Custom LED Neon Sign", image: "/images/custom_design_pu_notebook_dubai.webp" },
      { name: "Brushed Steel Engraved Name Plate", image: "/images/cd_printing_dubai.webp" },
    ],
  },

  "FLAGS": {
    categories: {
      "Branding Flags": {
        items: [
          {
            name: "Teardrop Flag",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Small Teardrop (8ft)", description: "Compact teardrop flag kit.", price: 80.00 },
              { name: "Large Teardrop (14ft)", description: "Tall advertising teardrop flag.", price: 120.00 },
            ],
          },
          {
            name: "Curved Top Flag",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Medium Curved Top", description: "Medium-sized curved banner flag.", price: 90.00 },
              { name: "X-Large Curved Top", description: "Max height curved top flag.", price: 140.00 },
            ],
          },
          {
            name: "L-Shape Flag",
            image: "/images/Folders.webp",
            variants: [
              { name: "Standard L-Shape", description: "Rectangular flag with L-pole.", price: 75.00 },
              { name: "Mesh L-Shape", description: "L-Shape flag printed on breathable mesh.", price: 85.00 },
            ],
          },
          {
            name: "Advertising Flag",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Feather Flag", description: "Wind-resistant feather shaped flag.", price: 95.00 },
              { name: "Rectangle Flag", description: "Standard rectangular advertising flag.", price: 80.00 },
            ],
          },
          {
            name: "Telescopic Flag",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Adjustable Pole (10ft)", description: "Telescopic pole with custom flag.", price: 110.00 },
              { name: "Ground Stake Base", description: "Telescopic flag with ground spike base.", price: 125.00 },
            ],
          },
        ],
      },
      "Flag Base": {
        items: [
          {
            name: "Water Base",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Standard Water Base (10L)", description: "Fillable plastic base for stability.", price: 30.00 },
              { name: "Heavy Duty Water Base (20L)", description: "Larger base for high wind areas.", price: 45.00 },
            ],
          },
          {
            name: "Cross Base",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Standard Cross Base", description: "Folding cross base for flat surfaces.", price: 25.00 },
              { name: "Cross Base with Water Bag", description: "Cross base with optional weight bag.", price: 35.00 },
            ],
          },
          {
            name: "Concrete Base",
            image: "/images/Folders.webp",
            variants: [
              { name: "10kg Concrete Base", description: "Heavy circular concrete base.", price: 50.00 },
              { name: "20kg Concrete Base", description: "Extra heavy concrete base for large flags.", price: 75.00 },
            ],
          },
          {
            name: "Plastic Coated Concrete Base",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Black Coated Base", description: "Concrete base with a protective black plastic coating.", price: 60.00 },
              { name: "White Coated Base", description: "Concrete base with a protective white plastic coating.", price: 60.00 },
            ],
          },
        ],
      },
      "Office Flags": {
        items: [
          {
            name: "Table Flag",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Single Pole Table Flag", description: "One flag on a single pole stand.", price: 15.00 },
              { name: "Double Pole Table Flag", description: "Two flags on a dual pole stand.", price: 20.00 },
            ],
          },
          {
            name: "Table Flags - Royal",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Gold Finish Stand", description: "Table flag with a premium gold base.", price: 25.00 },
              { name: "Chrome Finish Stand", description: "Table flag with a polished chrome base.", price: 22.00 },
            ],
          },
          {
            name: "Conference Flag",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Indoor Conference Flag", description: "Flag with indoor ornate base and pole.", price: 150.00 },
              { name: "Outdoor Conference Flag", description: "Durable flag for outdoor conference display.", price: 180.00 },
            ],
          },
          {
            name: "Conference Hanging Flag",
            image: "/images/Folders.webp",
            variants: [
              { name: "Single Sided Hanging", description: "One-sided flag for wall or ceiling hanging.", price: 50.00 },
              { name: "Double Sided Hanging", description: "Two-sided flag for maximum visibility.", price: 70.00 },
            ],
          },
        ],
      },
      "Outdoor Flags": {
        items: [
          {
            name: "Stadium Flag",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Large Stadium Flag (3x5m)", description: "Extra large flag for stadium events.", price: 250.00 },
              { name: "Small Stadium Flag (1.5x2.5m)", description: "Standard size flag for smaller events.", price: 120.00 },
            ],
          },
          {
            name: "Wall Mounted Flags",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Pole Mount", description: "Flag for standard wall-mounted pole.", price: 40.00 },
              { name: "Angled Bracket Mount", description: "Flag with an angled wall bracket system.", price: 55.00 },
            ],
          },
          {
            name: "Hosting Flag",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Embroidered Flag", description: "High-quality, stitched logo and design.", price: 80.00 },
              { name: "Printed Nylon Flag", description: "Lightweight printed nylon flag.", price: 60.00 },
            ],
          },
        ],
      },
      "Event Gear": {
        items: [
          {
            name: "Pole Flag",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Aluminium Pole Flag", description: "Lightweight aluminum pole flag system.", price: 70.00 },
              { name: "Fibreglass Pole Flag", description: "Durable fibreglass pole flag system.", price: 80.00 },
            ],
          },
          {
            name: "Hand Flag",
            image: "/images/Folders.webp",
            variants: [
              { name: "Small Hand Flag (A5)", description: "Small paper or vinyl hand flags.", price: 1.50 },
              { name: "Large Hand Flag (A4)", description: "Larger vinyl hand flags.", price: 2.00 },
            ],
          },
          {
            name: "Back Pack Flag",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Teardrop Backpack Banner", description: "Hands-free wearable teardrop banner.", price: 85.00 },
              { name: "Rectangle Backpack Banner", description: "Hands-free wearable rectangular banner.", price: 80.00 },
            ],
          },
          {
            name: "Finish Line Flag",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Checkered Finish Flag", description: "Classic black and white checkered flag.", price: 30.00 },
              { name: "Custom Branded Finish Flag", description: "Custom logo printed finish flag.", price: 45.00 },
            ],
          },
          {
            name: "Fan Scarf Flag",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Woven Fan Scarf", description: "High-quality woven supporter scarf.", price: 12.00 },
              { name: "Printed Fan Scarf", description: "Sublimation printed fan scarf.", price: 10.00 },
            ],
          },
        ],
      },
      "Decorative Flags": {
        items: [
          {
            name: "Desert Car Flag",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Window Clip Car Flag", description: "Flag that clips onto a car window.", price: 8.00 },
              { name: "Suction Cup Car Flag", description: "Flag with a suction cup for interior display.", price: 9.00 },
            ],
          },
          {
            name: "Toothpick Flags",
            image: "/images/Folders.webp",
            variants: [
              { name: "Plain White Toothpick Flag", description: "Small paper flags on toothpicks.", price: 0.20 },
              { name: "Custom Logo Toothpick Flag", description: "Small paper flags with custom logo.", price: 0.30 },
            ],
          },
          {
            name: "Bunting Flags",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "PVC Bunting (10m)", description: "Weatherproof PVC flag bunting.", price: 40.00 },
              { name: "Fabric Bunting (10m)", description: "Soft fabric flag bunting.", price: 50.00 },
            ],
          },
          {
            name: "Dashboard Flag",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Mini Dashboard Flag", description: "Small flag for car dashboard.", price: 15.00 },
              { name: "Dual Dashboard Flag", description: "Two mini flags on a single dashboard stand.", price: 20.00 },
            ],
          },
          {
            name: "Pennant Flags",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Felt Pennant", description: "Traditional felt triangular pennant.", price: 10.00 },
              { name: "Vinyl Pennant", description: "Durable vinyl triangular pennant.", price: 8.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "Medium Teardrop Flag Kit", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
      { name: "Heavy Fillable Water Base", image: "/images/Folders.webp" },
      { name: "Backpack Banner System", image: "/images/custom_design_pu_notebook_dubai.webp" },
    ],
  },

  "BACKDROPS & EXHIBITION": {
    categories: {
      "Standees": {
        items: [
          {
            name: "Rollup Stand",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Rollup (80x200cm)", description: "Basic retractable banner stand.", price: 60.00 },
              { name: "Premium Rollup (85x200cm)", description: "Heavy-duty base with higher quality graphic.", price: 90.00 },
            ],
          },
          {
            name: "X Banner Stand",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Standard X-Banner (60x160cm)", description: "Economical lightweight X-frame stand.", price: 40.00 },
              { name: "Large X-Banner (80x180cm)", description: "Larger X-frame for bigger display.", price: 55.00 },
            ],
          },
          {
            name: "Broad Base Roll Up Stand",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Single-Sided Broad Base", description: "Heavy base for enhanced stability, one side print.", price: 110.00 },
              { name: "Double-Sided Broad Base", description: "Broad base rollup with print on both sides.", price: 150.00 },
            ],
          },
          {
            name: "Classic Backlit Standee",
            image: "/images/Folders.webp",
            variants: [
              { name: "Small LED Backlit Standee", description: "Internal LED illumination, compact size.", price: 130.00 },
              { name: "Large LED Backlit Standee", description: "Brighter, taller backlit standee.", price: 180.00 },
            ],
          },
          {
            name: "Barricade",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Plastic Water-Fill Barrier", description: "Plastic barrier that can be filled with water for weight.", price: 70.00 },
              { name: "Steel Branded Barrier", description: "Steel barrier with a printed fabric cover.", price: 100.00 },
            ],
          },
          {
            name: "Cut Out Standee",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Cardboard Cutout", description: "Lifesize photo cutout on cardboard.", price: 50.00 },
              { name: "Foam Board Cutout", description: "More durable foam board cutout.", price: 65.00 },
            ],
          },
          {
            name: "Toblerone Frame",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Standard Toblerone (1x1m)", description: "Triangular three-sided display stand.", price: 90.00 },
              { name: "Large Toblerone (1.5x1.5m)", description: "Larger three-sided promotion frame.", price: 120.00 },
            ],
          },
          {
            name: "Popout Banner/Spring A Board",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Horizontal Popout Banner", description: "Folds flat, springs open to horizontal oval.", price: 70.00 },
              { name: "Vertical Popout Banner", description: "Folds flat, springs open to vertical shape.", price: 75.00 },
            ],
          },
        ],
      },
      "Backdrops": {
        items: [
          {
            name: "Adjustable Backdrop Stands",
            image: "/images/Folders.webp",
            variants: [
              { name: "Telescopic Stand (8x8ft)", description: "Adjustable pole system for vinyl backdrops.", price: 100.00 },
              { name: "Heavy Duty Stand (10x10ft)", description: "Stronger frame for larger vinyl banners.", price: 130.00 },
            ],
          },
          {
            name: "Tension Fabric Stand Straight",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "8ft Straight Fabric", description: "Pillowcase graphic on a straight tube frame.", price: 250.00 },
              { name: "10ft Straight Fabric", description: "Larger seamless fabric display.", price: 300.00 },
            ],
          },
          {
            name: "Tension Fabric Stand Curved",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "8ft Curved Fabric", description: "Pillowcase graphic on a curved tube frame.", price: 270.00 },
              { name: "10ft Curved Fabric", description: "Larger curved seamless fabric display.", price: 320.00 },
            ],
          },
          {
            name: "Straight Pop Up",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "3x3 Straight Pop Up", description: "Magnetic frame pop-up system, straight wall.", price: 400.00 },
              { name: "4x3 Straight Pop Up", description: "Larger straight pop-up system.", price: 500.00 },
            ],
          },
          {
            name: "Fabric Straight",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "8ft Velcro Fabric", description: "Fabric graphic attached via velcro to a pop-up frame.", price: 350.00 },
              { name: "10ft Velcro Fabric", description: "Larger Velcro-attached fabric display.", price: 450.00 },
            ],
          },
          {
            name: "Wooden Backdrop",
            image: "/images/Folders.webp",
            variants: [
              { name: "Plain Wood Backdrop", description: "Simple untreated wooden slat backdrop.", price: 150.00 },
              { name: "Painted Wood Backdrop", description: "Wooden backdrop painted in custom colors.", price: 180.00 },
            ],
          },
          {
            name: "Pop Up",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Curved Pop Up System", description: "Standard curved magnetic frame pop-up.", price: 420.00 },
              { name: "Pop Up Counter Kit", description: "Pop-up system that converts into a counter.", price: 550.00 },
            ],
          },
          {
            name: "Photo Booth",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Photo Booth", description: "Custom printed backdrop for photo opportunities.", price: 180.00 },
              { name: "360 Spin Photo Booth", description: "Circular platform with surrounding branded backdrop.", price: 350.00 },
            ],
          },
          {
            name: "LED Screen",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "3x2m Modular LED Screen", description: "Rentable LED video wall for backdrops.", price: 800.00 },
              { name: "Curved LED Screen", description: "Rentable curved modular LED screen.", price: 950.00 },
            ],
          },
        ],
      },
      "Exhibitions & Event": {
        items: [
          {
            name: "Outdoor Umbrella",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "3m Diameter Branded Umbrella", description: "Large outdoor umbrella with custom print.", price: 120.00 },
              { name: "Cantilever Umbrella", description: "Side-pole umbrella for obstruction-free space.", price: 180.00 },
            ],
          },
          {
            name: "Tent/Gazebo",
            image: "/images/Folders.webp",
            variants: [
              { name: "3x3m Pop-Up Tent", description: "Custom branded easy-assembly canopy.", price: 350.00 },
              { name: "4x4m Heavy Duty Gazebo", description: "Larger, reinforced exhibition tent.", price: 500.00 },
            ],
          },
          {
            name: "Promotional Table",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Pop-Up Promo Counter", description: "Portable plastic promotional sampling table.", price: 80.00 },
              { name: "Fabric Tension Counter", description: "Counter with pillowcase fabric graphic.", price: 120.00 },
            ],
          },
          {
            name: "Table Cover/Table Cloth",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Fitted Table Throw (6ft)", description: "Custom printed cloth fitted to a 6ft table.", price: 70.00 },
              { name: "Loose Table Throw (8ft)", description: "Draped cloth for an 8ft table.", price: 85.00 },
            ],
          },
          {
            name: "Exhibition Counter",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Modular Exhibition Counter", description: "Sectional counter with internal storage.", price: 180.00 },
              { name: "Wooden Reception Desk", description: "Heavy-duty custom wooden exhibition counter.", price: 300.00 },
            ],
          },
        ],
      },
      "Event Booth": {
        items: [
          {
            name: "Panel/Seamless Branding",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Seamless Fabric Wall", description: "Smooth, wrinkle-free printed fabric wall system.", price: 200.00 },
              { name: "Graphic Panel System", description: "Individual printed panels that connect.", price: 180.00 },
            ],
          },
          {
            name: "Modular Backlit Booth",
            image: "/images/Folders.webp",
            variants: [
              { name: "3x3m Backlit Shell Scheme", description: "Illuminated booth design, modular build.", price: 800.00 },
              { name: "6x3m Backlit Shell Scheme", description: "Larger illuminated modular booth.", price: 1500.00 },
            ],
          },
          {
            name: "Island Backlit Shell Scheme",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "4x4m Island Booth", description: "Freestanding central illuminated exhibition stand.", price: 1200.00 },
              { name: "6x6m Island Booth", description: "Large format four-sided illuminated stand.", price: 2500.00 },
            ],
          },
        ],
      },
      "Event Props": {
        items: [
          {
            name: "Social Media Frames",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Instagram Cutout Frame", description: "Large foam board cutout of an Instagram profile.", price: 40.00 },
              { name: "Facebook Cutout Frame", description: "Large foam board cutout of a Facebook profile.", price: 40.00 },
            ],
          },
          {
            name: "Hashtags",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Handheld Hashtag Props", description: "Small foam board printed hashtag signs.", price: 10.00 },
              { name: "Large Freestanding Hashtags", description: "Large MDF/Forex freestanding hashtag signs.", price: 30.00 },
            ],
          },
          {
            name: "Giant Cheques",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Standard Giant Cheque (A0)", description: "Large, print-ready novelty cheque.", price: 60.00 },
              { name: "Custom Shape Giant Cheque", description: "Cheque in a unique, custom shape.", price: 80.00 },
            ],
          },
          {
            name: "Party Props",
            image: "/images/Folders.webp",
            variants: [
              { name: "Themed Party Prop Set", description: "Set of foam board props for a specific theme (e.g., weddings).", price: 50.00 },
              { name: "Personalized Party Prop", description: "Custom-designed individual foam board props.", price: 15.00 },
            ],
          },
          {
            name: "Easel Stand",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Wooden Tripod Easel", description: "Classic wooden easel for displaying signs.", price: 35.00 },
              { name: "Metal Display Easel", description: "Modern foldable metal easel.", price: 45.00 },
            ],
          },
          {
            name: "Metal Brochure Stand",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Collapsible Z-Fold Stand", description: "Folding metal stand for multiple brochures.", price: 70.00 },
              { name: "Static Tiered Stand", description: "Fixed-tier metal stand for literature.", price: 50.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "8ft x 8ft Tension Fabric Backdrop", image: "/images/Home Wallpaper.webp" },
      { name: "Premium Broad Base Roll-Up Banner", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
      { name: "Custom Branded Gazebo Tent 3x3m", image: "/images/Folders.webp" },
    ],
  },

  "CORPORATE GIFTS": {
    categories: {
      "Technology": {
        items: [
          {
            name: "Headphones & Speaker",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Branded Bluetooth Speaker", description: "Portable speaker with custom logo print.", price: 30.00 },
              { name: "Branded Noise-Cancelling Headphones", description: "Over-ear headphones with engraved logo.", price: 60.00 },
            ],
          },
          {
            name: "Powerbanks",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "5000mAh Powerbank", description: "Slim aluminum power bank, custom engraving.", price: 15.00 },
              { name: "10000mAh Powerbank", description: "High-capacity power bank, full color print.", price: 25.00 },
            ],
          },
          {
            name: "Wireless Charger",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Standard Charging Pad", description: "Branded circular wireless charging pad.", price: 20.00 },
              { name: "3-in-1 Charging Station", description: "Charging stand for phone, watch, and pods.", price: 40.00 },
            ],
          },
          {
            name: "USB Flash Drive",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "16GB USB Stick", description: "Standard plastic USB with logo print.", price: 8.00 },
              { name: "64GB Metal USB", description: "High-speed metal USB with laser engraving.", price: 20.00 },
            ],
          },
          {
            name: "Mousepads",
            image: "/images/Folders.webp",
            variants: [
              { name: "Standard Mousepad", description: "Neoprene mousepad, full color print.", price: 5.00 },
              { name: "Wireless Charging Mousepad", description: "Mousepad with an integrated charging coil.", price: 25.00 },
            ],
          },
        ],
      },
      "Drinkware": {
        items: [
          {
            name: "Tumblers",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Stainless Steel Tumbler (500ml)", description: "Double-walled insulated tumbler.", price: 18.00 },
              { name: "Acrylic Tumbler (750ml)", description: "Clear acrylic with straw, custom logo.", price: 12.00 },
            ],
          },
          {
            name: "Ceramic Mug",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Standard Coffee Mug", description: "Classic white ceramic mug, full color print.", price: 7.00 },
              { name: "Magic Color-Change Mug", description: "Heat-sensitive mug that reveals the logo.", price: 15.00 },
            ],
          },
          {
            name: "Water Bottle & Infuser",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Sport Water Bottle (BPA-Free)", description: "Plastic bottle with sipper lid.", price: 10.00 },
              { name: "Fruit Infuser Bottle", description: "Bottle with a built-in fruit infuser.", price: 14.00 },
            ],
          },
          {
            name: "Travel Mug",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Insulated Travel Mug (450ml)", description: "Stainless steel mug with spill-proof lid.", price: 16.00 },
              { name: "Bamboo Fiber Travel Mug", description: "Eco-friendly bamboo material mug.", price: 14.00 },
            ],
          },
        ],
      },
      "Shopping & Promotion": {
        items: [
          {
            name: "Jute Bags",
            image: "/images/Folders.webp",
            variants: [
              { name: "Small Jute Tote", description: "Small bag with rope handles, logo print.", price: 6.00 },
              { name: "Large Jute Shopping Bag", description: "Spacious bag for groceries/shopping.", price: 9.00 },
            ],
          },
          {
            name: "Cotton Bags",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Standard Cotton Tote", description: "Lightweight 100% cotton canvas bag.", price: 4.00 },
              { name: "Organic Cotton Tote", description: "Eco-friendly certified organic cotton.", price: 6.00 },
            ],
          },
          {
            name: "Non Woven Bags",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Reusable Non-Woven Tote", description: "Durable budget-friendly reusable bag.", price: 2.00 },
              { name: "Non-Woven Drawstring Bag", description: "Drawstring backpack style bag.", price: 3.00 },
            ],
          },
          {
            name: "Customised Shopping Bags",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Full-Color Custom Print", description: "Edge-to-edge full color custom bag.", price: 10.00 },
              { name: "Paper Shopping Bags", description: "High-quality paper bags with rope handles.", price: 2.50 },
            ],
          },
          {
            name: "String Bag",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Polyester String Bag", description: "Basic polyester drawstring gym bag.", price: 5.00 },
              { name: "Mesh String Bag", description: "Drawstring bag with mesh side panels.", price: 6.00 },
            ],
          },
          {
            name: "Backpacks",
            image: "/images/Folders.webp",
            variants: [
              { name: "Everyday Backpack", description: "Standard school/work backpack.", price: 25.00 },
              { name: "Laptop Backpack", description: "Padded section for a 15-inch laptop.", price: 40.00 },
            ],
          },
          {
            name: "Laptop Bags",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Messenger Laptop Bag", description: "Shoulder-strap style laptop bag.", price: 35.00 },
              { name: "Laptop Sleeve (13-inch)", description: "Padded sleeve for laptop protection.", price: 15.00 },
            ],
          },
        ],
      },
      "Stationery Items": {
        items: [
          {
            name: "Keychain",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Metal Engraved Keychain", description: "Durable metal keychain with logo engraving.", price: 4.00 },
              { name: "Acrylic Photo Keychain", description: "Custom photo insert acrylic keychain.", price: 2.50 },
            ],
          },
          {
            name: "Clock",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Desk Clock (Digital)", description: "Digital LED display desk clock.", price: 20.00 },
              { name: "Wall Clock (Analog)", description: "Branded analog wall clock.", price: 25.00 },
            ],
          },
          {
            name: "Card Holder",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Leather Business Card Holder", description: "Premium leather case for business cards.", price: 15.00 },
              { name: "Metal Credit Card Holder (RFID)", description: "Slim metal RFID-blocking card holder.", price: 18.00 },
            ],
          },
          {
            name: "Mementos & Awards",
            image: "/images/Folders.webp",
            variants: [
              { name: "Acrylic Award Plaque", description: "Engraved clear acrylic award.", price: 40.00 },
              { name: "Crystal Glass Trophy", description: "Premium heavy crystal engraved trophy.", price: 80.00 },
            ],
          },
          {
            name: "Metal Pen",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Laser Engraved Rollerball Pen", description: "Smooth writing metal rollerball.", price: 8.00 },
              { name: "Luxury Ballpoint Pen Set", description: "Premium metal ballpoint pen in a gift box.", price: 15.00 },
            ],
          },
          {
            name: "Plastic Pen",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Click-Action Ballpoint", description: "Standard plastic click-action pen.", price: 1.00 },
              { name: "Eco-Friendly Recycled Pen", description: "Pen made from recycled materials.", price: 1.50 },
            ],
          },
          {
            name: "Name Badge",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Magnetic Name Badge", description: "Badge with a strong magnetic backing.", price: 6.00 },
              { name: "Pin Back Name Badge", description: "Standard badge with a secure pin.", price: 5.00 },
            ],
          },
          {
            name: "Notebook",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "A5 PU Leather Notebook", description: "Softcover PU leather notebook.", price: 12.00 },
              { name: "Hardcover Spiral Notebook", description: "Durable hardcover with spiral binding.", price: 10.00 },
            ],
          },
          {
            name: "Ecofriendly Items",
            image: "/images/Folders.webp",
            variants: [
              { name: "Bamboo Utensil Set", description: "Reusable travel bamboo cutlery set.", price: 15.00 },
              { name: "Recycled Paper Seed Pencil", description: "Pencil with seeds in the tip to plant.", price: 3.00 },
            ],
          },
          {
            name: "Organizer",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "A4 Zipper Portfolio", description: "Professional portfolio with zipper closure.", price: 25.00 },
              { name: "Desk Organizer Set", description: "Multi-compartment wooden desk set.", price: 30.00 },
            ],
          },
        ],
      },
      "Apparel & Show Items": {
        items: [
          {
            name: "Jersey",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Polyester Sport Jersey", description: "Lightweight breathable sports shirt.", price: 20.00 },
              { name: "Sublimated Full-Color Jersey", description: "Edge-to-edge custom print jersey.", price: 35.00 },
            ],
          },
          {
            name: "Caps",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Embroidered Cotton Cap", description: "Classic baseball cap with logo embroidery.", price: 10.00 },
              { name: "Snapback Cap (Flat Peak)", description: "Modern flat-peak adjustable cap.", price: 12.00 },
            ],
          },
          {
            name: "Safety Vest",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Reflective Mesh Vest", description: "Standard hi-vis reflective safety vest.", price: 8.00 },
              { name: "Custom Printed Safety Vest", description: "Vest with company name and logo.", price: 10.00 },
            ],
          },
          {
            name: "Wristbands",
            image: "/images/Folders.webp",
            variants: [
              { name: "Silicone Debossed Wristband", description: "Molded silicone wristband with sunk logo.", price: 1.50 },
              { name: "Tyvek Event Wristband", description: "Waterproof, non-tear single-use wristband.", price: 0.50 },
            ],
          },
          {
            name: "Lanyards",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Printed Polyester Lanyard", description: "Standard lanyard with full color print.", price: 2.00 },
              { name: "Woven Lanyard", description: "High-quality woven logo into the fabric.", price: 3.50 },
            ],
          },
          {
            name: "ID Card And Badge",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "PVC ID Card", description: "Standard credit-card size plastic ID.", price: 3.00 },
              { name: "Proximity RFID Card", description: "ID card with integrated access chip.", price: 6.00 },
            ],
          },
          {
            name: "Fridge Magnet",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Die Cut Fridge Magnet", description: "Custom shaped promotional magnet.", price: 1.50 },
              { name: "Calendar Fridge Magnet", description: "Magnet with a yearly calendar print.", price: 2.00 },
            ],
          },
          {
            name: "Hoodie",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Cotton Blend Hoodie", description: "Standard pullover hoodie, screen printed logo.", price: 30.00 },
              { name: "Zip-Up Hoodie", description: "Full-zip hoodie with embroidered logo.", price: 45.00 },
            ],
          },
          {
            name: "Anti Stress Ball",
            image: "/images/Folders.webp",
            variants: [
              { name: "Round Stress Ball", description: "Classic round stress ball, custom print.", price: 2.50 },
              { name: "Custom Shape Stress Toy", description: "Stress reliever molded into a custom shape.", price: 4.00 },
            ],
          },
          {
            name: "Ribbons",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Satin Ribbon Roll (Custom Print)", description: "Custom text printed on a satin ribbon.", price: 10.00 },
              { name: "Grosgrain Ribbon Roll (Woven)", description: "Woven text on a textured grosgrain ribbon.", price: 15.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "Custom Logo Power Bank (10000mAh)", image: "/images/cd_printing_dubai.webp" },
      { name: "Engraved Insulated Tumbler", image: "/images/Home Wallpaper.webp" },
      { name: "Laser Engraved Metal Pen", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
    ],
  },

  "VIDEO BROCHURE": {
    categories: {
      "Video Brochure Card": {
        items: [
          {
            name: "5 Inch Video Brochure Card",
            image: "/images/Folders.webp",
            variants: [
              { name: "256MB Memory (30 min)", description: "5-inch screen, 256MB storage.", price: 60.00 },
              { name: "512MB Memory (60 min)", description: "5-inch screen, 512MB storage.", price: 70.00 },
            ],
          },
          {
            name: "7 Inch Video Brochure Card",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "1GB Memory (120 min)", description: "7-inch HD screen, 1GB storage.", price: 90.00 },
              { name: "Touch Screen Option", description: "7-inch screen with interactive touch features.", price: 120.00 },
            ],
          },
          {
            name: "10 Inch Video Brochure Card",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "2GB Memory (4-hour)", description: "Large 10-inch screen, 2GB storage.", price: 150.00 },
              { name: "External Volume Buttons", description: "10-inch screen with physical volume control.", price: 160.00 },
            ],
          },
          {
            name: "Customised Size",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "A6 Compact Card", description: "Smaller than A5 custom sized video card.", price: 55.00 },
              { name: "Slim Bar Card", description: "Long, narrow custom-size video card.", price: 65.00 },
            ],
          },
        ],
      },
      "Video Brochure Box": {
        items: [
          {
            name: "5 Inch Video Brochure Box",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Flip-Top Box", description: "Video screen integrated into a lift-lid box.", price: 80.00 },
              { name: "Drawer Style Box", description: "Screen on the exterior, drawer for gifts.", price: 95.00 },
            ],
          },
          {
            name: "7 Inch Video Brochure Box",
            image: "/images/Folders.webp",
            variants: [
              { name: "Luxury Soft-Touch Finish", description: "Premium feel box with a 7-inch screen.", price: 120.00 },
              { name: "Window Display Box", description: "Box with a clear viewing window next to the screen.", price: 130.00 },
            ],
          },
          {
            name: "10 Inch Video Brochure Box",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Large Presenter Box", description: "Maximum impact video box with a 10-inch screen.", price: 180.00 },
              { name: "Multiple Video Buttons", description: "10-inch screen with buttons for selecting different videos.", price: 195.00 },
            ],
          },
          {
            name: "Customised Size",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "Wine Bottle Presentation Box", description: "Custom size to hold a bottle, with video screen.", price: 150.00 },
              { name: "Watch/Jewelry Video Box", description: "Small luxury box with video display.", price: 110.00 },
            ],
          },
        ],
      },
      "Video Brochure Screen": {
        items: [
          {
            name: "5 Inch Screen",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Standard 5-inch LCD", description: "Base model screen insert for DIY projects.", price: 35.00 },
              { name: "High-Res 5-inch LCD", description: "Higher resolution screen insert.", price: 45.00 },
            ],
          },
          {
            name: "7 Inch Screen",
            image: "/images/photo-1601924994987-69e26d50dc26.jpeg",
            variants: [
              { name: "Standard 7-inch HD", description: "High-quality screen insert for A5 formats.", price: 55.00 },
              { name: "7-inch Touch Display", description: "Touch-enabled screen insert with 1GB memory.", price: 80.00 },
            ],
          },
          {
            name: "10 Inch Screen",
            image: "/images/Folders.webp",
            variants: [
              { name: "Standard 10-inch Full HD", description: "Largest screen insert, ideal for presentations.", price: 100.00 },
              { name: "10-inch with Light Sensor", description: "Screen with ambient light adjustment.", price: 110.00 },
            ],
          },
          {
            name: "Customised",
            image: "/images/custom_design_pu_notebook_dubai.webp",
            variants: [
              { name: "Extra Large 15-inch Screen", description: "Custom order for oversized video screens.", price: 200.00 },
              { name: "Button-Controlled Custom Screen", description: "Screen with pre-programmed function buttons.", price: 90.00 },
            ],
          },
        ],
      },
      "Video Brochure Folder": {
        items: [
          {
            name: "A4 Video Folder",
            image: "/images/cd_printing_dubai.webp",
            variants: [
              { name: "7-inch Screen in A4 Folder", description: "A4 document folder with an integrated 7-inch video screen.", price: 110.00 },
              { name: "10-inch Screen in A4 Folder", description: "A4 folder with a large 10-inch video screen.", price: 150.00 },
            ],
          },
          {
            name: "Custom Video Folder",
            image: "/images/Home Wallpaper.webp",
            variants: [
              { name: "Tri-Fold Video Folder", description: "Three-panel folder with a 5-inch screen.", price: 85.00 },
              { name: "Die-Cut Pocket Video Folder", description: "Custom shape folder with internal pockets.", price: 95.00 },
            ],
          },
        ],
      },
    },
    popularProducts: [
      { name: "7-Inch HD Video Card", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
      { name: "Luxury Video Gift Box (7 Inch)", image: "/images/Folders.webp" },
      { name: "A4 Video Folder with Pockets", image: "/images/custom_design_pu_notebook_dubai.webp" },
    ],
  },
};