import React, { useState, useEffect } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useSelector } from "react-redux";

function RadioFilter({ handler, options, type }) {
  const [expand, setExpand] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const value = useSelector((state) => state.filters[type]);

  const onChangeHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      !(setSelectedOption === value) && handler(selectedOption);
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [selectedOption]);

  useEffect(() => {
    if (value) {
      if (!expand) {
        setExpand(true);
        setSelectedOption(value);
      }
    }
  }, [value]);

  return (
    <div>
      <div
        className={`flex justify-between items-center p-2.5 cursor-pointer ${
          !expand && "border-b -2"
        }`}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <p className="flex-grow cursor-pointer">{type}</p>
        {expand ? (
          <span>
            <MdOutlineExpandLess />
          </span>
        ) : (
          <span>
            <MdOutlineExpandMore />
          </span>
        )}
      </div>
      {expand && (
        <div className="pl-5 pt-5 flex flex-col gap-2">
          {options.map((option, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <input
                type="radio"
                id={option}
                name={type}
                value={option}
                onChange={onChangeHandler}
                checked={option === selectedOption}
              />
              <label className="cursor-pointer" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RadioFilter;
