import "./Card.css";

// TODO "any" should be fixed later probably
const Card = (props: any) =>  {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
