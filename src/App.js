import React, { useState } from 'react'
import countries from './data/countries'
import Witnesses from './components/Witnesses'
import Nav from './components/Nav'
import Info from './components/Info'


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

  //Set Current Country
  const handlerSetCurrentCountry = e => {
    setCurrentCountry(e.target.value)
  }

  //Style
  const backgroundStyle = {
    backgroundImage : `url(${findCountryData('background', currentCountry)})`,
    width : '100%',
    height : '100vh',
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition : 'fixed',
    display: 'flex',
    alignItems: 'center',
    flexDirection : 'column'
  }

//--------------------------- 
//-----------UI--------------
  return(
    <div style={backgroundStyle}>
      <Nav current={currentCountry} setCurrent={handlerSetCurrentCountry} getData={findCountryData}/>
      <div className="content-container">
        <Witnesses current={currentCountry} witness={currentWitness} getData={findCountryData}/>
        <Info current={currentCountry}/>
      </div>
    </div>
      
  )
}

export default App