// components/DropdownMenuData.tsx
export interface SubItem {
  name: string;
  image?: string; // optional image for hover preview
}

export interface Product {
  name: string;
  image: string;
  price?: string;
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
          { name: "Business Cards", image: "/images/business-cards.jpg" },
          { name: "Envelopes", image: "/images/envelopes.jpg" },
          { name: "Folder" },
          { name: "Notepad" },
          { name: "Certificate" },
          { name: "Handtags" }
        ],
      },
      "Brochures And Flyers": {
        items: [
          { name: "Brochure Printing", image: "/images/brochure.jpg" },
          { name: "Booklets" },
          { name: "Catalogues" },
          { name: "Flyers" }
        ],
      },
      "Seals": {
        items: [
          { name: "Self Ink Stamps" },
          { name: "Wax Seal" }
        ],
      },
      "Voucher Books": {
        items: [
          { name: "NCR Books" },
          { name: "Computerized Invoice" }
        ],
      },
      "Stickers": {
        items: [
          { name: "Die Cut Stickers" },
          { name: "Print & Cut Stickers" },
          { name: "Transparent Stickers" },
          { name: "Epoxy Stickers" }
        ],
      },
      "Promotion Items": {
        items: [
          { name: "Scratch And Win Coupons" },
          { name: "Tent Card" },
          { name: "Table Mat" },
          { name: "Danglers" }
        ],
      },
      "Gift Box": {
        items: [
          { name: "Corrugated Boxes" },
          { name: "Wooden Boxes" },
          { name: "Pouches" },
          { name: "Tissue Boxes (Leather And Acrylic)" },
          { name: "Luxury Leather Boxes" },
          { name: "Corporate Gift Box" },
          { name: "Custom Gift Boxes" }
        ],
      }
    },
    popularProducts: [
      { name: "Premium Business Cards", image: "/images/cd_printing_dubai.webp", price: "$50" },
      { name: "Tri-Fold Deluxe Brochure", image: "/images/cd_printing_dubai.webp", price: "$120" },
      { name: "Custom Corrugated Gift Box", image: "/images/cd_printing_dubai.webp", price: "$12" },
    ],
  },

  "OFFICE BRANDING": {
    categories: {
      "Frosted Sticker": {
        items: [
          { name: "Reverse Cut Frosted Stickers", image: "/images/custom_design_pu_notebook_dubai.webp" },
          { name: "Standard Cut Frosted Sticker" },
          { name: "Printable Frosted Sticker" },
          { name: "Plain Frosted Sticker" }
        ],
      },
      "Window Branding": {
        items: [
          { name: "High Quality Vinyl Sticker" },
          { name: "High Quality Graphics" },
          { name: "One Way Vision Sticker" },
          { name: "Window Films" }
        ],
      },
      "Wall Branding": {
        items: [
          { name: "Vinyl Lettering" },
          { name: "Wall Stickers" },
          { name: "Wall Decal" }
        ],
      },
      "Wall Frames": {
        items: [
          { name: "Canvas Frames" },
          { name: "Wooden Frames" },
          { name: "Acrylic Frame" },
          { name: "Metal Frame" }
        ],
      },
      "Display Stand": {
        items: [
          { name: "3D Display Stand" },
          { name: "Counter Top Stand" }
        ],
      },
      "Vehicle Branding": {
        items: [
          { name: "Car Branding" },
          { name: "Truck Branding" }
        ],
      },
      "Magnet Sheet": {
        items: [
          { name: "Car Magnet" },
          { name: "Fridge Magnet" },
          { name: "Wall Magnet" }
        ],
      }
    },
    popularProducts: [
      { name: "Premium One Way Vision", image: "/images/oneway-vision.png", price: "$60/sqm" },
      { name: "Reverse Cut Frosted Vinyl", image: "/images/frosted-reverse.png", price: "$40/sqm" },
      { name: "Gallery Wrap Canvas Print", image: "/images/canvas-print.png", price: "$150" },
    ],
  },

  "SIGNAGES": {
    categories: {
      "Sign Boards": {
        items: [
          { name: "3D Signage" },
          { name: "Backlit Signage" },
          { name: "Flex Signage" },
          { name: "Frontlit Signage" },
          { name: "Push Through Letter Signage" },
          { name: "Neon Signage" }
        ],
      },
      "Name Plates": {
        items: [
          { name: "Metal Name Plates" },
          { name: "Wooden Name Plates" },
          { name: "Table Top Signage" },
          { name: "Acrylic Signage" }
        ],
      },
      "Light Box": {
        items: [
          { name: "Fabric Light Box" },
          { name: "Poster Light Box" },
          { name: "Acrylic Signage Board" },
          { name: "Flex Face Sign (Light Box)" }
        ],
      },
      "Self Standing Letters": {
        items: [
          { name: "Metal Letters" },
          { name: "Wooden Letters" },
          { name: "Acrylic Letters" },
          { name: "Forex Letters" },
          { name: "Foamboard Letters" }
        ],
      },
      "Direction Signage": {
        items: [
          { name: "Wall Mounted Signage" },
          { name: "Hanging Signage" },
          { name: "Direction Signage" },
          { name: "Self Standing Signage" }
        ],
      },
      "Labels": {
        items: [
          { name: "PVC/Acrylic Label" },
          { name: "Metal Label" },
          { name: "Wooden Label" },
          { name: "Acrylic Label" }
        ],
      },
      "Safety Signage": {
        items: [
          { name: "Floor Sign/Signage" },
          { name: "Self-Standing Sign" }
        ],
      }
    },
    popularProducts: [
      { name: "LED Backlit 3D Acrylic Sign", image: "/images/sign-3d-backlit.png", price: "$400/sqm" },
      { name: "Custom LED Neon Sign", image: "/images/sign-neon.png", price: "$350" },
      { name: "Brushed Steel Engraved Name Plate", image: "/images/name-plate-steel.png", price: "$90" },
    ],
  },

  "FLAGS": {
    categories: {
      "Branding Flags": {
        items: [
          { name: "Teardrop Flag" },
          { name: "Curved Top Flag" },
          { name: "L-Shape Flag" },
          { name: "Advertising Flag" },
          { name: "Telescopic Flag" }
        ],
      },
      "Flag Base": {
        items: [
          { name: "Water Base" },
          { name: "Cross Base" },
          { name: "Concrete Base" },
          { name: "Plastic Coated Concrete Base" }
        ],
      },
      "Office Flags": {
        items: [
          { name: "Table Flag" },
          { name: "Table Flags - Royal" },
          { name: "Conference Flag" },
          { name: "Conference Hanging Flag" }
        ],
      },
      "Outdoor Flags": {
        items: [
          { name: "Stadium Flag" },
          { name: "Wall Mounted Flags" },
          { name: "Hosting Flag" }
        ],
      },
      "Event Gear": {
        items: [
          { name: "Pole Flag" },
          { name: "Hand Flag" },
          { name: "Back Pack Flag" },
          { name: "Finish Line Flag" },
          { name: "Fan Scarf Flag" }
        ],
      },
      "Decorative Flags": {
        items: [
          { name: "Desert Car Flag" },
          { name: "Toothpick Flags" },
          { name: "Bunting Flags" },
          { name: "Dashboard Flag" },
          { name: "Pennant Flags" }
        ],
      }
    },
    popularProducts: [
      { name: "Medium Teardrop Flag Kit", image: "/images/flag-teardrop.png", price: "$120" },
      { name: "Heavy Fillable Water Base", image: "/images/base-water.png", price: "$45" },
      { name: "Backpack Banner System", image: "/images/flag-backpack.png", price: "$85" },
    ],
  },

  "BACKDROPS & EXHIBITION": {
    categories: {
      "Standees": {
        items: [
          { name: "Rollup Stand" },
          { name: "X Banner Stand" },
          { name: "Broad Base Roll Up Stand" },
          { name: "Classic Backlit Standee" },
          { name: "Barricade" },
          { name: "Cut Out Standee" },
          { name: "Toblerone Frame" },
          { name: "Popout Banner/Spring A Board" }
        ],
      },
      "Backdrops": {
        items: [
          { name: "Adjustable Backdrop Stands" },
          { name: "Tension Fabric Stand Straight" },
          { name: "Tension Fabric Stand Curved" },
          { name: "Straight Pop Up" },
          { name: "Fabric Straight" },
          { name: "Wooden Backdrop" },
          { name: "Pop Up" },
          { name: "Photo Booth" },
          { name: "LED Screen" }
        ],
      },
      "Exhibitions & Event": {
        items: [
          { name: "Outdoor Umbrella" },
          { name: "Tent/Gazebo" },
          { name: "Promotional Table" },
          { name: "Table Cover/Table Cloth" },
          { name: "Exhibition Counter" }
        ],
      },
      "Event Booth": {
        items: [
          { name: "Panel/Seamless Branding" },
          { name: "Modular Backlit Booth" },
          { name: "Island Backlit Shell Scheme" }
        ],
      },
      "Event Props": {
        items: [
          { name: "Social Media Frames" },
          { name: "Hashtags" },
          { name: "Giant Cheques" },
          { name: "Party Props" },
          { name: "Easel Stand" },
          { name: "Metal Brochure Stand" }
        ],
      }
    },
    popularProducts: [
      { name: "8ft x 8ft Tension Fabric Backdrop", image: "/images/backdrop-fabric.png", price: "$450" },
      { name: "Premium Broad Base Roll-Up Banner", image: "/images/rollup-premium.png", price: "$150" },
      { name: "Custom Branded Gazebo Tent 3x3m", image: "/images/event-tent.png", price: "$650" },
    ],
  },

  "CORPORATE GIFTS": {
    categories: {
      "Technology": {
        items: [
          { name: "Headphones & Speaker" },
          { name: "Powerbanks" },
          { name: "Wireless Charger" },
          { name: "USB Flash Drive" },
          { name: "Mousepads" }
        ],
      },
      "Drinkware": {
        items: [
          { name: "Tumblers" },
          { name: "Ceramic Mug" },
          { name: "Water Bottle & Infuser" },
          { name: "Travel Mug" }
        ],
      },
      "Shopping & Promotion": {
        items: [
          { name: "Jute Bags" },
          { name: "Cotton Bags" },
          { name: "Non Woven Bags" },
          { name: "Customised Shopping Bags" },
          { name: "String Bag" },
          { name: "Backpacks" },
          { name: "Laptop Bags" }
        ],
      },
      "Stationery Items": {
        items: [
          { name: "Keychain" },
          { name: "Clock" },
          { name: "Card Holder" },
          { name: "Mementos & Awards" },
          { name: "Metal Pen" },
          { name: "Plastic Pen" },
          { name: "Name Badge" },
          { name: "Notebook" },
          { name: "Ecofriendly Items" },
          { name: "Organizer" }
        ],
      },
      "Apparel & Show Items": {
        items: [
          { name: "Jersey" },
          { name: "Caps" },
          { name: "Safety Vest" },
          { name: "Wristbands" },
          { name: "Lanyards" },
          { name: "ID Card And Badge" },
          { name: "Fridge Magnet" },
          { name: "Hoodie" },
          { name: "Anti Stress Ball" },
          { name: "Ribbons" }
        ],
      }
    },
    popularProducts: [
      { name: "Custom Logo Power Bank (10000mAh)", image: "/images/gift-powerbank.png", price: "$25" },
      { name: "Engraved Insulated Tumbler", image: "/images/gift-tumbler.png", price: "$15" },
      { name: "Laser Engraved Metal Pen", image: "/images/gift-metal-pen.png", price: "$10" },
    ],
  },

  "VIDEO BROCHURE": {
    categories: {
      "Video Brochure Card": {
        items: [
          { name: "5 Inch Video Brochure Card" },
          { name: "7 Inch Video Brochure Card" },
          { name: "10 Inch Video Brochure Card" },
          { name: "Customised Size" }
        ],
      },
      "Video Brochure Box": {
        items: [
          { name: "5 Inch Video Brochure Box" },
          { name: "7 Inch Video Brochure Box" },
          { name: "10 Inch Video Brochure Box" },
          { name: "Customised Size" }
        ],
      },
      "Video Brochure Screen": {
        items: [
          { name: "5 Inch Screen" },
          { name: "7 Inch Screen" },
          { name: "10 Inch Screen" },
          { name: "Customised" }
        ],
      },
      "Video Brochure Folder": {
        items: []
      }
    },
    popularProducts: [
      { name: "7-Inch HD Video Card", image: "/images/video-brochure-7in.png", price: "$45" },
      { name: "Luxury Video Gift Box (7 Inch)", image: "/images/video-box-luxury.png", price: "$65" },
      { name: "A4 Video Folder with Pockets", image: "/images/video-folder-a4.png", price: "$50" },
    ],
  }
};