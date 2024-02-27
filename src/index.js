import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LogInProvider } from './contexts/userContext';
import { TransferProvider } from './contexts/transfersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogInProvider>
      <TransferProvider>
        <App />
      </TransferProvider>
    </LogInProvider>
  </React.StrictMode>
);