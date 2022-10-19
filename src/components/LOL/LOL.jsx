import React from "react";
import { Link } from "react-router-dom";

import "./LOL.scss";
import LOLGif from "./assets/lol.gif";

const LOL = () => {
  return (
    <Link to="/" id="lol">
      <img src={LOLGif} alt="LOLGif" />
    </Link>
  );
};

export default LOL;
