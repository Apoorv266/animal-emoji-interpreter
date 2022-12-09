import React, { useState } from "react";
import "./App.css";

var knownEmoji = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐕": "Dog",
  "🦊": "Fox",
  "🐺": "Wolf",
  "🦝": "Raccoon",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger",
  "🐎": "Horse",
  "🦓": "Zebra",
  "🐖": "Pig",
  "🐪": "Camel",
  "🐘": "Elephant",
  "🐊": "Crocodile",
};

var emojiArray = Object.keys(knownEmoji);
function App() {
  const [inputVal, setinputVal] = useState("");

  function inputFieldFunc(e) {
    let userVal = e.target.value;
    let arrayVal = knownEmoji[userVal];
    setinputVal(arrayVal);

    if (arrayVal === undefined) {
      setinputVal("we don't have this in our database");
    }
    if (userVal === "") {
      setinputVal("");
    }
  }

  function clickHandler(item) {
    let arrayVal = knownEmoji[item];
    setinputVal(arrayVal);
  }
  return (
    <>
    <div className="main">
      <div className="app">
        <h1>Wildlife Emoji Interpreter</h1>
        <input
          type="text"
          className="input"
          placeholder="Put Your Emoji Here"
          onChange={(e) => inputFieldFunc(e)}
        />
    
      <h3>Click Below Emojis to know their meaning 👇</h3>
      <div className="emoji">
      {emojiArray.map((item) => {
        return (
          <span key={item} onClick={() => clickHandler(item)}>
            {item}
          </span>
        );
      })}
      </div>

      <h1>{inputVal}</h1>
      </div>
      </div>
    </>
  );
}

export default App;
