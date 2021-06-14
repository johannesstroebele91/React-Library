import header from "../../../assets/meals.jpg"; // Tell webpack this JS file uses this image
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={header}
          alt="A table full of food"
          className={classes["main-image"]}
        />
        ;
      </div>
    </>
  );
};
export default Header;
