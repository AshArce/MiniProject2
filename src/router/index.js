import Dashboard from "../features/adminpage/Dashboard"
import HeroPage from "../components/customer/HeroPage";
import ProductList from "../features/adminpage/ProductsList";

export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/features/adminpage/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/features/adminpage/productlist",
    element: <ProductList />,
  },
];
