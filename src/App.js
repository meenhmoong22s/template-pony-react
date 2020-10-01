import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./container/navbar";
import Router from "./router/router";
import "./scss/App.scss";

const loading = <div className="pt-3 text-center"></div>;

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={loading}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
