import { UserProvider } from "./context/UserContext";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <Dashboard />;
    </UserProvider>
  );
};

export default App;
