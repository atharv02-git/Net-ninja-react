import "./EventForm.css";
import { useState } from "react";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  //   Reset function
  const resetHandler = () => {
    setTitle("");
    setDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const event = {
        title: title,
        date: date,
        id: Math.floor(Math.random() * 10000)
    }
    console.log(event)
    resetHandler()
  };

  return (
    <div>
      <form className="new-event-form" onSubmit={submitHandler}>
        <label>
          <span>Enter event : </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Date : </span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
