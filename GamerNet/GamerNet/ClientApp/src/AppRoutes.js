import { Games } from "./View/Games";
import { Library } from "./View/Library";
import { Home } from "./View/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/Games',
      element: <Games />
  },
  {
    path: '/My-Library',
      element: <Library />
  }
];

export default AppRoutes;
