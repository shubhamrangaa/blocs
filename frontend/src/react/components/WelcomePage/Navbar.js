import React from "react";
import StartButton from "../StartButton";
// styles
import styles from "../../styles/WelcomePage.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <h2>
          <a href="/#">Blocs</a>
        </h2>
        <ul>
          <li>
            <a href="/#why">Why Blocs</a>
          </li>
          <li>
            <a href="/#how">How It Works</a>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <Link to="/game">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
