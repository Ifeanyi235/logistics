import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './App';
import Bmodel from './business-Model';
import OrgPhil from "./org-phil";
import Imports from './Import-process';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/org-phil" element={<OrgPhil />} />
        <Route path="/business-Model" element={<Bmodel />} />
        <Route path="/Import process" element={<Imports />} />
      </Routes>
    </Router>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
