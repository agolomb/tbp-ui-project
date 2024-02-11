import React, { Fragment } from "react";
import Header from "./components/Header";
import DynamicTreeMenu from "./components/DynamicTreeMenu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <Fragment>
        <Header></Header>
        <DynamicTreeMenu />
        <Footer></Footer>
      </Fragment>
    </div>
  );
}

export default App;
