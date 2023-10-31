import { Provider } from 'react-redux';
import Main from './components/MainPage/MainPage';
import store from './slices/index.js';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Main />
    </div>
  </Provider>
);

export default App;
