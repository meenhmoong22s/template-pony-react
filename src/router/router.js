import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Product = React.lazy(() => import("../pages/Product/product"));
const Home = React.lazy(() => import("../pages/Home/home"));
const Login = React.lazy(() => import("../pages/Login/login"));
const Page404 = React.lazy(() => import("../container/notfound"));

function Router(props) {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/login" component={Login} />
      <Route component={Page404} />
    </Switch>
  );
}

export default Router;
