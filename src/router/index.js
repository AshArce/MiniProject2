import Dashboard from "../components/admin/Dashboard";
import HeroPage from "../components/customer/HeroPage";

export const routes = [
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
];
