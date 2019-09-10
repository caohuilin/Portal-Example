import * as React from "react";
import { render } from "react-dom";
import TableExample from './table'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TableExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
