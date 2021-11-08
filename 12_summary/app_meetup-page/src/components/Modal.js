const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  const confirmHandler = () => {
    props.onConfirm();
    console.log(props.index);
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
