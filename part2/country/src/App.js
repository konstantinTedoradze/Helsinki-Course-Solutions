import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";

function App() {
  const [countriesArray, setCountriesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showCountry,setShowCountry] = useState(null);

  const getCountriesData = async () => {
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        setCountriesArray(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);


  let filteredArray = countriesArray.filter((country) => {
    return (
      inputValue !== "" &&
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  if(inputValue === ""){
    console.log('kote11');
  }

  let shownOneCountry = showCountry && inputValue !== '' && showCountry.name.common.toLowerCase().includes(inputValue.toLowerCase());

  console.log(inputValue,'value of inputttt')
  return (
    <div className="App">
      <label>find countries</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {shownOneCountry ? <Country country={showCountry} /> : filteredArray && filteredArray.length === 1 ? (
        filteredArray.map((country) => (
          <Country key={country.idd.root} country={country} />
        ))
      ) : filteredArray.length >= 10 ? (
        <h2>Too many matches, specify another filter</h2>
      ) : (
        filteredArray.map((country, index) => {
          return (
            <div key={index}>
              <span style={{ fontWeight: "bold" }}>{country.name.common}</span>
              <button onClick={() => setShowCountry(country)}>
                show
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
