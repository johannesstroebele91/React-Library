import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  // React hook can only be called in React functions
  // Most be on the first level (scope) of a React function
  // modalIsOpen: is the state snapshot currently stored
  // setModalIsOpen: enables to change the state
  // WHENEVER setState is called,
  // React will re-execute the component function
  // this state belongs to
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
    props.onDeleteTodo(props.index);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Description: {props.text}</p>
      <p>Index: {props.index}</p>
      <div className="actions">
        {/* It's possible to either: */}
        {/* 1) point at another function (e.g. deleteTodoHandler) = DOES NOT EXECUTE IT WHEN THE BUTTON IS RENDERED, BUT ONLY IF BUTTON IS CLICKED */}
        {/* 2) Execute an anonymous inline function directly (e.g. function() {}, () => {}) */}
        <button onClick={deleteHandler} className="btn">
          Delete
        </button>
        {modalIsOpen && (
          <>
            <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            {/* How to receive data from a child component*/}
            <Backdrop onCancel={closeModalHandler} />
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
