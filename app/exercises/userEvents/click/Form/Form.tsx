import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();

  const handleClick = async () => {
    const response = await axios.get("https://api.example.com/random");
    setData(response.data);
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="inputField">Name</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleClick}>
        Hit API
      </button>
      {data ? data : null}
    </div>
  );
};
