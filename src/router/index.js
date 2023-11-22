// Import necessary dependencies
import Dashboard from "../features/adminpage/Dashboard";

import HeroPage from "../features/customerpage/HeroPage";

import Categories from "../components/admin/Categories";
import ProductList from "../features/adminpage/ProductList";

import AllProducts from "../features/customerpage/AllProducts";
import ShoppingCart from "../components/customer/ShopingCart";

// ... (rest of the code)

// Define routes array
export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/AllProducts",
    element: <AllProducts />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />, // Corrected the import
  },
  {
    path: "/adminpage/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/adminpage/productlist",
    element: <ProductList />,
  },
  {
    path: "/adminpage/Categories",
    element: <Categories />,
  },
];

// ... (rest of the code)
