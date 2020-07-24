import React, { Suspense } from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';

const SignUpScreen = React.lazy(()=> import("./screens/signUpScreen"));
const SignInScreen = React.lazy(()=> import("./screens/signInScreen"));
const HomeScreen = React.lazy(()=> import("./screens/homeScreen"));


function Main() {
  return (
    <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route exact path="/" component={HomeScreen}/>
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer/>
      <Navigation/>
    </div>
  );
}

export default App;