import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  return (
    <div className={sender === "user" ? "user-response" : "robot-response"}>
      {sender === "robot" && (
        <img
          className="user-icon"
          src={RobotProfileImage}
          alt="profile-picture"
        />
      )}

      <div className="chat-text">
        <div className={sender + "-chat-text-message"}>{message}</div>
        <div className={sender + "-chat-text-time"}>{time}</div>
      </div>

      {sender === "user" && (
        <img
          className="user-icon"
          src={UserProfileImage}
          alt="profile-picture"
        />
      )}
    </div>
  );
}
