import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  // function for Adding events to the list
  const addEvents = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });

    setShowModal(false)
  };

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

      {showEvents && (
        <EventList eventsArr={events} deleteHandler={deleteHandler} />
      )}

      {showModal && (
        <Modal closeHandlerProp={closeHandler} isSalesModal={true}>
          <EventForm addEventsProp={addEvents} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add Event</button>
      </div>
    </div>
  );
};

export default App;
