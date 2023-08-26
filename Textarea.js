import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Enter your text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText(" ");
  };

  return (
    <>
      <div className="container my-4">
        <div className="form-floating">
          <h1>Enter your text to analyze</h1>
          <textarea
            className="form-control"
            placeholder="Enter your text here"
            id="floatingTextarea2"
            value={text}
            onChange={handleOnChange}
            style={{
              height: "300px",
              display: "flex",
              border: "solid 1px",
              width: "800px",
              justifyContent: "center",
              padding: "50px",
            }}
          />
          <label htmlFor="floatingTextarea2"></label>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Click to change to uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleLowClick}
          >
            Click to change to lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3 ">
        <h3> your text summary</h3>
        <p className="my-3">
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words are present with characters <b>{text.length}</b>
        </p>
        <p>
          <b>
            {0.8 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes
          </b>{" "}
          is required to read your text
        </p>
      </div>
    </>
  );
}
