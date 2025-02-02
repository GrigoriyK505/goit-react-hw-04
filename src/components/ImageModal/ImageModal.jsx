import Modal from "react-modal";
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, targetImage }) => {
    const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                styles={customStyles}
                contentLabel="Modal opened"
                className={s.Modal}
                overlayClassName={s.Overlay}
            >
                <div>
                    <img
                        src={targetImage} alt="Large viw" className="s.modalImage"/>
                </div>
            </Modal>
        </div>
    );
}
export default ImageModal