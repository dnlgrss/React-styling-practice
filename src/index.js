//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var time = date.getHours();
console.log(time);

var colorText = {
  color: "red"
};

let text;
if (time < 12) {
  text = "Good Morning";
} else if (time < 18) {
  text = "Good Afternoon";
  colorText.color = "green";
} else {
  text = "Good Evening";
  colorText.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={colorText}>
      {text}
    </h1>
  </div>,
  document.getElementById("root")
);
