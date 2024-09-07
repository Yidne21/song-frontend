import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { DefaultLayout } from './pages/HeaderPage';
import { routes } from './pages/route';
import { routesType } from './pages/types';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DefaultLayout>
        <Routes>
          {routes.map((route: routesType) => (
            <Route
              Component={route.component}
              key={route.path}
              path={route.path}
            />
          ))}
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
