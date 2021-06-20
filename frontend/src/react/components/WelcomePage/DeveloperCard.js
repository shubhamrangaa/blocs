import React from "react";

import styles from "../../styles/WelcomePage.module.css";

const DeveloperCard = ({ name, links }) => {
  return (
    <div className={styles.developer}>
      <p>{name}</p>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeveloperCard;
