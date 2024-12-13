import React from "react";

interface UserContextType {
  userId: number;
  changeUserId: React.Dispatch<React.SetStateAction<number>>;
}

const UserContext = React.createContext<UserContextType>({
  userId: 0,
  changeUserId: () => {},
});

export default UserContext;
