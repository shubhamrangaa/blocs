import React, { useState } from "react";

import ChatHeads from "./ChatHeads";
import ReceivedChatHeads from "./ReceivedChatHeads";
import styles from "../../styles/Chat.module.css";

const ChatSection = () => {
  const [chat, setChat] = useState("");
  return (
    <section className={styles.section}>
      <ReceivedChatHeads name="player1" message="hello" />
      {/* <ReceivedChatHeads name="player2" message="hi" /> */}
      {/* <ChatHeads name="Manavendra Sen" message="hello" /> */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <input
          className={styles.input}
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button className={styles.button}>Send</button>
      </div>
    </section>
  );
};

export default ChatSection;
