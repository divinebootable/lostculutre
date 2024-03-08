import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import store from './app/store';

// ----------------------------------------------------------------------

// React Suspense, you can suspend rendering a component that is still loading data and render a fallback UI and  lazy load
// Helmet: prevent memory leaks,  implement meta tags. Think of <Helmet> as the <head>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
