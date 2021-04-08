import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// file yang dijadikan Router adalah App.js. Karena komponen inilah yang dirender pertama oleh index.js
// fungsi Router adalah ketika halaman" diklik maka Router akan mengarahkan ke <Route> yang sesuai
// singkatnya Router digunakan untuk menavigasi halaman
// <Route> pasti dibungkus oleh <Switch>
// didalam <Route> hanya bisa merender 1 path
function App() {
  return (
    <>
      <Router>
        {/* komponen navbar ditempatkan disini, agar setiap swith ke halaman lain komponen navbar tetap ada */}
        {/* path berhubungan dengan link yg ada di komponen navbar */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
