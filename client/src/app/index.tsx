import React, { Suspense } from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import {Header, Navigation, Footer} from '../components/layout';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes />
      <Footer/>
      <Navigation/>
    </div>
  );
}

export default App;