import IconButton from "../core/buttons/IconButton";

// ICONS
import { ReactNode, useState } from "react";
import dDownIcon from "../assets/message/mdddown.svg";
import dUpIcon from "../assets/message/mddup.svg";
import mIcon from "../assets/message/messages-2.svg";

interface MessageBarProps {
  children: ReactNode;
}
const MessageBar = ({ children }: MessageBarProps) => {
  const [toggleMesage, setToggleMessage] = useState<boolean>(false);
  return (
    <div className="messagebar">
      <div className="header">
        <h2>Messages</h2>
        <div className="controls">
          <IconButton style={{ padding: 5 }}>
            <img src={mIcon} alt="write-message-icon" />
          </IconButton>
          <IconButton
            style={{ padding: 5 }}
            onClick={() => setToggleMessage(!toggleMesage)}
          >
            {toggleMesage ? (
              <img src={dDownIcon} alt="close-message-bar" />
            ) : (
              <img src={dUpIcon} alt="open-message-bar" />
            )}
          </IconButton>
        </div>
      </div>
      <div
        className="messages"
        style={{ height: toggleMesage ? "350px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default MessageBar;
