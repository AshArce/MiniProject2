// Import necessary dependencies
import Dashboard from "../features/adminpage/Dashboard";
import HeroPage from "../features/customerpage/HeroPage";
import Categories from "../components/admin/Categories";
import ProductList from "../features/adminpage/ProductList";
import EditProduct from "../components/admin/EditProduct";
import AllProducts from "../features/customerpage/AllProducts";

import Login from "../components/customer/Login";
import ShopingCart from "../components/customer/ShopingCart";

// ... (rest of the code)

// Define routes array
export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/cart",
    element: <ShopingCart />, // Corrected the import
  },
  {
    path: "/login",
    element: <Login />, // Corrected the import
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
    path: "/admin/edit",
    element: <EditProduct />,
  },
  {
    path: "/adminpage/categories",
    element: <Categories />,
  },
];

// ... (rest of the code)
