import React from "react";
import { Header, Navigation, Footer } from "shared/components/layout";
import Routes from "./Routes";
import Normalize from "./normalize";
import { ThemeProvider } from "styled-components";
import { MyTheme } from "app/theme";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={MyTheme}>
        <Normalize />
        <Header />
        <Routes />
        <Footer />
        <Navigation />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
