import React, { useState, useEffect }from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error("Error fetching plants:", error));
  }, []);
  return (
    <div className="app">
      <Header Plantsy/>
      <PlantPage />
      {plants.map(plant => (
          <li key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
            <p>${plant.price}</p>
          </li>
        ))}
    </div>
  );
}

export default App;
