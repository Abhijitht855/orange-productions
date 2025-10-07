// components/DropdownMenuData.tsx
export interface SubItem {
  name: string;
  image?: string; // optional image for hover preview
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
          { name: "Notebook", image: "/images/Folders.webp" },
          { name: "Binding", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Business Cards", image: "/images/cd_printing_dubai.webp" },
          { name: "Envelopes", image: "/images/Home Wallpaper.webp" },
          { name: "Folder", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Notepad", image: "/images/Folders.webp" },
          { name: "Certificate", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Handtags", image: "/images/cd_printing_dubai.webp" }
        ],
      },
      "Brochures And Flyers": {
        items: [
          { name: "Brochure Printing", image: "/images/Home Wallpaper.webp" },
          { name: "Booklets", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Catalogues", image: "/images/Folders.webp" },
          { name: "Flyers", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Seals": {
        items: [
          { name: "Self Ink Stamps", image: "/images/cd_printing_dubai.webp" },
          { name: "Wax Seal", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Voucher Books": {
        items: [
          { name: "NCR Books", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Computerized Invoice", image: "/images/Folders.webp" }
        ],
      },
      "Stickers": {
        items: [
          { name: "Die Cut Stickers", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Print & Cut Stickers", image: "/images/cd_printing_dubai.webp" },
          { name: "Transparent Stickers", image: "/images/Home Wallpaper.webp" },
          { name: "Epoxy Stickers", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Promotion Items": {
        items: [
          { name: "Scratch And Win Coupons", image: "/images/Folders.webp" },
          { name: "Tent Card", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Table Mat", image: "/images/cd_printing_dubai.webp" },
          { name: "Danglers", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Gift Box": {
        items: [
          { name: "Corrugated Boxes", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Wooden Boxes", image: "/images/Folders.webp" },
          { name: "Pouches", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Tissue Boxes (Leather And Acrylic)", image: "/images/cd_printing_dubai.webp" },
          { name: "Luxury Leather Boxes", image: "/images/Home Wallpaper.webp" },
          { name: "Corporate Gift Box", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Custom Gift Boxes", image: "/images/Folders.webp" }
        ],
      }
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
          { name: "Reverse Cut Frosted Stickers", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Standard Cut Frosted Sticker", image: "/images/cd_printing_dubai.webp" },
          { name: "Printable Frosted Sticker", image: "/images/Home Wallpaper.webp" },
          { name: "Plain Frosted Sticker", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Window Branding": {
        items: [
          { name: "High Quality Vinyl Sticker", image: "/images/Folders.webp" },
          { name: "High Quality Graphics", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "One Way Vision Sticker", image: "/images/cd_printing_dubai.webp" },
          { name: "Window Films", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Wall Branding": {
        items: [
          { name: "Vinyl Lettering", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Wall Stickers", image: "/images/Folders.webp" },
          { name: "Wall Decal", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Wall Frames": {
        items: [
          { name: "Canvas Frames", image: "/images/cd_printing_dubai.webp" },
          { name: "Wooden Frames", image: "/images/Home Wallpaper.webp" },
          { name: "Acrylic Frame", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Metal Frame", image: "/images/Folders.webp" }
        ],
      },
      "Display Stand": {
        items: [
          { name: "3D Display Stand", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Counter Top Stand", image: "/images/cd_printing_dubai.webp" }
        ],
      },
      "Vehicle Branding": {
        items: [
          { name: "Car Branding", image: "/images/Home Wallpaper.webp" },
          { name: "Truck Branding", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Magnet Sheet": {
        items: [
          { name: "Car Magnet", image: "/images/Folders.webp" },
          { name: "Fridge Magnet", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Wall Magnet", image: "/images/cd_printing_dubai.webp" }
        ],
      }
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
          { name: "3D Signage", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Backlit Signage", image: "/images/cd_printing_dubai.webp" },
          { name: "Flex Signage", image: "/images/Home Wallpaper.webp" },
          { name: "Frontlit Signage", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Push Through Letter Signage", image: "/images/Folders.webp" },
          { name: "Neon Signage", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Name Plates": {
        items: [
          { name: "Metal Name Plates", image: "/images/cd_printing_dubai.webp" },
          { name: "Wooden Name Plates", image: "/images/Home Wallpaper.webp" },
          { name: "Table Top Signage", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Acrylic Signage", image: "/images/Folders.webp" }
        ],
      },
      "Light Box": {
        items: [
          { name: "Fabric Light Box", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Poster Light Box", image: "/images/cd_printing_dubai.webp" },
          { name: "Acrylic Signage Board", image: "/images/Home Wallpaper.webp" },
          { name: "Flex Face Sign (Light Box)", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Self Standing Letters": {
        items: [
          { name: "Metal Letters", image: "/images/Folders.webp" },
          { name: "Wooden Letters", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Acrylic Letters", image: "/images/cd_printing_dubai.webp" },
          { name: "Forex Letters", image: "/images/Home Wallpaper.webp" },
          { name: "Foamboard Letters", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Direction Signage": {
        items: [
          { name: "Wall Mounted Signage", image: "/images/Folders.webp" },
          { name: "Hanging Signage", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Direction Signage", image: "/images/cd_printing_dubai.webp" },
          { name: "Self Standing Signage", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Labels": {
        items: [
          { name: "PVC/Acrylic Label", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Metal Label", image: "/images/Folders.webp" },
          { name: "Wooden Label", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Acrylic Label", image: "/images/cd_printing_dubai.webp" }
        ],
      },
      "Safety Signage": {
        items: [
          { name: "Floor Sign/Signage", image: "/images/Home Wallpaper.webp" },
          { name: "Self-Standing Sign", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      }
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
          { name: "Teardrop Flag", image: "/images/Home Wallpaper.webp" },
          { name: "Curved Top Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "L-Shape Flag", image: "/images/Folders.webp" },
          { name: "Advertising Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Telescopic Flag", image: "/images/cd_printing_dubai.webp" }
        ],
      },
      "Flag Base": {
        items: [
          { name: "Water Base", image: "/images/Home Wallpaper.webp" },
          { name: "Cross Base", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Concrete Base", image: "/images/Folders.webp" },
          { name: "Plastic Coated Concrete Base", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Office Flags": {
        items: [
          { name: "Table Flag", image: "/images/cd_printing_dubai.webp" },
          { name: "Table Flags - Royal", image: "/images/Home Wallpaper.webp" },
          { name: "Conference Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Conference Hanging Flag", image: "/images/Folders.webp" }
        ],
      },
      "Outdoor Flags": {
        items: [
          { name: "Stadium Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Wall Mounted Flags", image: "/images/cd_printing_dubai.webp" },
          { name: "Hosting Flag", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Event Gear": {
        items: [
          { name: "Pole Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Hand Flag", image: "/images/Folders.webp" },
          { name: "Back Pack Flag", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Finish Line Flag", image: "/images/cd_printing_dubai.webp" },
          { name: "Fan Scarf Flag", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Decorative Flags": {
        items: [
          { name: "Desert Car Flag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Toothpick Flags", image: "/images/Folders.webp" },
          { name: "Bunting Flags", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Dashboard Flag", image: "/images/cd_printing_dubai.webp" },
          { name: "Pennant Flags", image: "/images/Home Wallpaper.webp" }
        ],
      }
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
          { name: "Rollup Stand", image: "/images/cd_printing_dubai.webp" },
          { name: "X Banner Stand", image: "/images/Home Wallpaper.webp" },
          { name: "Broad Base Roll Up Stand", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Classic Backlit Standee", image: "/images/Folders.webp" },
          { name: "Barricade", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Cut Out Standee", image: "/images/cd_printing_dubai.webp" },
          { name: "Toblerone Frame", image: "/images/Home Wallpaper.webp" },
          { name: "Popout Banner/Spring A Board", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Backdrops": {
        items: [
          { name: "Adjustable Backdrop Stands", image: "/images/Folders.webp" },
          { name: "Tension Fabric Stand Straight", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Tension Fabric Stand Curved", image: "/images/cd_printing_dubai.webp" },
          { name: "Straight Pop Up", image: "/images/Home Wallpaper.webp" },
          { name: "Fabric Straight", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Wooden Backdrop", image: "/images/Folders.webp" },
          { name: "Pop Up", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Photo Booth", image: "/images/cd_printing_dubai.webp" },
          { name: "LED Screen", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Exhibitions & Event": {
        items: [
          { name: "Outdoor Umbrella", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Tent/Gazebo", image: "/images/Folders.webp" },
          { name: "Promotional Table", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Table Cover/Table Cloth", image: "/images/cd_printing_dubai.webp" },
          { name: "Exhibition Counter", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Event Booth": {
        items: [
          { name: "Panel/Seamless Branding", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Modular Backlit Booth", image: "/images/Folders.webp" },
          { name: "Island Backlit Shell Scheme", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Event Props": {
        items: [
          { name: "Social Media Frames", image: "/images/cd_printing_dubai.webp" },
          { name: "Hashtags", image: "/images/Home Wallpaper.webp" },
          { name: "Giant Cheques", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Party Props", image: "/images/Folders.webp" },
          { name: "Easel Stand", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Metal Brochure Stand", image: "/images/cd_printing_dubai.webp" }
        ],
      }
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
          { name: "Headphones & Speaker", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Powerbanks", image: "/images/cd_printing_dubai.webp" },
          { name: "Wireless Charger", image: "/images/Home Wallpaper.webp" },
          { name: "USB Flash Drive", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Mousepads", image: "/images/Folders.webp" }
        ],
      },
      "Drinkware": {
        items: [
          { name: "Tumblers", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Ceramic Mug", image: "/images/cd_printing_dubai.webp" },
          { name: "Water Bottle & Infuser", image: "/images/Home Wallpaper.webp" },
          { name: "Travel Mug", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" }
        ],
      },
      "Shopping & Promotion": {
        items: [
          { name: "Jute Bags", image: "/images/Folders.webp" },
          { name: "Cotton Bags", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Non Woven Bags", image: "/images/cd_printing_dubai.webp" },
          { name: "Customised Shopping Bags", image: "/images/Home Wallpaper.webp" },
          { name: "String Bag", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Backpacks", image: "/images/Folders.webp" },
          { name: "Laptop Bags", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Stationery Items": {
        items: [
          { name: "Keychain", image: "/images/cd_printing_dubai.webp" },
          { name: "Clock", image: "/images/Home Wallpaper.webp" },
          { name: "Card Holder", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Mementos & Awards", image: "/images/Folders.webp" },
          { name: "Metal Pen", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Plastic Pen", image: "/images/cd_printing_dubai.webp" },
          { name: "Name Badge", image: "/images/Home Wallpaper.webp" },
          { name: "Notebook", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Ecofriendly Items", image: "/images/Folders.webp" },
          { name: "Organizer", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Apparel & Show Items": {
        items: [
          { name: "Jersey", image: "/images/cd_printing_dubai.webp" },
          { name: "Caps", image: "/images/Home Wallpaper.webp" },
          { name: "Safety Vest", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Wristbands", image: "/images/Folders.webp" },
          { name: "Lanyards", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "ID Card And Badge", image: "/images/cd_printing_dubai.webp" },
          { name: "Fridge Magnet", image: "/images/Home Wallpaper.webp" },
          { name: "Hoodie", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "Anti Stress Ball", image: "/images/Folders.webp" },
          { name: "Ribbons", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      }
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
          { name: "5 Inch Video Brochure Card", image: "/images/Folders.webp" },
          { name: "7 Inch Video Brochure Card", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "10 Inch Video Brochure Card", image: "/images/cd_printing_dubai.webp" },
          { name: "Customised Size", image: "/images/Home Wallpaper.webp" }
        ],
      },
      "Video Brochure Box": {
        items: [
          { name: "5 Inch Video Brochure Box", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "7 Inch Video Brochure Box", image: "/images/Folders.webp" },
          { name: "10 Inch Video Brochure Box", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Customised Size", image: "/images/cd_printing_dubai.webp" }
        ],
      },
      "Video Brochure Screen": {
        items: [
          { name: "5 Inch Screen", image: "/images/Home Wallpaper.webp" },
          { name: "7 Inch Screen", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
          { name: "10 Inch Screen", image: "/images/Folders.webp" },
          { name: "Customised", image: "/images/custom_design_pu_notebook_dubai.webp" }
        ],
      },
      "Video Brochure Folder": {
        items: [
          { name: "A4 Video Folder", image: "/images/cd_printing_dubai.webp" },
          { name: "Custom Video Folder", image: "/images/Home Wallpaper.webp" }
        ]
      }
    },
    popularProducts: [
      { name: "7-Inch HD Video Card", image: "/images/photo-1601924994987-69e26d50dc26.jpeg" },
      { name: "Luxury Video Gift Box (7 Inch)", image: "/images/Folders.webp" },
      { name: "A4 Video Folder with Pockets", image: "/images/custom_design_pu_notebook_dubai.webp" },
    ],
  }
};