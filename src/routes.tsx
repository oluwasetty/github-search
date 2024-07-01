import { Search } from "./pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <></>,
    isActive: false
  },
  {
    name: "Search",
    path: "/search",
    element: <Search />,
    isActive: true
  }
];

export default routes;
