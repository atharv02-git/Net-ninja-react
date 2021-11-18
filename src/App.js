import "./App.css";
import { useState } from "react";

const App = () => {
const[name,setName] = useState('Hodor')

const changeNameHandler = () => {
  setName('Arya')
  console.log(name)
}
  
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={changeNameHandler}>Change Name</button>
    </div>
  );
};

export default App;
