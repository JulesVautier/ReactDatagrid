import * as React from "react";
import * as ReactDOM from "react-dom";
import Datagrid from "./components/Datagrid";

ReactDOM.render(
  <Datagrid name="World" href="localhost:8080/data"/>,
  document.getElementById("root")
);
