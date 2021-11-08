import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
const MeetupList = (props) => {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
