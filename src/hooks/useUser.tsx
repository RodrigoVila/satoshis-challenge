import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const users = useContext(UserContext);
  if (users === undefined) {
    throw new Error("useUser must be used within a CountProvider");
  }
  return users;
};

export default useUser;
