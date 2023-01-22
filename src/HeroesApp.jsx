import { Outlet } from 'react-router-dom';
import { Navbar } from './global';

export const HeroesApp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-2">
        <Outlet />
      </main>
    </>
  )
}
