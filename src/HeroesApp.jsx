// import { Outlet } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './global';
import { DcPage, HeroPage, MarvelPage, SearchPage } from './heroes';

export const HeroesApp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-2">
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:heroId" element={<HeroPage />} />
            <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </main>
    </>
  )
}
