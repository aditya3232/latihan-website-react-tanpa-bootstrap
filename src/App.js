import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// file yang dijadikan Router adalah App.js. Karena komponen inilah yang dirender pertama oleh index.js
// fungsi Router adalah ketika halaman" diklik maka Router akan mengarahkan ke <Route> yang sesuai
// singkatnya Router digunakan untuk menavigasi halaman
// <Route> pasti dibungkus oleh <Switch>
// didalam <Route> hanya bisa merender 1 path
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
