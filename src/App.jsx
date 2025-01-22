import { useCallback } from "react";
import { useEffect, useState, useRef } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [includeSpecialChar, setIncludeSpecialChar] = useState(false);
  let [includeNumbers, setIncludeNumbers] = useState(false);
  let [length, setLength] = useState(8);
  let textInputRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123546789";
    let specialChar = "{}/?[]|^&*@#";
    if (includeNumbers) str += num;
    if (includeSpecialChar) str += specialChar;

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
      setPassword(pass);
    }
  }, [length, includeNumbers, includeSpecialChar]);

  useEffect(() => {
    generatePassword();
  }, [includeNumbers, includeSpecialChar, length]);

  const handleCopying = () => {
    // console.log("copied");
    window.navigator.clipboard.writeText(password);
    textInputRef.current.select();
  };

  return (
    <>
      <div className="h-screen w-full bg-black py-11">
        <div className="p-12 w-1/2 bg-indigo-950 mx-auto rounded-3xl">
          <input
            type="search"
            id="default-search"
            className="w-3/4 p-2 text-sm text-gray-900 border border-gray-300 rounded-s-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            value={password}
            ref={textInputRef}
            readOnly
          />
          <button
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-e-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            onClick={handleCopying}
          >
            Copy
          </button>

          <div className="flex mt-2">
            <input
              type="range"
              name="length"
              id="length"
              min={1}
              max={50}
              value={length}
              onChange={(e) => setLength(e.currentTarget.value)}
            />
            <label htmlFor="lenth" className="text-white ms-2">
              Length: {length}
            </label>
            <input
              type="checkbox"
              name="number"
              id="numberCheckbox"
              className="ms-3"
              onClick={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberCheckbox" className="text-white ms-2">
              Number
            </label>
            <input
              type="checkbox"
              name="character"
              id="characterCheckbox"
              className="ms-3"
              onClick={() => {
                setIncludeSpecialChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterCheckbox" className="text-white ms-2">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
