import React from "react";
import arrow from "../assets/arrow.svg";
import ComponentExplicacion from "./componetExplicacion";

const CustomSintaxis = ({ title, data }) => {
  return (
    <div className="flex flex-col gap-8 justify-center py-4">
      <h2 className="text-4xl font-bold pt-8 text-violet-900">{title}</h2>
      <div className="grid grid-cols-2 items-center gap-4 ">
        <article className="flex gap-4 col-span-2">
          <ComponentExplicacion
            contenidoes={data.dataEsExplication}
            contenidoen={data.dataEnExplication}
            language=""
          />
          {/* <img src={arrow} alt="Flecha" className="w-20 invert-[1]" /> */}
        </article>
        <article className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full col-span-2 ">
          <ComponentExplicacion
            contenidoes={data.dataEsJS}
            contenidoen={data.dataEnJS}
            language="js"
            codigo={data.codigoJS}
          />
          <ComponentExplicacion
            contenidoes={data.dataEsPY}
            contenidoen={data.dataEnPY}
            language="python"
            codigo={data.codigoPY}
          />
          <ComponentExplicacion
            contenidoes={data.dataEsJAVA}
            contenidoen={data.dataEnJAVA}
            language="java"
            codigo={data.codigoJAVA}
          />
        </article>
      </div>
    </div>
  );
};

export default CustomSintaxis;
