import classes from "./Card.module.css";
interface CardProps {
  className: any;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  // children props enables to access the content
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
