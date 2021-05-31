import styles from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  // onClick needs to be passed with an ? for optional
  onClick?: (event: any) => void;
}
const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
