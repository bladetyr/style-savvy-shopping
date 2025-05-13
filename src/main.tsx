import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/Root.css';

import NavBar from './components/NavBar.tsx';
import SideBar from './components/SideBar.tsx';
import CatalogueBox from './components/CatalogueBox.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <div style={{display: 'flex', justifyContent: 'center', height: '50%'}}>
      <CatalogueBox />
      <SideBar />
    </div>
  </StrictMode>,
)
