import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { HeroesApp } from '../HeroesApp';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesApp />
              </PrivateRoute>
            } />

            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
        </Routes>
    </>
  )
}