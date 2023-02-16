import React, { useState } from "react";

function NavBar() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <button onClick={toggleChat}>Chat</button>
        </li>
      </ul>
      {isChatOpen && (
        <div className="chat-box">// Here goes the code for the chat box</div>
      )}
    </nav>
  );
}

export default NavBar;
