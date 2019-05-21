import React from "react";
import { HashRouter } from "react-router-dom";
import MainHeader from './components/MainHeader';
import MainBody from './components/MainBody';
import "./App.scss";

function App() {
  return (
    <HashRouter>
        <MainHeader/>
        <MainBody/>
    </HashRouter>
  );
}

export default App;
