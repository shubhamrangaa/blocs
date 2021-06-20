import React from "react";
import styles from "../../styles/Chat.module.css";

const ReceivedChatHeads = ({ name, id, message }) => {
  return (
    <div className={styles.chatHeadReceived}>
      <div className={styles.profile}></div>
      <div className={styles.chatMessageContainer}>
        <p>{name}</p>
        <div className={styles.chatBubble}>{message}</div>
      </div>
    </div>
  );
};

export default ReceivedChatHeads;
