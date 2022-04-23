import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global/Globalstyles";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer, rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>
);
