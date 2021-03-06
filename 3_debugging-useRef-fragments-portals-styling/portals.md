# 1. Basics

Portals enable to

- to render components differently
- in the real HTML DOM
  - e.g. render a modal on top of the real DOM
  - instead of nested somewhere

# 2. Relevance

- write a better semantic
- and a "cleaner HTML structure"
- e.g. modals
  - A modal should overlay the entire page
  - and not nested somewhere inside the HTML structure
  - (e.g. similar for side-drawers, other dialogs)
- aka AVOID BAD PRACTICE such as
  - creating a button with an event listener using a `div`
  - e.g. `<div onClick={clickHandler}>Click me</div>`

# 3. Approach

1. Go to index.html file in the public folder
2. Add a `<div id="modal-root"></div>` before the `<div id="root"></div>` element
3. import ReactDOM from "react-dom"
4. Go to respective component (e.g. [ErrorModal](./app_crm-system/src/components/UI/Modal/ErrorModal.tsx))
5. Outsource e.g. modal component into separate component before the "real component"
6. Specify props
7. Write `{ReactDOM.createPortal()}` into the respective component and specify
   1. element which should be rendered
   2. id where the component should be rendered

# 4. Example: ErrorModal.tsx

```javascript
// Import ReactDOM
import ReactDOM from "react-dom";

// Outsourced Backdrop component
interface BackdropProps {
  onCloseModal: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={() => onCloseModal()} />;
};

// Modal component
interface ErrorModalProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onCloseModal }) => {
  // Use function createPortal() from the ReactDOM library
  return <>{ReactDOM.createPortal(<Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")!)}</>;
};

export default ErrorModal;
```
