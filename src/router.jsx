import { createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router