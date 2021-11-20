import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

const App = () => {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showEvents);

  const deleteHandler = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        if (id !== event.id) {
          return true;
        } else {
          return false;
        }
      });
    });
    console.log(`id ${id} clicked`);
  };

  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle={subtitle} />

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

      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button
              onClick={() => {
                deleteHandler(event.id);
              }}
            >
              Delete event
            </button>
          </div>
        ))}

      {/* <Modal>
        <h2>10% off Coupon code!</h2>
        <p>use the code ABDVK10 at the checkout!</p>
      </Modal> */}
      <Modal>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia quasi voluptate recusandae nostrum. Voluptatem beatae ipsa, quia possimus similique facilis officia iusto totam, tenetur pariatur laborum? Maiores, delectus quasi?</p>
      </Modal>
    </div>
  );
};

export default App;
