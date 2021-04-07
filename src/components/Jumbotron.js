// komponen jumbotron nanti akan dipanggil di page Home
import React from "react";
import { Button } from "./Button";
import "./Jumbotron.css";
import "../App.css";

// memanggil file di public tidak perlu "/public"
// autoPlay loop muted, agar video berputar terus dan muted
function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="jumbotron-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Jumbotron;
