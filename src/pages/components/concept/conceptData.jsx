import React from "react";
import CustomSection from "../../../components/costomSection";
import { eng, es } from "./data";

const ConceptData = () => {
  return (
    <div>
      <CustomSection title={"Concept"} dataEn={eng} dataEs={es} />
    </div>
  );
};

export default ConceptData;
