import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeBusca } from './routes/HomeBusca';
import { Promocoes } from './routes/Promocoes';

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '15px', background: '#151d30', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>Falkon<span style={{ color: '#00f2fe' }}>.tech</span></h1>
          <nav>
            <Link to="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: '600' }}>
              🔍 Vitrine de Busca
            </Link>
            <Link to="/promocoes" style={{ color: '#ff3838', textDecoration: 'none', fontWeight: '700' }}>
              🔥 Central de Promoções
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <Routes>
          <Route path="/" element={<HomeBusca />} />
          <Route path="/promocoes" element={<Promocoes />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}