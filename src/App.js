import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './component/header'
import Lefter from './component/lefter'
import Righter from './component/righter'


function App() {

  return (
    <Provider store={store}>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Lefter />
        <Righter />
      </div>

    </Provider>
  );
}

export default App;
