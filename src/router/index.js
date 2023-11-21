import Dashboard from "../features/adminpage/Dashboard"
import HeroPage from "../components/customer/HeroPage";
import ProductList from "../features/adminpage/ProductList";

export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "admin/productlist",
    element: <ProductList />,
  },
];
