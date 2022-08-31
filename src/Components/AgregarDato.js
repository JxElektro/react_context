import { useContext } from "react";
import gastosContext from "./context";

function AgregarGasto() {

const newGasto = useContext(gastosContext);


  function handleSubmit(e) {
    e.preventDefault();
    const gasto = e.target.elements.gasto.value;
    newGasto(e => [...e, gasto])
    console.log(gasto)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input autocomplete="off" type="number" id="gasto" />
        <button type="Submit"> Agregar gasto </button>
      </form>
    </>
  )
}

export default AgregarGasto;