import React, { useState } from "react";

export default function About() {
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtnText] = useState("Enable dark mode");

  const toggle = () => {
    if (style.color === "black" && style.backgroundColor === "white") {
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
      setbtnText("Disable dark mode");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setbtnText("Enable Dark mode");
    }
  };

  return (
    <>
      <div className="container my-4" style={style}>
        <h1>About</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                style={style}
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                value="btntext"
              >
                Uppercase Button
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>It converts text provided to it's uppercase form</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={style}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                value="btntext"
              >
                Lowercase Button
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>It converts text provided to it's lowercase form</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={style}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                value="btntext"
              >
                Clear Button
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>It clears the Textarea</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3 mx-3 pb-3">
          <button type="button" onClick={toggle} className="btn btn-primary">
            Enable Dark mode
          </button>
        </div>
      </div>
    </>
  );
}
