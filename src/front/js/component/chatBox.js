import React, { useState } from "react";
import "../../styles/chatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <div className="chat-box">
      <ul className="chat-box__messages">
        {messages.map((message, index) => (
          <li key={index} className="chat-box__message">
            {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="chat-box__form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="chat-box__input"
          placeholder="Type a message..."
        />
        <button type="submit" className="chat-box__button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
