import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './Components/Utils/ErrorBoundary';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
