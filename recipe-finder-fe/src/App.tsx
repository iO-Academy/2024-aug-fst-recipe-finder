import { useState } from "react";
import "./App.css";
import TextInput from "./Utilities/TextInput";
import UserContext from "./Contexts/UserContext";

function App() {
  const [currentUserId, setUserId] = useState(0);

  return (
    <>
      <UserContext.Provider value={{ userId: currentUserId, changeUserID: setUserId }} >
        <TextInput />
      </UserContext.Provider>
    </>
  );
}

export default App;
