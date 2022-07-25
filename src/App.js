// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigurStore } from './Redux/Store';
import MiniDrawer from './componente/Layout';
import { Route } from 'react-router-dom';
import Counter from './componente/Counter/Counter';
import { Switch } from 'react-router-dom';
import Medicine from './container/Medicine';
import { PersistGate } from 'redux-persist/integration/react'
import PromiseExample from './container/PromiseExample/PromiseExample';
import UseMemoExample from './container/HookMemo/UseMemoExample';
import UseCallbackExample from './container/UseCallbackExa/UseCallbackExample';
import Tasklist from './container/TaskList/Tasklist';
import TaskListrprovider from './container/TaskList/TaskListrprovider';
// import { ThemeContext, themes } from './ThemeContext';
// import Layout from './container/UseContext/Layout';


function App() {

  let { store, persistor } = ConfigurStore()

  return (
    <>
      {/* <ThemeContext.Provider value={themes.dark}>
        <Layout />
      </ThemeContext.Provider> */}
      <TaskListrprovider>
        <Tasklist />
      </TaskListrprovider>

      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MiniDrawer>
            <Switch>
              <Route exact to path={"/Medicine"} component={Medicine} />
              <Route exact to path={"/Counter"} component={Counter} />
              <Route exact to path={"/PromiseExample"} component={PromiseExample} />
              <Route exact to path={"/UseMemoExample"} component={UseMemoExample} />
              <Route exact to path={"/UseCallbackExample"} component={UseCallbackExample} />
            </Switch>
          </MiniDrawer>
        </PersistGate>
      </Provider> */}
    </>
  );
}

export default App;
