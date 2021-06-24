import React, { useState } from 'react'
import countries from './data/countries'
import Witnesses from './components/Witnesses'

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
    display: 'flex',
    justifyContent: 'center'
  }

//--------------------------- 
//-----------UI--------------
  return(
    <div style={backgroundStyle}>
      <Witnesses current={currentCountry} witness={currentWitness} getData={findCountryData}/>
    </div>
      
  )
}

export default App