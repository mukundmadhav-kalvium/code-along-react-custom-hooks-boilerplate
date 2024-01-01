import React, { useState, useEffect } from "react";

const UseStorage = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("content");
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("content", JSON.stringify(newValue));
    sessionStorage.setItem("content", JSON.stringify(newValue));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        placeContent: "center",
        marginTop: "100px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{
          width: "40vw",
          height: "20px",
          border: "2px solid violet",
          borderRadius: "5px",
          padding: "10px",
        }}
        placeholder="Enter your Text"
      />
    </div>
  );
};

export default UseStorage;
