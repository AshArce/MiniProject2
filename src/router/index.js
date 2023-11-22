import Dashboard from "../features/adminpage/Dashboard";
import HeroPage from "../features/customerpage/HeroPage";

import Categories from "../components/admin/Categories";
import ProductList from "../features/adminpage/ProductList";

export const routes = [
  {
    path: "/",
    element: <HeroPage />,
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
