import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Index tends to have a lot of other setup stuff in it,
// so it's cleaner to put the App component in a separate file

ReactDOM.render(<App />, document.querySelector("#root"));
