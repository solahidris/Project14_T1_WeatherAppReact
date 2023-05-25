import React from "react";

const CityInputBox = ({onChange}) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        onChange={onChange}
        placeholder="ex: London"
        className="rounded-md py-2 px-5"
      />
    </div>
  );
};

export default CityInputBox;