import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <div>SONG CRUD APP</div>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
