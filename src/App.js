import "./App.css";
// import {axios} from "axios";
import { useState, useEffect } from "react";
import Country from "./components/Country";

const url = "https://restcountries.com/v3.1/all";

function App() {
const [data, setData] = useState([]);

async function fetchData() {
    fetch (url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
    console.log(data, "data");
  }



  useEffect(() => {
    fetchData();
  }, []);

  //let Country = data.slice(0,6);
  console.log(data, "data");

  return (
    <div className="App">
      <h2>Country List</h2>

      {data.slice(0,6).map((item) => {
        console.log(item);
          return ( 
            <Country key={item.id}
            name={item.name.common}
            region={item.region}
            map={item.maps.googleMaps}
            flag = {item.flag}
            border = {item.borders}
            />
            );
            
          })}  
    </div>
  );
}

export default App;
