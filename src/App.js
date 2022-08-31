
import React from "react";
import { useContext } from "react";
import Contador from "./Components/Contador";
import GastosMes from "./Components/gastoMes";
import AgregarGasto from "./Components/AgregarDato";
import './App.css';
import gastosContext from "./Components/context";




function App() {
  
  const newGasto = useContext(gastosContext);

  return (
    <gastosContext.Provider value={newGasto}>
      <Contador />
      <h1>hola</h1>
      <AgregarGasto />
      <GastosMes />
    </gastosContext.Provider>
  );
}


export default App;