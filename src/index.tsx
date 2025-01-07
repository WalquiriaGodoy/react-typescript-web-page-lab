import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/Global';
import { DeviceProvider } from './context/DeviceContext';
import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DeviceProvider>
    <GlobalStyle />
    <App />
  </DeviceProvider>
);
