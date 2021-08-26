import React from "react";
import styles from "./App.module.css";
import { HomePage, SignInPage, RegisterPage,DetailPage } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route render={() => <div>404</div>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
