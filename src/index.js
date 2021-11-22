import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store/index'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThroughProvider } from "react-through";
import history from '../src/Utils/history'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <BrowserRouter >
      <Provider store={store}>
        <ThroughProvider>
          <App />
        </ThroughProvider>
      </Provider>
    </BrowserRouter>
  </div >,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
