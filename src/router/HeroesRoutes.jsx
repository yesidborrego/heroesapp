import {
  HeroesApp,
  ErrorPage,
  HeroesChildRoutes,
  PrivateRoute
} from "./";

// export const HeroesRoutes = {
//   path: "/",
//   element: <HeroesApp />,
//   errorElement: <ErrorPage />,
//   children: HeroesChildRoutes,
// }

export const HeroesRoutes = {
  path: "/",
  element: <PrivateRoute><HeroesApp /></PrivateRoute>,
  errorElement: <ErrorPage />,
  children: HeroesChildRoutes,
}
