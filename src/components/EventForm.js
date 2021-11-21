import "./EventForm.css";

export default function EventForm() {
  return (
    <div>
      <form className="new-event-form">
          <label>
              <span>Enter event : </span>
              <input type="text" />
          </label>
          <label>
              <span>Date : </span>
              <input type="date" />
          </label>
          <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
