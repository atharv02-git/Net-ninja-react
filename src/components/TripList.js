import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

// styles
import "./TripList.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  // What is 2 arguments are passed inside useFetch and one oh them is direct dependencies(ie:Arrays,objects) and after logging them it goes into infinte loop and the best way to handle it is using useRef hook refer the solution in useFetch.js
  const { data: trips, isPending, isError } = useFetch(url, { type: "Get" });

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading trips...</div>}
      {isError && <div>{isError}</div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
