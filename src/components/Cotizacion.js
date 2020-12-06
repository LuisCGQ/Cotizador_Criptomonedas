import React from "react";

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);
  return (
    <div className="">
      <p>
        Precio: <span>{resultado.PRICE}</span>
      </p>
      <p>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </p>
      <p>
        Precio más bajo dle día: <span>{resultado.LOWDAY}</span>
      </p>
      <p>
        Variación últimas 24 horas: <span>{resultado.CHANGEOCT24HOUR}</span>
      </p>
      <p>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Cotizacion;
