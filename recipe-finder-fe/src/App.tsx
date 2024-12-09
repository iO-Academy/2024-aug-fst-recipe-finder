import { useState } from "react";
import "./App.css";
import TextInput from "./Utilities/TextInput";
import UserContext from "./Contexts/UserContext";
import Login from "./Pages/Login";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <div className="flex flex-col min-h-screen ">
      <UserContext.Provider
        value={{ userId: currentUserId, changeUserID: setUserId }}
      >
        <Login></Login>;
        <TextInput />
        <footer className="mt-auto text-center p-4">
          <p>Copyright © Blue Lobsters 2024</p>
        </footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
