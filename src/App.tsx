import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigations from './navigation/navigation';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Navigations />
        </Provider>
    </div>
  );
}

export default App;
