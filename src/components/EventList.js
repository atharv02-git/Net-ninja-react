import React from "react";
import styles from "./EventList.module.css";

export default function EventList({eventsArr,deleteHandler}) {
  return (
    <div>
      {eventsArr.map((event, index) => (
        <div className={styles.card} key={event.id}>
        <h2>{index} - {event.title}</h2>
        <button onClick={() => {deleteHandler(event.id)}}> Delete event </button>
      </div>
      ))}
    </div>
  );
}
