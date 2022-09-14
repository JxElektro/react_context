
import React, { useState } from "react";
import Contador from "./Components/Contador";
import GastosMes from "./Components/gastoMes";
import AgregarGasto from "./Components/AgregarDato";
import './App.css';
import GastosContext from "./context/context";


function App() {
  
  const [gastos, actualizarGastos] = useState([]);

  function agregarGasto(gasto) {
    actualizarGastos([...gastos, gasto])
  }

  return (
    <GastosContext.Provider id="App" value={{
      gastos,
      agregarGasto
    }}>
    <h1>Gastos Mensuales</h1>
      
      
      <AgregarGasto />
      <GastosMes />
      <Contador />
    </GastosContext.Provider>
  );
}


export default App;