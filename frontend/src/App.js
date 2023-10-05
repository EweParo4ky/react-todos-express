import { Provider } from 'react-redux';
import Test from './components/Test';
import Main from './components/MainPage/MainPage';
import store from './slices/index.js';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Test />
      <Main />
    </div>
  </Provider>
);

export default App;
