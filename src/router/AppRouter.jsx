import {
  createBrowserRouter
} from "react-router-dom";

import { HeroesRoutes, AuthRoutes } from "./"

export const AppRouter = createBrowserRouter([
  HeroesRoutes,
  AuthRoutes,
]);
