import React from 'react'
import HOC from "./HOC";
import "./App.css"

const App = ({vrijednost}) => {
  return (
    <div className="App">
     <h1>Ja sam {vrijednost.ime} {vrijednost.prezime}</h1>
     <p>Ja radim kao {vrijednost.posao}</p>
    </div>
  )
}

export default HOC(App);

