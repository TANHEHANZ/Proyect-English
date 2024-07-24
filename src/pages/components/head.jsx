import React from "react";
import py from "../../assets/py.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
const Head = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full py-24 ">
      <h1 className="text-violet-700  font-bold text-5xl  flex justify-center items-start flex-col ">
        Programming Fundamentals:{" "}
        <p>
          Comparison between{" "}
          <strong className="text-customJs">JavaScript</strong>,{" "}
          <strong className="text-customJava">Java</strong> and{" "}
          <strong className="text-customPython">Python</strong>
        </p>
      </h1>
      <section className="flex w-full p-4">
        <img src={py} alt="img py" className="w-16 h-16 object-cover " />
        <img src={js} alt="img js" className="w-16 h-16 object-cover" />
        <img src={java} alt="img java" className="w-16 h-16 object-cover" />
      </section>
    </div>
  );
};

export default Head;
