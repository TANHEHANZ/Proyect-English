import React from "react";
import CustomSintaxis from "../../../components/customSintaxis";
import { dataSwitch } from "./data";

const Switch = () => {
  return (
    <div>
      <CustomSintaxis title={"Switch"} data={dataSwitch} />
    </div>
  );
};

export default Switch;
