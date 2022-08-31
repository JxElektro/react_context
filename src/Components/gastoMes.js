import { useContext } from "react";
import gastosContext from "./context";

function GastosMes(item) {

  const newGasto = useContext(gastosContext);

  return (
    <ul>
      {item.map((gasto) => (<li key={gasto}>{gasto}</li>
      ))}
    </ul>
  );
}

export default GastosMes;