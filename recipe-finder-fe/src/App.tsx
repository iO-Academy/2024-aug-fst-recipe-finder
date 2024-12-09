import { useState } from "react";
import "./App.css";
import UserContext from "./Contexts/UserContext";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRecipes from "./Pages/AllRecipes";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <div className="flex flex-col min-h-screen ">
      <UserContext.Provider value={{ userId: currentUserId, changeUserID: setUserId }}>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Login></Login>} />
            <Route path='recipes/:currentUserId' element={<AllRecipes></AllRecipes>} />
          </Routes>

        </BrowserRouter>
        <footer className="mt-auto text-center p-4">
          <p>Copyright © Blue Lobsters 2024</p>
        </footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
