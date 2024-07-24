import React from "react";
import arrow from "../assets/arrow.svg";
import RenderDescription from "./sectionEs";
import { LANGUAGE_ENGLISH, LANGUAGE_SPANISH } from "../utils/constants";
const CustomSection = ({ title, dataEs, dataEn ,language}) => {
  
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold pt-8">{title}</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <RenderDescription type={LANGUAGE_SPANISH} contenido={dataEs} language={language}/>
        <img src={arrow} alt="Flecha" className="w-20 invert-[1] hidden  md:flex " />
        <RenderDescription type={LANGUAGE_ENGLISH} contenido={dataEn} language={language} />
      </div>
    </div>
  );
};

export default CustomSection;
