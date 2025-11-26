import { useState } from "react";
import { ChatInput } from "./componenets/ChatInput.jsx";
import MoveChatbox from "./componenets/MoveChatbox.jsx";
import "./App.css";
import ChatMessages from "./componenets/ChatMessages.jsx";
import { useEffect } from "react";

function App() {
  //Higher state to save the users messages
  const [chatMessages, setChatMessages] = useState([]);
  const [textboxPosition, setTextboxPosition] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("messages")) || [];
    setChatMessages(stored);
  }, []);

  useEffect(() => {
    chatMessages.length === 0 ||
      localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="js-container">
      {textboxPosition === true && (
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      )}
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      {textboxPosition === false && (
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      )}
      <MoveChatbox
        textboxPosition={textboxPosition}
        setTextboxPosition={setTextboxPosition}
      />
      <button></button>
    </div>
  );
}

export default App;
