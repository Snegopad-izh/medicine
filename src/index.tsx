import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/router/PrivateRoute";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<App/>}/>
                    </Route>

                    <Route path="login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>


    </React.StrictMode>
);

reportWebVitals();
