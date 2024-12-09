import { useState } from "react";
import "./App.css";
import TextInput from "./Utilities/TextInput";
import UserContext from "./Contexts/UserContext";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRecipes from "./Pages/AllRecipes";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <>
      <UserContext.Provider value={{ userId: currentUserId, changeUserID: setUserId }}>

        <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='recipes' element={<AllRecipes></AllRecipes>} />
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
