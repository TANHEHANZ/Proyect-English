import React from "react";
import { LANGUAGE_ENGLISH, LANGUAGE_SPANISH } from "../utils/constants";

const RenderDescription = ({ contenido, type, language, spanish }) => {
  const classNameSelect =
    "backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 ";
  const languageColorClass =
    {
      js: "bg-customJs100",
      java: "bg-customJava",
      python: "bg-customPython",
    }[language] || "bg-violet-900";

  return (
    <div
      className={`${
        type === LANGUAGE_ENGLISH ? classNameSelect : "bg-violet-950"
      } ${languageColorClass}  w-full p-8 border border-white border-opacity-30 rounded-lg  shadow-lg h-full my-auto flex flex-col gap-4`}
    >
      <section>
        <h3 className="uppercase text-[10px] tracking-widest py-2 ">
          {type === LANGUAGE_ENGLISH ? LANGUAGE_ENGLISH : LANGUAGE_SPANISH}
        </h3>
        <hr />
        <p>{contenido}</p>
      </section>
      {spanish && (
        <section>
          <h3 className="uppercase text-[10px] tracking-widest py-2 ">
            {LANGUAGE_SPANISH}
          </h3>
          <hr />
          <p>{spanish}</p>
        </section>
      )}
    </div>
  );
};

export default RenderDescription;
