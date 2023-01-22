import {
  ErrorPage,
  LoginPage,
  PublicRoute,
} from "./";

export const AuthRoutes = {
  path: "/login",
  element: <PublicRoute><LoginPage /></PublicRoute>,
  errorElement: <ErrorPage />
}
