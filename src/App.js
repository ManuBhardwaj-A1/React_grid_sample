
import './App.css';
import { useState } from "react";
import Primarybtn from './Primarybtn.js';

const App = () => {
  const [name, setName] = useState("");
  return(
    <div>
      <input
      placeholder="enter your name"
      onChange={(e) => setName(e.target.value)}
      />
      {name}
      <Primarybtn/>
      
      
      
      

    </div>
  )
}

export default App;
