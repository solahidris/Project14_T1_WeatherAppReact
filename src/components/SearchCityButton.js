import React from "react";

const SearchCityButton = ({onClick, disabled}) => {
    return(
        <div className="flex justify-center mt-5">
          <button
            onClick={onClick}
            className="py-2 px-4 bg-zinc-300 rounded"
            disabled={disabled}
          >
            Search City
          </button>
        </div>
    )
};

export default SearchCityButton;