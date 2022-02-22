import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import Dashboard from './src/screens/Dashboard';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Dashboard />
        </PersistGate>
      </Provider>
    );
  }
}
