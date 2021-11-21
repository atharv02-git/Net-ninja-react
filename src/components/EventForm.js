import "./EventForm.css";
import { useState} from 'react';

export default function EventForm() {
    const[title,setTitle] = useState('')
    const[date,setDate] = useState('')
  return (
    <div>
      <form className="new-event-form">
          <label>
              <span>Enter event : </span>
              <input type="text" onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label>
              <span>Date : </span>
              <input type="date" onChange={(e) => setDate(e.target.value)}/>
          </label>
          <p>Title: {title}, Date: {date}</p>
          <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}