import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Login A11y form</h1>
        <Form />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
