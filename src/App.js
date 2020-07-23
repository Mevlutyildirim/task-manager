import React from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import SignUpScreen from "./screens/signUpScreen";
import SignInScreen from './screens/signInScreen';
import HomeScreen from './screens/homeScreen';
import Navigation from './components/navigation';

function Main() {
  return (
    <Switch>
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route exact path="/" component={HomeScreen}/>
    </Switch>
  );
}

function App() {
  return (
    <div className="App">
      <Main />
      <Navigation/>
    </div>
  );
}

export default App;