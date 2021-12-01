import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);