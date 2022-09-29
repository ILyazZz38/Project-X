import { Games } from "./View/Games";
import { Library } from "./View/Library";
import { Home } from "./View/Home";
import { Account } from "./View/Account";

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
    },
    {
        path: '/Account',
        element: <Account />
    }
];

export default AppRoutes;
