import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProjectPreview from "./ProjectPreview"

import Home from "./Home"
import NavBar from "./NavBar"
import UberPage from "./UberPage"
import HomepointrPage from "./HomepointrPage"
import GooglePage from "./GooglePage"
import BuildtheFuturePage from "./BuildtheFuturePage"
import AboutPage from "./AboutPage"



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/uber" component={UberPage} />
        <Route path="/homepointr" component={HomepointrPage} />
        <Route path="/googlepage" component={GooglePage} />
        <Route path="/buildthefuture" component={BuildtheFuturePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>

  );
}

export default App;
