import header from "../../../assets/meals.jpg"; // Tell webpack this JS file uses this image
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={header} alt="A table full of food" />;
      </div>
    </>
  );
};
export default Header;
