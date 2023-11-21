import Dashboard from "../components/admin/Dashboard";
import HeroPage from "../components/customer/HeroPage";
import ProductList from "../features/adminpage/ProductsList";

export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/productlist",
    element: <ProductList />,
  },
];
