import { useState, useEffect } from "react";

import { fetchUsersByNat } from "../services";
import useModal from "../hooks/useModal";
import useUser from "../hooks/useUser";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import UserInfoModal from "./UserInfoModal";
import Multiselect from "./MultiSelect";
import Loader from "./Loader";

const Dashboard = () => {
  // What user types in the search bar
  const [searchValue, setSearchValue] = useState("");
  // Filter applied to the user list
  const [filteredUsers, setFilteredUsers] = useState<TUser[] | null>(null);
  // User that will be displayed at UserInfoModal
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
  // Dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // Nationalities chosen in the dropdown
  const [selectedNats, setSelectedNats] = useState<INats[]>([]);

  // Hooks
  const { isUserModalOpen, toggleUserModal } = useModal();
  const { users, isLoading } = useUser();

  // Dropdown state handlers
  const openDropdown = (): void => setDropdownOpen(true);
  const closeDropdown = (): void => setDropdownOpen(false);

  // Search bar handler
  const onChangeText = (value: string): void => {
    // Deletees selected nats to prevent double filtering (possible implementation in the future)
    selectedNats.length > 0 && setSelectedNats([]);
    setSearchValue(value);
  };

  // Displays detailed user info when User component is clicked
  const onUserClick = (id: string): void => {
    const user = filteredUsers
      ? filteredUsers?.find((user) => user.login.md5 === id)
      : users?.find((user) => user.login.md5 === id);

    user && setSelectedUser(user);
    toggleUserModal();
    closeDropdown();
  };

  // Adds new pill from the dropdown. This triggers effect for fetching users by nat
  const addItem = (item: INats): void => {
    setSearchValue("");
    if (selectedNats.length < 3) {
      setSelectedNats([...selectedNats, item]);
    }
  };

  // Removes existing pill from the list. If list is empty, then gets initial user list. This triggers useEffect for fetching
  const removeItem = (item: INats): void => {
    setSearchValue("");
    const filtered = selectedNats.filter((el) => el !== item);
    setSelectedNats(filtered);
  };

  // Filter users by name on every keystroke after 2nd written character
  useEffect(() => {
    if (users && searchValue.length > 1) {
      const filteredList = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`;
        return fullName.toLowerCase().includes(searchValue.toLowerCase());
      });

      filteredList.length > 0
        ? setFilteredUsers(filteredList)
        : setFilteredUsers([]);
    } else {
      setFilteredUsers(null);
    }
  }, [searchValue]);

  // Gets users by nationality after being selected inside the dropdown
  useEffect(() => {
    if (selectedNats.length > 0) {
      const natString = selectedNats
        .map((item) => item.symbol)
        .join(",")
        .toLowerCase();
      fetchUsersByNat(natString).then((users) => setFilteredUsers(users));
    } else {
      // If no nats are selected, "UserList" component will display original list
      setFilteredUsers(null);
    }
  }, [selectedNats]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="flex h-full min-h-screen min-w-[350px] flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
        <UserInfoModal
          isOpen={isUserModalOpen}
          toggle={toggleUserModal}
          user={selectedUser}
        />
        <div className="w-full max-w-7xl md:min-w-[500px]">
          <div
            className="my-2 text-center text-3xl md:text-4xl"
            onClick={closeDropdown}
          >
            {"Satoshi's Challenge"}
          </div>
          <div className="mx-auto box-border flex w-full flex-col flex-wrap items-center justify-center px-2  md:max-w-3xl lg:max-w-5xl xl:flex-row">
            <SearchBar
              onChange={onChangeText}
              onClick={closeDropdown}
              value={searchValue}
            />
            <Multiselect
              isOpen={isDropdownOpen}
              selectedNats={selectedNats}
              open={openDropdown}
              close={closeDropdown}
              addItem={addItem}
              removeItem={removeItem}
            />
          </div>
          <UserList
            users={users}
            filteredUsers={filteredUsers}
            onClick={onUserClick}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
