import React from "react";

export default function EventList({eventsArr,deleteHandler}) {
  return (
    <div>
      {eventsArr.map((event, index) => (
        <div key={event.id}>
        <h2>{index} - {event.title}</h2>
        <button onClick={() => {deleteHandler(event.id)}}> Delete event </button>
      </div>
      ))}
    </div>
  );
}
