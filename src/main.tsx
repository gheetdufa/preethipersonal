/**
 * Entry Point
 * 
 * Minimal React setup.
 * No providers or wrappers needed for this simple portfolio.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
