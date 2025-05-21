import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../compoents/Navbar";
import Mountain from "../pages/Mountain"
import Animals from "../pages/Animals";
import Forest from "../pages/Forest";
import Sea from "../pages/Sea"
import Space from "../pages/Space";

const LayOut = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {path: "/", element: <Mountain/>},
      {path: "/animals", element: <Animals/>},
      {path: "/forest", element: <Forest/>},
      {path: "/sea", element: <Sea/>},
      {path: "/space", element: <Space/>},
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
