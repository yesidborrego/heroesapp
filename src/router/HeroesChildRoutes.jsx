// import { Navigate } from "react-router-dom";
import {
  MarvelPage,
  DcPage,
  SearchPage,
  HeroPage,
} from "./";


export const HeroesChildRoutes = [
  {
    index: true,
    element: <MarvelPage />,
  },
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DcPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/hero/:heroId",
    element: <HeroPage />,
  },
  // {
  //   path: "/*",
  //   element: <Navigate to="/marvel" />,
  // }
]