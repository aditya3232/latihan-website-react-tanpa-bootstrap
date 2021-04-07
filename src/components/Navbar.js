import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

//
function Navbar() {
  // useState merupakan fungsi untuk mendapatkan data
  // const [clik, setClik], ini adalah state (tempat menyimpan data)
  // data yg disimpan adalah icon "fas fa-times" (x) : "fas fa-bars (bar3 =)"
  // state clik akan menyimpan data basic (sebelum ada perubahan ketika di klik)
  // dan state setClik menyimpan data setelah diubah
  // useState(false) akan menjadikan state yg disimpan adalah false,
  // karena false maka, state clik menyimpan data "fas fa-bars" dulu baru "fas fa-times",
  // dan setClik akan menyimpan data click yg true (!click)
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // fungsi handleClick akan berjalan ketika onClik
  // yang dilakukan adalah merubah icon ketika di clik
  // setClik(!clik), artinya setClick jadi (kebalikan state clik dan dapat dilakukan trus setiap diklik)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // menghilangkan Button ketika layar kurang dari sama dengan 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // menghilangkan sign up yg tidak tersembunyi pada tampilan windows ketika direload
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* ini adalah link logo: TRVL (LOGO) */}
          {/* ketika diklik akan menclose mobilemenu */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>

          {/* ini adalah icon bars3 dan silang */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* ini adalah list menu navbar */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {/* Button SIGN UP */}
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
