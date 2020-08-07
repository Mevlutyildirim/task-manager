import React from "react";
import "./App.css";
import { Header, Navigation, Footer } from "shared/components/layout";
import Routes from "./Routes";
import Normalize from "./normalize";

function App() {
  return (
    <React.Fragment>
      <Normalize />
      <div className="app">
        <Header />
        <Routes />
        <Footer />
        <Navigation />
      </div>
    </React.Fragment>
  );
}

export default App;
