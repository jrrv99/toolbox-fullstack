import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <ErrorBoundary fallback={<h1>Ha ocurrido un Error</h1>}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;


