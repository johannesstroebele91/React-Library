import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // async / await is not working,
  // therefore use loading via useState
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Infinite loop, because the fetch function runs every time the component functions exectues (page renders)
  // and therefore also the change state every time we make an request
  // which in turn triggers the fetch function
  // Solution: useEffect hook which runs code ONLY under certain conditions
  // here only when the dependency isLoading is changes
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-5b8a0-default-rtdb.europe-west1.firebasedatabase.app/meetups"
    )
      .then((response) => {
        // from the response, the data can be read by first returning a promise
        return response.json();
        // and after the promise is successfully returned, the value can be read
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    if (isLoading) {
      return <p>Is loading...</p>;
    }
  }, [isLoading]);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
