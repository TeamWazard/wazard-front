import { RiLockPasswordLine } from "react-icons/ri";

const Modal = ({ isOpen, onClose, loginState }) => {
  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className={`modal`}>
      <div className="modal-content">
        <div className="modal-title">
          <h2>로그인 {loginState}</h2>
        </div>

        <form className="submit-form">
          <p>😊 Email</p>
          <input type="text" />
          <p>
            {/* <RiLockPasswordLine /> */}
            🔒 PWD
          </p>
          <input type="password" />
          <button className="submit">Submit</button>
        </form>

        {/* 나가기 버튼 */}
        <span className="close-button" onClick={handleModalClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
