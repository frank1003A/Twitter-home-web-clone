import avatar_image from "../../assets/jpg/avatar.jpg";
import Avatar from "../Avatar/Avatar";
import Button from "../buttons/Button";

//
import { useRef, useState } from "react";
import evIcon from "../../assets/svg/everyone.svg";
import plusIcon from "../../assets/svg/plus.svg";
import emojiIcon from "../../assets/tbcontrols/emoji.svg";
import gificon from "../../assets/tbcontrols/gif.svg";
import locIcon from "../../assets/tbcontrols/location.svg";
import mediaIcon from "../../assets/tbcontrols/media.svg";
import pollIcon from "../../assets/tbcontrols/poll.svg";
//
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import schedicon from "../../assets/tbcontrols/schedule.svg";
import IconButton from "../buttons/IconButton";
import DropdownButton from "../dropdown/DropdownButton";
import Menu from "../dropdown/Menu";
import Loader from "./Loader";

//audience dropdown
import cancelIcon from "../../assets/hamburger/close.svg";
import eIcon from "../../assets/svg/aud_everyone.svg";
import backIcon from "../../assets/svg/backarrow.svg";
import fIcon from "../../assets/svg/flower.svg";
import tIcon from "../../assets/svg/tw_circle.svg";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import Draft from "./Draft";

interface TweetModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const TweetModal = ({ isOpen, handleCloseModal }: TweetModalProps) => {
  const mediaQuery = useMediaQuery("sm");
  const maxMediaQuery = useMediaQuery("xxl");
  const icons = [mediaIcon, gificon, pollIcon, emojiIcon, schedicon, locIcon];
  const mbIcons = [mediaIcon, gificon, emojiIcon, locIcon];
  const [count, setCount] = useState<number>();
  const [isFocused, setFocus] = useState<boolean>(false);

  //REFS
  const audMenuRef = useRef<HTMLDivElement | null>(null);
  const simMenuRef = useRef<HTMLDivElement | null>(null);

  const [textContext, setTextContext] = useState<{
    isMaxed: boolean;
    overText?: string;
    text: string;
    currentTextCount?: number;
  }>({
    text: "",
    isMaxed: false,
    currentTextCount: Number(count),
  });

  const iconsRender = (mediaQuery ? mbIcons : icons).map((icon, index) => {
    return (
      <IconButton
        className="twt-icon-btn"
        id="icon-button-desktop"
        style={{ padding: 6, marginRight: 2, opacity: index === 5 ? 0.5 : 1 }}
        key={`${icon}_key`}
      >
        <img style={{ maxHeight: 20 }} src={icon} alt="media_icon" />
      </IconButton>
    );
  });

  const handleInputChange = (event: React.SyntheticEvent<HTMLSpanElement>) => {
    const newText = event.currentTarget.innerText;
    handleTextCount(newText);
  };

  const handleTextCount = (txt: string) => {
    //
    let max = 300;
    let warn = 300 - 20;
    if (txt.length > max) {
      let ext = txt.slice(max, txt.length);
      let count = 0 - ext.length;
      setCount(count);
      setTextContext({
        isMaxed: true,
        overText: ext,
        text: txt,
        currentTextCount: max + ext.length,
      });
    } else if (txt.length >= warn && txt.length <= max) {
      let count = 20 - (txt.length - warn);
      setCount(count);
      setTextContext({
        isMaxed: false,
        overText: "",
        text: txt,
        currentTextCount: txt.length,
      });
    } else {
      setCount(txt.length);
      setTextContext({
        isMaxed: false,
        overText: "",
        text: txt,
        currentTextCount: txt.length,
      });
    }
  };

  const audience = [
    { text: "Everyone", icon: eIcon, iconColor: "#1d9bf0" },
    { text: "Twitter Circle", icon: tIcon, iconColor: "#00ba7c" },
  ];

  const simulate = [
    { text: "Simulate Tweet", icon: fIcon, iconColor: "#1d9bf0" },
  ];

  return (
    <div>
      <Modal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        hasScroll
        overideHeaderComponent
      >
        <ModalHeader>
          <IconButton
            style={{
              padding: "10px",
            }}
            onClick={handleCloseModal}
          >
            {maxMediaQuery ? (
              <img src={backIcon} alt="back_icon" />
            ) : (
              <img src={cancelIcon} alt="close_icon" />
            )}
          </IconButton>
          {maxMediaQuery && (
            <Button
              disabled={isFocused}
              style={{
                width: 80,
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              Tweet
            </Button>
          )}
        </ModalHeader>
        <div className="modal-tweet-bar">
          <div className="wrapper">
            <div className="modal-content-wrapper">
              <div className="avatar-wrap">
                <Avatar src={avatar_image} />
              </div>
              <div className="main">
                <DropdownButton menuRef={audMenuRef} title="Everyone">
                  <Menu ref={audMenuRef}>
                    <div className="hd">
                      <span>Choose audience</span>
                    </div>
                    <div className="menu-items">
                      {audience.map((a) => {
                        return (
                          <div
                            className="item"
                            role="menuitem"
                            key={`${a.text}`}
                          >
                            <div
                              className="img"
                              style={{ backgroundColor: a.iconColor }}
                            >
                              <img src={a.icon} alt={`${a.icon}`} />
                            </div>
                            <span className="text">{a.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Menu>
                </DropdownButton>
                <Draft
                  handleInputChange={handleInputChange}
                  count={textContext.currentTextCount as number}
                  onFocusIn={() => setFocus(true)}
                  text={textContext.text}
                />
              </div>
            </div>
            <div className="modal-control-wrapper">
              <div className="extra">
                <DropdownButton
                  menuRef={simMenuRef}
                  title="simulate tweet"
                  icon={evIcon}
                >
                  <Menu ref={simMenuRef}>
                    <div className="hd">
                      <span>Choose process</span>
                    </div>
                    <div className="menu-items">
                      {simulate.map((a, i) => {
                        return (
                          <div
                            className="item"
                            role="menuitem"
                            key={`${a.text}`}
                          >
                            <div
                              className="img"
                              style={{ backgroundColor: a.iconColor }}
                            >
                              <img src={a.icon} alt={`${a.icon}`} />
                            </div>
                            <span className="text">{a.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Menu>
                </DropdownButton>
              </div>
              <div className="controls">
                <div className="ico-btns">{iconsRender}</div>
                {isFocused &&
                textContext.currentTextCount &&
                textContext.currentTextCount > 0 ? (
                  <div className="counter">
                    <span className="count-view">
                      <Loader
                        count={textContext.currentTextCount}
                        countView={count as string | number}
                      />
                    </span>
                    <hr />
                    <span className="add">
                      <img src={plusIcon} alt="plus_icon" />
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {!maxMediaQuery && (
                  <Button
                    disabled={isFocused}
                    style={{
                      width: 80,
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }}
                  >
                    Tweet
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TweetModal;
