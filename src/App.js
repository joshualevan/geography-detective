import React, { useState } from 'react'
import countries from './data/countries'

const App = () => {
  //state
  const [currentCountry, setCurrentCountry] = useState("The United States of America");
  const [currentWitness, setCurrentWitness] = useState("")

  //Find Country Data
  const findCountryData = (key, state) => {
    let value; 
    countries.map(country => {
      if(country.name === state){
        value = country[key];
      }
    })
    return value
  };

  //Style
  const backgroundStyle = {
    backgroundImage : `url(${findCountryData('background', currentCountry)})`,
    width : '100%',
    height : '100vh',
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition : 'fixed',
  }

  return(
      <div style={backgroundStyle}>{findCountryData('contitnent', currentCountry)}</div>
  )
}

export default App