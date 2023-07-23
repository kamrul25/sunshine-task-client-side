import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <h1>Hi I am Kamrul</h1>,
      },
    ],
  },
]);

export default router;
