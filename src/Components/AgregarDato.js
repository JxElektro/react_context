import { useContext } from "react";
import GastosContext from "../context/context";

function AgregarGasto() {

const { agregarGasto } = useContext(GastosContext);

  function handleSubmit(e) {
    e.preventDefault();
    const gasto = e.target.elements.gasto.value;
    agregarGasto(gasto);
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