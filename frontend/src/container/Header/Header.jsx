import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => (
  <div className="header_text">
    <h2>Hello, my name is</h2>

    <div className="text">RICCARDO BOE</div>

    <h3>Im a Full-Stack developer</h3>
  </div>
);

export default AppWrap(Header, "home");
