import { ThemeContext } from "context/ThemeContext";
import { ReactNode, useContext } from "react";
import Modal from "react-modal";
import cancelIcon from "../assets/hamburger/close.svg";
import IconButton from "./buttons/IconButton";

interface ModalComponentProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
  hasScroll?: boolean;
}

const ModalComponent = ({
  isOpen,
  handleCloseModal,
  children,
  hasScroll,
}: ModalComponentProps) => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="TweetBar Modal"
      overlayClassName={"modal-overlay"}
      className={"modal"}
      onAfterOpen={(props) =>
        props?.contentEl.setAttribute("data-theme", theme.theme)
      }
    >
      <div className="modal-top">
        <IconButton
          style={{
            padding: "10px",
          }}
          onClick={handleCloseModal}
        >
          <img src={cancelIcon} alt="close_icon" />
        </IconButton>
      </div>
      {hasScroll ? (
        <div className="modal-scroll">
          <div className="scroll">{children}</div>
        </div>
      ) : (
        children
      )}
    </Modal>
  );
};

export default ModalComponent;
