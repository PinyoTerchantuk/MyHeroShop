import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WrappedApp from './components/WrappedApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WrappedApp></WrappedApp>
  </StrictMode>
);
