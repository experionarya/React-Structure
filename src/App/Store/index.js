// configure store
import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
// import createEncryptor from "redux-persist-transform-encrypt";
import rootReducer from "./reducers";
import sagas from "./sagas";
// import refreshTokenMiddleware from "../utils/refreshTokenMiddleware";
const loggerMiddleware = createLogger({ diff: false });
// const encryptor = createEncryptor({
//   secretKey: process.env.REACT_APP_STORE_SECRET_KEY,
//   onError: function(error) {
//     // Handle the error.
//   }
// });
// configure persistance
const persistConfig = {
  key: "root",
  storage,
  transforms: []
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// setup saga
const sagaMiddleware = createSagaMiddleware();
// configure store with an initial state
function configureStore(initialState) {
  // const enhancer = compose(applyMiddleware(loggerMiddleware, sagaMiddleware));
  const enhancer =
    process.env.REACT_APP_DEV === "true"
      ? compose(applyMiddleware(loggerMiddleware, sagaMiddleware))
      : compose(applyMiddleware(sagaMiddleware));
  return createStore(persistedReducer, initialState, enhancer);
}
const store = configureStore({});
const persistor = persistStore(store);

sagaMiddleware.run(sagas);
export const dispatchAction = action => store.dispatch(action); // eslint-disable-line
export const getStore = () => store;
export const getState = () => store.getState();
export default () => ({ store, persistor });