import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchUsers } from "../services";

const initialValue = { users: [], isLoading: true };

interface IProps {
  children: ReactNode;
}

interface IContext {
  users: TUser[];
  isLoading: boolean;
}

export const UserContext = createContext<IContext>(initialValue);

export const UserProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isLoading, setLoading] = useState(true);

  const { Provider } = UserContext;

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return <Provider value={{ users, isLoading }}>{children}</Provider>;
};
