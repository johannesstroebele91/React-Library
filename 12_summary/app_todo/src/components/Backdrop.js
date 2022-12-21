function Backdrop(props) {
  // How to provide data to the parent component (e.g. props.onCancel)
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
