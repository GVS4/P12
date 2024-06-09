import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store from './store'; // Importer le store configuré

// Créer une racine React et rendre l'application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Appeler reportWebVitals pour mesurer les performances
reportWebVitals();
