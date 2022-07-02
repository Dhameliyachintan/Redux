// import logo from './logo.svg';
// import './App.css';
// import { Provider } from 'react-redux';
// import { ConfigurStore } from './Redux/Store';
// import Counter from './componente/Counter/Counter';

// function App() {
//   let store = ConfigurStore()
//   return (
//     <>
//     <Provider store={store}>
//        <Counter/>
//     </Provider>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Provider } from 'react-redux';
import Counter from './componente/Counter/Counter';
import { ConfigurStore } from './Redux/Store';

function App(props) {
  let store = ConfigurStore()
  return (
    <>
      <Provider store = {store}>
        <Counter />
      </Provider>
    </>

  );
}

export default App;