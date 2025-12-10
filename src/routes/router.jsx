import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import GameDetailsPage from "../pages/GameDetailsPage";
import LoadingAnimation from "../components/LoadingAnimation";
import AccountLayout from "../Layout/AccountLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../gameData.json"),
        hydrateFallbackElement: <LoadingAnimation></LoadingAnimation>,
      },
      {
        path: "/all-games",
        Component: AllGames,
        loader: () => fetch("../gameData.json"),
        hydrateFallbackElement: <LoadingAnimation></LoadingAnimation>,
      },
      {
        path: "/game-details/:id",
        Component: GameDetailsPage,
        loader: () => fetch("../gameData.json"),
        hydrateFallbackElement: <LoadingAnimation></LoadingAnimation>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center min-h-screen items-center">
        <h1>404! error</h1>
      </div>
    ),
  },
]);

export default router;
