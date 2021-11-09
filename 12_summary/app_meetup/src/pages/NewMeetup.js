import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  // useHistory hook enables to manipulate the browser history
  // push methods enables to navigate somewhere
  const history = useNavigate();

  const addMeetupHandler = (meetupData) => {
    // fetch() enables to send http request to the backend API
    // navigates away, when the request succeeded (promise returned successfully)
    fetch(
      "https://react-getting-started-5b8a0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }.then(() => history.replace("/"))
    );
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
