import React from "react";
import ReturnFuncion from "./returnValue/returnvalue";
import CustomSection from "../../../components/costomSection";
import { eng, es } from "./dataFuncionts";
import EnyValue from "./enyvalue/enyValue";

const Functions = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-violet-950">Types of functions</h2>
      <CustomSection title={"Concept"} dataEn={eng} dataEs={es} />

      <ReturnFuncion />
      <EnyValue />
    </div>
  );
};

export default Functions;
