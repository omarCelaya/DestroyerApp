import React from 'react';
import ReactDOM from 'react-dom/client';
import { AgendaApp } from './AgendaApp';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AgendaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
