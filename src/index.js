import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
