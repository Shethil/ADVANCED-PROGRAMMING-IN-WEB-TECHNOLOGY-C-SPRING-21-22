import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Head from './Components/Head';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Studentlist from './Components/Studentlist';
import StudentDetails from './Components/studentDetails';

        ReactDOM.render(
          <React.StrictMode>
            <Router>
              <Head/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/studentlist">
                  <Studentlist/>
                </Route>
                <Route exact path="/contact">
                  <Contact/>
                </Route>
                <Route exact path="/:id">
                  <StudentDetails/>
                </Route>
              </Switch>
            </Router>
          </React.StrictMode>,
          document.getElementById('root')
        );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
