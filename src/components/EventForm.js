import "./EventForm.css";
import { useRef } from "react";
// import { useState} from "react";

// Note:Using useRef hook there is no need to add onChange and value proprty

export default function EventForm({addEventsProp}) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  const title = useRef();
  const date = useRef();

  //   Reset function
  const resetHandler = () => {
    // setTitle("");
    // setDate("");
    title.current.value =""
    date.current.value =""
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const event = {
        title: title.current.value,
        date: date.current.value,
        id: Math.floor(Math.random() * 10000)
    }
    addEventsProp(event)
    resetHandler()
  };

  return (
    <div>
      <form className="new-event-form" onSubmit={submitHandler}>
        <label>
          <span>Enter event : </span>
          <input
            type="text"
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
            ref={title}
          />
        </label>
        <label>
          <span>Date : </span>
          <input
            type="date"
            // onChange={(e) => setDate(e.target.value)}
            // value={date}
            ref={date}
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
