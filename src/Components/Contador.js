import { useContext } from "react";
import gastosContext from "./context";

function Contador() {
  const newGasto = useContext(gastosContext);

  let total = 0;
  for (let i = 0; i < newGasto.length; i++)
    total += Number(newGasto[i])

  return <div> Gasto mensual: ({parseInt(total)}  )</div>;
}

export default Contador;