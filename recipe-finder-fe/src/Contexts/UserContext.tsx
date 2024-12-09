import React from "react";

interface userTypeContext {
    userId: number,
    changeUserID: React.Dispatch<React.SetStateAction<number>>
}

const UserContext = React.createContext<userTypeContext>({ userId: 0, changeUserID: () =>{} });

export default UserContext;