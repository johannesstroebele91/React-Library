import "./AddUser.module.css";

const AddUser: React.FC = () => {
  return (
    <form className="input">
      {/* htmlFor connects label to the input id*/}
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button></button>
    </form>
  );
};

export default AddUser;
