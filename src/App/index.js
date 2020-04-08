import React, { Component } from "react";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./Store";
import AppRouter from "./Router";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../Assets/scss/_main.scss";
// import NetworkDetector from "../../src/App/components/NetworkDetection";
// configure store
const { store, persistor } = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          {/* <ToastContainer draggable={false} /> */}
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}
export default (App);