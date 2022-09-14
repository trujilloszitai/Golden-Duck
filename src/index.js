import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import './assets/font/fontIcon.css';
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Pantalla de Carga */}
    <Suspense fallback={<div id='loadingScreen'></div>}>
      <div id='loadingScreen'>
        <div className='leftPanel'></div>
        <div className='rightPanel'></div>
      </div>
        <App/>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
