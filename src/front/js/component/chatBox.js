import React, { useState, useEffect } from "react";
import "../../styles/chatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [send, setSend] = useState(false);

  let backendUrl = process.env.BACKEND_URL;

  function sendMessage(message) {
    console.log(backendUrl);
    fetch(backendUrl + "/api/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        //(below) hard coded for now since we cant get users for now
        receiver_id: 2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response data here
      })
      .catch((error) => {
        console.log(error);
        // handle any errors here
      });
  }
  useEffect(() => {
    if (send) {
      sendMessage(inputValue);
      setInputValue("");
    }

    setSend(false);
  }, [send]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, isEditable: false }]);
      setSend(true);
    }
  };

  const handleEdit = (index) => {
    const newMessages = [...messages];
    newMessages[index].isEditable = true;
    setMessages(newMessages);
  };

  const handleSave = (index, newText) => {
    const newMessages = [...messages];
    newMessages[index].text = newText;
    newMessages[index].isEditable = false;
    setMessages(newMessages);
  };

  const handleCancel = (index) => {
    const newMessages = [...messages];
    newMessages[index].isEditable = false;
    setMessages(newMessages);
  };

  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div className="chat-box mx-auto">
      <ul className="chat-box__messages">
        {messages.map((message, index) => (
          <li key={index} className="chat-box__message">
            {message.isEditable ? (
              <>
                <input
                  type="text"
                  value={message.text}
                  onChange={(event) => {
                    const newMessages = [...messages];
                    newMessages[index].text = event.target.value;
                    setMessages(newMessages);
                  }}
                  className="chat-box__edit-input"
                />
                <div className="chat-box__edit-buttons">
                  <button
                    type="button"
                    onClick={() => handleSave(index, message.text)}
                    className="chat-box__button chat-box__button--save"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel(index)}
                    className="chat-box__button chat-box__button--cancel"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {message.text}
                <div className="chat-box__buttons">
                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                    className="chat-box__button chat-box__button--edit"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="chat-box__button chat-box__button--delete"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
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
        <button
          type="submit"
          className="chat-box__button chat-box__button--send"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
