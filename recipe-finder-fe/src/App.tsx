import { useState } from "react";
import "./App.css";
import UserContext from "./Contexts/UserContext";
import Login from "./Pages/Login";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <>
      <UserContext.Provider value={{ userId: currentUserId, changeUserID: setUserId }} >
        <Login></Login>;
      </UserContext.Provider>
    </>
  );
}

export default App;
