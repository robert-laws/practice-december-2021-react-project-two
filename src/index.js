import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './firebase/config';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
