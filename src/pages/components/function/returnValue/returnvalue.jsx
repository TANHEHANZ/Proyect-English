import React from "react";
import { dataFunciontReturn } from "./dataFuncionR";
import CustomSintaxis from "../../../../components/customSintaxis";

const ReturnFuncion = () => {

  return (
    <div>
      <CustomSintaxis title={"Functions with return values"} data={dataFunciontReturn} />
    </div>
  );
};

export default ReturnFuncion;