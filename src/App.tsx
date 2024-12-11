import { useState } from "react";
import UserContext from "./Contexts/UserContext";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRecipes from "./Pages/AllRecipes";
import NotFound from "./Pages/NotFound";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UserContext.Provider
        value={{ userId: currentUserId, changeUserId: setUserId }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="recipes/:currentUserId" element={<AllRecipes />} />
            <Route path="*" element={<NotFound />} />
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
