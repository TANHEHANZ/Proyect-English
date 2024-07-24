import React from "react";
import { eng, es } from "../concept/data";
import CustomSintaxis from "../../../components/customSintaxis";
import { dataif } from "./data";

const Ifjs = () => {

  return (
    <div>
      <CustomSintaxis title={"If in Js"} data={dataif} />
    </div>
  );
};

export default Ifjs;
