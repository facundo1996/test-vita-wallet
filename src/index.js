import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LogInProvider } from './contexts/userContext';
import { TransferProvider } from './contexts/transfersContext';
import { ProfileProvider } from './contexts/profileContext';
import { HistoryProvider } from './contexts/historyContext';
import { PricesProvider } from './contexts/pricesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogInProvider>
      <TransferProvider>
        <ProfileProvider>
          <HistoryProvider>
            <PricesProvider>
              <App />
            </PricesProvider>
          </HistoryProvider>
        </ProfileProvider>
      </TransferProvider>
    </LogInProvider>
  </React.StrictMode>
);