import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage.jsx";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const ref = useRef(null);

  useEffect(() => {
    const containerElem = ref.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  //Looping through messages into seperate componenets
  return (
    <div className="chat-log" ref={ref}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            type={chatMessage.type}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
