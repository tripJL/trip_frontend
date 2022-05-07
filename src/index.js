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
    //react18에서 react quill duplicated toolbars issue로 인해 React.StrictMode 주석처리(일시적으로 해결)
    // <React.StrictMode>
    //     <Provider store={store}>
    //         <GlobalStyle />
    //         <App />
    //     </Provider>
    // </React.StrictMode>
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
);
