const PRODUCTS = [
  {
    id: 101,
    name: "Wireless Noise-Canceling Headphones",
    photo: "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg",
    price: 1999,
    description: "Over-ear wireless headphones with active noise cancellation and 30-hour battery life.",
    category: "Electronics"
  },
  {
    id: 102,
    name: "Android Smartphone (6.5-inch)",
    photo: "https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg",
    price: 14999,
    description: "6.5-inch display, 5000mAh battery, 128GB storage, dual camera.",
    category: "Electronics"
  },
  {
    id: 103,
    name: "Water-Resistant Laptop Backpack",
    photo: "https://images.pexels.com/photos/6107428/pexels-photo-6107428.jpeg",
    price: 1499,
    description: "Lightweight backpack with padded laptop compartment and multiple pockets.",
    category: "Fashion"
  },
  {
    id: 104,
    name: "Men's Casual Sneakers",
    photo: "https://images.pexels.com/photos/31507738/pexels-photo-31507738.jpeg",
    price: 2199,
    description: "Comfortable everyday sneakers with breathable fabric and rubber sole.",
    category: "Fashion"
  },
  {
    id: 105,
    name: "Women's Cotton Kurti",
    photo: "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg",
    price: 999,
    description: "Soft cotton kurti suitable for daily wear and office use.",
    category: "Fashion"
  },
  {
    id: 106,
    name: "Fitness Smartwatch",
    photo: "https://images.pexels.com/photos/30385640/pexels-photo-30385640.jpeg",
    price: 3499,
    description: "Heart-rate monitor, step tracking, sleep analysis, water resistant.",
    category: "Electronics"
  },
  {
    id: 107,
    name: "Ergonomic Office Chair",
    photo: "https://images.pexels.com/photos/31726674/pexels-photo-31726674.jpeg",
    price: 6999,
    description: "Adjustable ergonomic chair with lumbar support for long work hours.",
    category: "Home"
  },
  {
    id: 108,
    name: "Ceramic Coffee Mug (350ml)",
    photo: "https://images.pexels.com/photos/4347597/pexels-photo-4347597.jpeg",
    price: 299,
    description: "Durable ceramic mug suitable for hot and cold beverages.",
    category: "Home"
  },

  /* ---------- NEW PRODUCTS ---------- */

  // {
  //   id: 109,
  //   name: "Bluetooth Portable Speaker",
  //   photo: "https://images.pexels.com/photos/34241799/pexels-photo-34241799.jpeg",
  //   price: 1799,
  //   description: "Compact Bluetooth speaker with deep bass and 10-hour playtime.",
  //   category: "Electronics"
  // },
  // {
  //   id: 110,
  //   name: "USB-C Fast Charger",
  //   photo: "https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg",
  //   price: 599,
  //   description: "Fast charging USB-C wall adapter with over-voltage protection.",
  //   category: "Electronics"
  // },
  // {
  //   id: 111,
  //   name: "Men's Analog Wrist Watch",
  //   photo: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  //   price: 2499,
  //   description: "Classic analog watch with leather strap.",
  //   category: "Fashion"
  // },
  // {
  //   id: 112,
  //   name: "Women's Handbag",
  //   photo: "https://images.pexels.com/photos/23223851/pexels-photo-23223851.jpeg",
  //   price: 1899,
  //   description: "Stylish handbag with spacious compartments.",
  //   category: "Fashion"
  // },
  // {
  //   id: 113,
  //   name: "Non-Stick Frying Pan",
  //   photo: "https://images.pexels.com/photos/18725258/pexels-photo-18725258.jpeg",
  //   price: 899,
  //   description: "Durable non-stick pan suitable for everyday cooking.",
  //   category: "Home"
  // },
  // {
  //   id: 114,
  //   name: "Electric Kettle (1.5L)",
  //   photo: "https://images.pexels.com/photos/8879615/pexels-photo-8879615.jpeg",
  //   price: 1299,
  //   description: "Quick-boil electric kettle with auto shut-off.",
  //   category: "Home"
  // },
  // {
  //   id: 115,
  //   name: "Yoga Mat",
  //   photo: "https://images.pexels.com/photos/4325460/pexels-photo-4325460.jpeg",
  //   price: 699,
  //   description: "Anti-slip yoga mat with cushioned support.",
  //   category: "Sports"
  // },
  // {
  //   id: 116,
  //   name: "Dumbbell Set ",
  //   photo: "https://images.pexels.com/photos/6550849/pexels-photo-6550849.jpeg",
  //   price: 1999,
  //   description: "Home workout dumbbell set with adjustable weights.",
  //   category: "Sports"
  // },
  // {
  //   id: 117,
  //   name: "Men's Cotton T-Shirt",
  //   photo: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg",
  //   price: 499,
  //   description: "Soft cotton t-shirt for daily wear.",
  //   category: "Fashion"
  // },
  // {
  //   id: 118,
  //   name: "Women's Running Shoes",
  //   photo: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  //   price: 2599,
  //   description: "Lightweight running shoes with shock absorption.",
  //   category: "Fashion"
  // },
  // {
  //   id: 119,
  //   name: "LED Table Lamp",
  //   photo: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
  //   price: 899,
  //   description: "Adjustable LED lamp with eye-protection mode.",
  //   category: "Home"
  // },
  // {
  //   id: 120,
  //   name: "Wireless Mouse",
  //   photo: "https://images.pexels.com/photos/13870516/pexels-photo-13870516.jpeg",
  //   price: 699,
  //   description: "Ergonomic wireless mouse with precision tracking.",
  //   category: "Electronics"
  // },
  // {
  //   id: 121,
  //   name: "Mechanical Keyboard",
  //   photo: "https://images.pexels.com/photos/24449067/pexels-photo-24449067.jpeg",
  //   price: 3499,
  //   description: "RGB mechanical keyboard with tactile switches.",
  //   category: "Electronics"
  // },
  // {
  //   id: 122,
  //   name: "Power Bank (20000mAh)",
  //   photo: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg",
  //   price: 1999,
  //   description: "High-capacity power bank with fast charging.",
  //   category: "Electronics"
  // },
  // {
  //   id: 123,
  //   name: "Wall Clock",
  //   photo: "https://images.pexels.com/photos/11066021/pexels-photo-11066021.jpeg",
  //   price: 599,
  //   description: "Minimalist wall clock for home or office.",
  //   category: "Home"
  // },
  // {
  //   id: 124,
  //   name: "Bedsheet Set (Double)",
  //   photo: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg",
  //   price: 1499,
  //   description: "Soft microfiber bedsheet with pillow covers.",
  //   category: "Home"
  // },
  // {
  //   id: 125,
  //   name: "Face Moisturizer",
  //   photo: "https://images.pexels.com/photos/27393235/pexels-photo-27393235.jpeg",
  //   price: 399,
  //   description: "Hydrating moisturizer suitable for all skin types.",
  //   category: "Beauty"
  // },
  // {
  //   id: 126,
  //   name: "Hair Dryer",
  //   photo: "https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg",
  //   price: 1299,
  //   description: "Compact hair dryer with heat control.",
  //   category: "Beauty"
  // },
  // {
  //   id: 127,
  //   name: "Fiction Novel",
  //   photo: "https://images.pexels.com/photos/17192492/pexels-photo-17192492.jpeg",
  //   price: 349,
  //   description: "Bestselling fiction novel paperback edition.",
  //   category: "Books"
  // },
  // {
  //   id: 128,
  //   name: "Self-Help Book",
  //   photo: "https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg",
  //   price: 299,
  //   description: "Motivational self-help book for personal growth.",
  //   category: "Books"
  // },
  // {
  //   id: 129,
  //   name: "Sunglasses",
  //   photo: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
  //   price: 899,
  //   description: "UV-protected stylish sunglasses.",
  //   category: "Fashion"
  // },
  // {
  //   id: 130,
  //   name: "Travel Trolley Bag",
  //   photo: "https://images.pexels.com/photos/13040727/pexels-photo-13040727.jpeg",
  //   price: 4999,
  //   description: "Durable trolley suitcase with spinner wheels.",
  //   category: "Fashion"
  // },
  // {
  //   id: 131,
  //   name: "Air Fryer",
  //   photo: "https://images.pexels.com/photos/29461935/pexels-photo-29461935.jpeg",
  //   price: 6999,
  //   description: "Oil-free cooking air fryer with digital controls.",
  //   category: "Home"
  // },
  // {
  //   id: 132,
  //   name: "Wireless Earbuds",
  //   photo: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg",
  //   price: 2499,
  //   description: "True wireless earbuds with noise isolation.",
  //   category: "Electronics"
  // },
  // {
  //   id: 133,
  //   name: "Smart LED Bulb",
  //   photo: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg",
  //   price: 499,
  //   description: "WiFi-enabled smart bulb with app control.",
  //   category: "Home"
  // },
  // {
  //   id: 134,
  //   name: "Office Desk",
  //   photo: "https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg",
  //   price: 5499,
  //   description: "Modern office desk with storage space.",
  //   category: "Home"
  // },
  // {
  //   id: 135,
  //   name: "Gaming Mouse Pad",
  //   photo: "https://images.pexels.com/photos/6417/apple-desk-office-technology-6417.jpg",
  //   price: 399,
  //   description: "Large mouse pad with smooth surface.",
  //   category: "Electronics"
  // },
  // {
  //   id: 136,
  //   name: "Water Bottle (1L)",
  //   photo: "https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg",
  //   price: 299,
  //   description: "BPA-free reusable water bottle.",
  //   category: "Sports"
  // },
  // {
  //   id: 137,
  //   name: "Men's Formal Shirt",
  //   photo: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg",
  //   price: 1299,
  //   description: "Slim-fit formal shirt for office wear.",
  //   category: "Fashion"
  // },
  // {
  //   id: 138,
  //   name: "Women's Sandals",
  //   photo: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
  //   price: 1599,
  //   description: "Comfortable flat sandals for daily use.",
  //   category: "Fashion"
  // },
  // {
  //   id: 139,
  //   name: "Vacuum Cleaner",
  //   photo: "https://images.pexels.com/photos/4107274/pexels-photo-4107274.jpeg",
  //   price: 4499,
  //   description: "Powerful vacuum cleaner for home cleaning.",
  //   category: "Home"
  // },
  // {
  //   id: 140,
  //   name: "Laptop Stand",
  //   photo: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg",
  //   price: 899,
  //   description: "Adjustable aluminum laptop stand.",
  //   category: "Electronics"
  // },
  // {
  //   id: 141,
  //   name: "Perfume (100ml)",
  //   photo: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
  //   price: 1999,
  //   description: "Long-lasting fragrance for daily use.",
  //   category: "Beauty"
  // },
  // {
  //   id: 142,
  //   name: "Makeup Brush Set",
  //   photo: "https://images.pexels.com/photos/19577587/pexels-photo-19577587.jpeg",
  //   price: 799,
  //   description: "Professional makeup brush set.",
  //   category: "Beauty"
  // },
  // {
  //   id: 143,
  //   name: "Cooking Knife Set",
  //   photo: "https://images.pexels.com/photos/16443132/pexels-photo-16443132.jpeg",
  //   price: 1799,
  //   description: "Stainless steel kitchen knife set.",
  //   category: "Home"
  // },
  // {
  //   id: 144,
  //   name: "Bluetooth Keyboard",
  //   photo: "https://images.pexels.com/photos/34928007/pexels-photo-34928007.jpeg",
  //   price: 1499,
  //   description: "Slim Bluetooth keyboard for multiple devices.",
  //   category: "Electronics"
  // },
  // {
  //   id: 145,
  //   name: "Floor Mat",
  //   photo: "https://images.pexels.com/photos/5840868/pexels-photo-5840868.jpeg",
  //   price: 699,
  //   description: "Anti-slip floor mat for home use.",
  //   category: "Home"
  // },
  // {
  //   id: 146,
  //   name: "Resistance Band Set",
  //   photo: "https://images.pexels.com/photos/6740821/pexels-photo-6740821.jpeg",
  //   price: 499,
  //   description: "Workout resistance bands for strength training.",
  //   category: "Sports"
  // },
  // {
  //   id: 147,
  //   name: "Desk Organizer",
  //   photo: "https://images.pexels.com/photos/19238352/pexels-photo-19238352.jpeg",
  //   price: 399,
  //   description: "Multi-compartment desk organizer.",
  //   category: "Home"
  // },
  // {
  //   id: 148,
  //   name: "Wireless Charging Pad",
  //   photo: "https://images.pexels.com/photos/7952558/pexels-photo-7952558.jpeg",
  //   price: 999,
  //   description: "Fast wireless charger for smartphones.",
  //   category: "Electronics"
  // },
  // {
  //   id: 149,
  //   name: "Notebook Set",
  //   photo: "https://images.pexels.com/photos/159865/notepad-pencil-green-black-159865.jpeg",
  //   price: 299,
  //   description: "Pack of 3 ruled notebooks.",
  //   category: "Books"
  // },
  // {
  //   id: 150,
  //   name: "Table Fan",
  //   photo: "https://images.pexels.com/photos/5850342/pexels-photo-5850342.jpeg",
  //   price: 1899,
  //   description: "High-speed table fan with oscillation.",
  //   category: "Home"
  // }
];

export default PRODUCTS;
