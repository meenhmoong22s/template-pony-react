import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Product = React.lazy(() => import("../pages/Product/product"));
const Home = React.lazy(() => import("../pages/Home/home"));
const Login = React.lazy(() => import("../pages/Login/login"));
const Page404 = React.lazy(() => import("../container/notfound"));
const Loading = React.lazy(() => import("../container/loading"));

function Router(props) {
  return (
    <div style={{ height: "100vh", position: "relative", marginTop: "56px" }}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/loading" component={Loading} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default Router;
