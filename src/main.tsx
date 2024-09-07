import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './app/index';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { configureAppStore } from './store/configureStore';
import Toast from 'app/components/Toast';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Toast>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Toast>
  </Provider>,
);
