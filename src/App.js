import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  // title delte handler
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

  // Modal close handler
  const closeHandler = () => {
    setShowModal(false);
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

      {showEvents && <EventList eventsArr={events} deleteHandler={deleteHandler}/>}

      {showModal && (
        <Modal closeHandlerProp={closeHandler} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            mollitia quasi voluptate recusandae nostrum. Voluptatem beatae ipsa,
            quia possimus similique facilis officia iusto totam, tenetur
            pariatur laborum? Maiores, delectus quasi?
          </p>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
};

export default App;
