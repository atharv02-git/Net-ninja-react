import React from "react";
import styles from "./EventList.module.css";

export default function EventList({eventsArr,deleteHandler}) {
  return (
    <div>
      {eventsArr.map((event, index) => (
        <div className={styles.card} key={event.id}>
        <h2>{index+1} - {event.title}</h2>
        <h3 style={{color: "#555"}}>Date reminder: {event.date}</h3>
        <button onClick={() => {deleteHandler(event.id)}}> Delete event </button>
      </div>
      ))}
    </div>
  );
}
