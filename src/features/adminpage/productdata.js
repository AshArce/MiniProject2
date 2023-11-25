// productsData.js


 const sampleProducts = [

  {
    id: 1,
    name: "Nike Blazer Mids",
    category: ["Shoes", "Sneakers"],
    status: "In-stock",
    stocks: "145",
    date: "2023-11-08",
    image: "images/shoes/product-image-1.jpg",
    price: "1200.00",
    salesData: "50",
    cart: true,
  },
  {
    id: 2,
    name: "Supreme Box Logo",
    category: ["Tops", "T-Shirt"],
    status: "In-stock",
    stocks: "14",
    date: "2023-01-09",
    image: "images/shoes/supremeboxlog.jpg",
    price: "2900.00",
    salesData: "35",

    cart: true,
  },
  {
    id: 3,
    name: "Ribbed Top",
    category: ["Tops", "Crop Top"],
    status: "Out of Stock",
    stocks: "0",
    date: "2023-05-12",
    image: "images/shoes/ribbedtop.jpg",
    price: "650.00",
    salesData: "50",
    cart: true,
  },
  {
    id: 4,
    name: "Vintage Look Sandals",
    category: ["Shoes", "Sandals"],
    status: "Out of Stock",
    stocks: "0",
    date: "2023-01-14",
    image: "images/shoes/vintagelooksandals.jpg",
    price: "999.25",
    salesData: "78",
    cart: false,
  },
  {
    id: 5,
    name: "Pink Crop Top",
    category: ["Tops", "Crop Top"],
    status: "In-stock",
    stocks: "15",
    date: "2023-02-06",
    image: "images/shoes/pinkcroptop.jpg",
    price: "205.36",
    salesData: "10",
    cart: true,
  },
  {
    id: 6,
    name: "Nike Air Max1",
    category: ["Shoes", "Sneakers"],
    status: "In-stock",
    stocks: "5",
    date: "2023-11-15",
    image: "images/shoes/nikeair.jpg",
    price: "205.36",
    salesData: "20",
    cart: true,
  },
  {
    id: 7,
    name: "Round Neck Shirt",
    category: ["Tops", "T-Shirt"],
    status: "In-stock",
    stocks: "1",
    date: "2023-07-24",
    image: "images/shoes/rneck.jpg",
    price: "205.36",
    salesData: "90",
    cart: true,
  },
  {
    id: 8,
    name: "Flare Pants",
    category: ["Bottoms", "Pants"],
    status: "Out of Stock",
    stocks: "0",
    date: "2023-11-27",
    image: "images/shoes/flare.jpg",
    price: "205.36",
    salesData: "110",
    cart: true,
  },
  {
    id: 9,
    name: "Flare Jeans",
    category: ["Bottoms", "Pants"],
    status: "In-stock",
    stocks: "105",
    date: "2023-08-09",
    image: "images/shoes/fjeans.jpg",
    price: "205.36",
    salesData: "60",
    cart: true,
  },
  {
    id: 10,
    name: "Cargo Shorts",
    category: ["Bottoms", "Shorts"],
    status: "In-stock",
    stocks: "11",
    date: "2023-04-24",
    image: "images/shoes/cargoshorts.jpg",
    price: "205.36",
    salesData: "80",
    cart: true,
  },
  {
    id: 11,
    name: "Polo Shirt",
    category: ["Tops", "T-Shirt"],
    status: "In-stock",
    stocks: "109",
    date: "2023-12-25",
    image: "images/shoes/polo.jpg",
    price: "205.36",
    salesData: "5",
    cart: true,
  },
  {
    id: 12,
    name: "Brown Boots",
    category: ["Shoes", "Boots"],
    status: "Out of Stock",
    stocks: "0",
    date: "2023-09-21",
    image: "images/shoes/boots.jpg",
    price: "205.36",
    salesData: "150",
    cart: true,
  },
];


const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount);
};

sampleProducts.forEach(product => {
  // Convert price and salesData to numbers with additional checks
  product.price = parseFloat(product.price) || 0;
  product.salesData = parseFloat(product.salesData) || 0;

  // Calculate totalSales
  product.totalSales = product.price * product.salesData || 0;
});

// Log the totalSales for each product
sampleProducts.forEach(product => {
  console.log(`Total sales for product ${product.id}: ${product.totalSales}`);
});

const calculateOverallTotalSales = (products) => {
  return products.reduce((acc, product) => {
    return acc + product.totalSales;
  }, 0);
};

const overallTotalSales = calculateOverallTotalSales(sampleProducts); // Corrected line
console.log(`Overall Total Sales: ${overallTotalSales}`);
//------------------REVENUE------------------//


//------------------ORDERS-------------------//
const productOrders = (product) => {
  const salesData = parseFloat(product.salesData) || 0;
  return salesData;
};

const calculateOverallOrders = (products) => {
  return products.reduce((acc, product) => {
    return acc + productOrders(product);
  }, 0);
};

const overallOrders = calculateOverallOrders(sampleProducts);
console.log(`Overall Total Orders: ${overallOrders}`);
//------------------ORDERS-------------------//


//------------------SOLD-------------------//
const soldProducts = (products) => {
  return products.reduce((acc, product) => {
    return acc + productOrders(product);
  }, 0);
};

const overallSoldProducts = soldProducts(sampleProducts);
console.log(`Products Sold: ${overallSoldProducts}`);
//------------------SOLD-------------------//

export { sampleProducts, calculateOverallTotalSales, calculateOverallOrders, soldProducts, };
