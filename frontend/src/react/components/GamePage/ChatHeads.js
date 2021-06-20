import React, { useState } from "react";

import styles from "../../styles/Chat.module.css";

const ChatHeads = ({ name, id, message, sent }) => {
  return (
    <div className={styles.chatHeadSent}>
      <div className={styles.chatMessageContainer}>
        <p>{name}</p>
        <div className={styles.chatBubble}>{message}</div>
      </div>
      <div className={styles.profile}></div>
    </div>
  );
};

export default ChatHeads;
