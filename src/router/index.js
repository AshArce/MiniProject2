import Dashboard from "../features/adminpage/Dashboard";
import HeroPage from "../components/customer/HeroPage";

import Categories from "../components/admin/Categories";
import ProductList from "../features/adminpage/ProductList";

import ShoppingCart from "../components/customer/ShopingCart";
import AllProducts from "../features/customerpage/AllProducts";
import ShopingCart from "../components/customer/ShopingCart";

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
    element: <ShopingCart />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
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
