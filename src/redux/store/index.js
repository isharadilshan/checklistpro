import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import thunk from 'redux-thunk';
import {getInitialState, rootReducer} from '../reducers';

const configureStore = () => {
  /**
   * redux persist configuration with async storage
   */
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
    whitelist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const logMiddleware = createLogger({predicate: () => __DEV__});

  const store = createStore(
    persistedReducer,
    getInitialState(),
    applyMiddleware(thunk, logMiddleware),
  );
  const persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore();
