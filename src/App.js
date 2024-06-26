import React from "react";
import { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);                  //setting the value of variable tours here

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);                //filter will return an array
    setTours(newTours);
  }

  if(tours.length === 0){                  //now due to useState control will go to all those places where this tour was written
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return  (
    <div className="App">
       
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
