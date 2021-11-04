import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/book">Book</Link>
        </li>
        <li>
          <Link to="/products/carpet">Carpet</Link>
        </li>
        <li>
          <Link to="/products/online-course">Online Course</Link>
        </li>
      </ul>
    </>
  );
};

export default Welcome;
