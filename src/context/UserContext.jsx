import { createContext } from "react";

export const UserContext = createContext(null);


export function UserProvider({ children }) {
  const user = {
    name: "Ahmed",
    age: 25,
    email: "ahmed@gmail.com",
    role: "Frontend Developer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}