import React, { useState, useContext } from "react";

const UserNameContext = React.createContext();
const UserNameUpdateContext = React.createContext();

export const useUserName = () => {
  return useContext(UserNameContext);
};

export const useUpdateUserName = () => {
  return useContext(UserNameUpdateContext);
};

export const UserProvider = ({ value, children }) => {
  const [userName, setUserName] = useState(value);
  return (
    <UserNameContext.Provider value={userName}>
      <UserNameUpdateContext.Provider value={setUserName}>
        {children}
      </UserNameUpdateContext.Provider>
    </UserNameContext.Provider>
  );
};

export default UserProvider;
