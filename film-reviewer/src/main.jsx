import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css'

import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </MantineProvider>
)

