import { ThemeContext } from "context/ThemeContext";
import { ReactNode, useContext } from "react";
import Modal from "react-modal";
import cancelIcon from "../../assets/hamburger/close.svg";
import IconButton from "../buttons/IconButton";

interface ModalComponentProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
  hasScroll?: boolean;
  overideHeaderComponent?: boolean;
}

const ModalComponent = ({
  isOpen,
  handleCloseModal,
  children,
  hasScroll,
  overideHeaderComponent,
}: ModalComponentProps) => {
  const theme = useContext(ThemeContext);

  const handleDataTheme = (
    props: Modal.OnAfterOpenCallbackOptions | undefined
  ) => {
    props?.overlayEl.setAttribute("data-theme", theme.theme);
  };

  const handleHeaderComponent = (
    props: Modal.OnAfterOpenCallbackOptions | undefined
  ) => {
    let modalHeader = props?.contentEl.children[0].lastChild
      ?.childNodes[0] as HTMLDivElement;
    if (overideHeaderComponent) {
      props?.contentEl.prepend(modalHeader);
    } else {
      return;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="TweetBar Modal"
      overlayClassName={"modal-overlay"}
      className={"modal"}
      onAfterOpen={(props) => {
        handleDataTheme(props);
        handleHeaderComponent(props);
      }}
    >
      {overideHeaderComponent ? (
        ""
      ) : (
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
      )}
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
