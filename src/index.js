import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";

const root = document.getElementById('root');


ReactDOM.createRoot(root).render(

  <Router>
    <ScrollToTop />

    <App />


  </Router>



);


reportWebVitals();
