import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../gameData.json"),
      },
      {
        path: "/all-games",
        Component: AllGames,
        loader: () => fetch("../gameData.json"),
      },
    ],
  },
]);

export default router;
