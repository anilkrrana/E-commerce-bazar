import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { app } from './firebase.config';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider app={app} store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);