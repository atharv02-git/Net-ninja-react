import "./App.css";
import { useState } from "react";
import Title from './components/Title';

const App = () => {
  const[showEvents,setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showEvents)

  const deleteHandler = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        if(id !== event.id){
          return true
        }else{
          return false
        }
      })
    })
    console.log(`id ${id} clicked`);
  };

  return (
    <div className="App">
      <Title />
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>
      )}

      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>
      )}

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => {deleteHandler(event.id)}}>Delete event</button>
        </div>
      ))}
    </div>
  );
};

export default App;
