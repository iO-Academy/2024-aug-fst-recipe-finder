import React from "react";

interface userTypeContext {
  userId: number;
  changeUserId: React.Dispatch<React.SetStateAction<number>>;
}

const UserContext = React.createContext<userTypeContext>({
  userId: 0,
  changeUserId: () => {},
});

export default UserContext;
