import Dashboard from "../features/adminpage/Dashboard";
import HeroPage from "../components/customer/HeroPage";
import ProductList from "../features/adminpage/ProductsList";
import Categories from "../components/admin/Categories";

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
