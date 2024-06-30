import { Home } from "./pages";

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    isActive: true
  },
  {
    name: "Other Page",
    path: "/other-page",
    element: <></>,
    isActive: false
  }
];

export default routes;
