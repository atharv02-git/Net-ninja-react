import { useLocation } from "react-router";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  //output in the console -> ?name=abd

  const queryParams = new URLSearchParams(queryString);
  const getName = queryParams.get("name");
  
  return (
    <div>
      <h2>Hey {getName}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat
        placeat! Necessitatibus corporis atque tempora, labore architecto quam
        explicabo quas porro vitae totam, libero deleniti temporibus quis, at ex
        suscipit.
      </p>
    </div>
  );
}
