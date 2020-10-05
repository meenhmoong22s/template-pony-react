import React, { Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./container/footer";
import Loading from "./container/loading";
import NavBar from "./container/navbar";
import Router from "./router/router";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <NavBar />
          <Router />
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
