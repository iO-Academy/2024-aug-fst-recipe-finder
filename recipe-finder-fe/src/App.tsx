import { useState } from "react";
import "./App.css";
import TextInput from "./Utilities/TextInput";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Login></Login>;
      <TextInput />
    </>
  );
}

export default App;
