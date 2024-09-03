import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './app/index';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Provider>,
);
