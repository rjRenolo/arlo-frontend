import React from 'react';
import { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';

import Consultant from './components/Consultant';
import Personal from './components/Personal';
import Family from './components/Family';
import Employment from './components/Employment';
import Income from './components/Income';
import Policies from './components/Policies';
import Softfacts from './components/Softfacts';
import Priorities from './components/Priorities';
import Thirdpartyadvice from './components/Thirdpartyadvice';
import Whatyouown from './components/Whatyouown';
import Whatyouowe from './components/Whatyouowe';
import Estate from './components/Estate';
import Changes from './components/Changes';
import Verification from './components/Verification';
import Prompt from './components/Prompt';
import Objectives from './components/Objectives';
import Other from './components/Other';
import Investing from './components/Investing';
import Attitude from './components/Attitude';
import Riskprofiling from './components/Riskprofiling';
import Capacity from './components/Capacity';
import Complete from './components/Complete';
import Home from './components/Home';




const apipath = 'https://www.arlofinancial.co.uk/arlo-api';
// const apipath = 'http://arlo-api.loc';
// const apipath = 'http://localhost:8000';
const apipass = 'nwercjhfhYFVYigy$5DsFCvghjJKfjbb';
const version = '1.0.0';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/consultant">
              <Consultant 
              path = {apipath}
              pass = {apipass}
              ver = {version}
              />
          </Route>
          <Route path="/personal">
              <Personal 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/family">
              <Family 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/employment">
              <Employment 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/income">
              <Income 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/policies">
              <Policies 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/softfacts">
              <Softfacts 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/priorities">
              <Priorities 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/thirdpartyadvice">
              <Thirdpartyadvice 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/whatyouown">
              <Whatyouown 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/whatyouowe">
              <Whatyouowe 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/estate">
              <Estate 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/changes">
              <Changes 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/verification">
              <Verification 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/prompt">
              <Prompt 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/objectives">
              <Objectives 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/other">
              <Other 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/investing">
              <Investing 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/attitude">
              <Attitude 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/risk-profiling">
              <Riskprofiling 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/capacity">
              <Capacity 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/complete">
              <Complete 
                path = {apipath}
                pass = {apipass}
                ver = {version}
              />
          </Route>
          <Route path="/">
              <Home 
              path = {apipath}
              pass = {apipass}
              ver = {version}
              />
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
