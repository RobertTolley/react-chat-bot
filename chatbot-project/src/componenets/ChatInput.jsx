import { useState } from "react";
import { Chatbot } from "supersimpledev";
import SpinnerLoadingImage from "../assets/loading-spinner.gif";
import "./ChatInput.css";
import dayjs from "dayjs";

function getTime() {
  const currentTime = dayjs().format("h:mm a");
  console.log(currentTime);

  return currentTime;
}

//Taking in props from app
export function ChatInput({ chatMessages, setChatMessages }) {
  //the text the user has typed
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //saves the words typed in the input element into a variable
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  //sends a message via setChatMessage which is used in ChatMessage component
  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    setIsLoading(true);

    const newMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: getTime(),
      },
    ];

    setInputText("");

    setChatMessages(newMessages);
    setChatMessages([
      ...newMessages,
      {
        message: (
          <img
            className="loading-spinner"
            src={SpinnerLoadingImage}
            alt="loading-spinner"
          />
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    //This is from an external libary
    const response = await Chatbot.getResponseAsync(inputText);

    const chatbotMessage = {
      message: response,
      sender: "robot",
      id: crypto.randomUUID(),
      time: getTime(),
    };

    setInputText("");

    setChatMessages([...newMessages, chatbotMessage]);

    setIsLoading(false);
  }

  function chatboxKeyboardEvents(event) {
    event.key === "Enter" && sendMessage();
    event.key === "Escape" && setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        placeholder="Send a nessage to Chatbot"
        onChange={saveInputText}
        onKeyDown={chatboxKeyboardEvents}
        value={inputText}
        disabled={isLoading}
      />
      <button onClick={sendMessage} className="chat-send-button">
        Send
      </button>
    </div>
  );
}
