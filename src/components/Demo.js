import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering...");

  //   const prime = () => {
  //     console.log("Calculate prime number of ", text);
  //     return findNthPrime(text);
  //   };
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black rounded ${
        isDarkTheme ? "bg-red-500" : "bg-transparent"
      }`}
    >
      <div>
        <button
          className="px-2 py-1 my-1 bg-green-400 "
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          className="p-2 border border-gray-500 w-full rounded"
          placeholder="enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
