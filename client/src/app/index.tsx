import React from "react";
import { Header, Navigation, Footer } from "shared/components/layout";
import Routes from "./Routes";
import Normalize from "./normalize";

function App() {
  return (
    <React.Fragment>
      <Normalize />
        <Header />
        <Routes />
        <Footer />
        <Navigation />
    </React.Fragment>
  );
}

export default App;
