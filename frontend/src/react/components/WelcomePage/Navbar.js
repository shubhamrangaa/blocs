import React from "react";
import StartButton from "../StartButton";
// styles
import styles from "../../styles/WelcomePage.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2>Blocs</h2>
      <ul>
        <li>How it Works</li>
        <li>About Us</li>
        <li>
          <Link to="/game">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
