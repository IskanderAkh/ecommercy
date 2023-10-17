import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext'; // Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider> {/* Wrap your App component with the context provider */}
    <App />
  </ShopContextProvider>
);

reportWebVitals();
