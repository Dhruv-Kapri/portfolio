import { useState } from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className={` ${isNavOpen ? "show" : ""}`}>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        {/* <i class="fas fa-times"></i> */}
        <i
          className={`fas fa-times ${isNavOpen ? "" : "hidden"}`}
          onClick={() => setIsNavOpen(false)}
        ></i>
      </ul>
      {/* <i className="fas fa-bars"></i> */}
      <i
        className={`fas fa-bars ${isNavOpen ? "hidden" : ""}`}
        onClick={() => setIsNavOpen(true)}
      ></i>
    </nav>
  );
}
