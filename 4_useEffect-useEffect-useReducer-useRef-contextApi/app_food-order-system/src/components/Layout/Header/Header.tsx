import header from "../../../assets/meals.jpg"; // Tell webpack this JS file uses this image
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";

interface HeaderProps {
  onShowCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={header} alt="A table full of food" />;
      </div>
    </>
  );
};
export default Header;
