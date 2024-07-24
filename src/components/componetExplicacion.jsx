import React from "react";
import { LANGUAGE_ENGLISH, LANGUAGE_SPANISH } from "../utils/constants";

const ComponentExplicacion = ({
  contenidoes,
  contenidoen,
  language,
  codigo,
}) => {
  const languageColorClass =
    {
      js: "bg-customJs",
      java: "bg-customJava",
      python: "bg-customPython",
    }[language] || "bg-violet-900";

  return (
    <div
      className={`backdrop-filter backdrop-blur-lg bg-opacity-20 ${languageColorClass} w-full p-8 border border-white border-opacity-30 rounded-lg shadow-lg h-full my-auto flex flex-col gap-4`}
    >
      <div>
        <h3 className="uppercase text-[10px] tracking-widest py-2 ">
          {LANGUAGE_ENGLISH}
        </h3>
        <hr />
        <p>{contenidoen}</p>
      </div>
      <div className="opacity-30 hover:opacity-100">
        <h3 className="uppercase text-[10px] tracking-widest py-2 ">
          {LANGUAGE_SPANISH}
        </h3>
        <hr />
        <p>{contenidoes}</p>
      </div>
      {codigo && (
        <pre className="bg-customCode text-neutral-500 rounded-lg border border-gray-600 overflow-x-auto">
          <code className="text-sm">{codigo} </code>
        </pre>
      )}
    </div>
  );
};

export default ComponentExplicacion;
