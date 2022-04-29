import User from "./User";

type Props = {
  users: TUser[] | null;
  filteredUsers: TUser[] | null;
  onClick: (id: string) => void;
};

const UserList = ({ users, filteredUsers, onClick }: Props) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      {filteredUsers?.length === 0 ? (
        <div className="mt-6 text-2xl font-semibold text-white">
          No user found
        </div>
      ) : (
        <>
          {filteredUsers
            ? filteredUsers?.map((user: TUser) => (
                <User
                  key={user.login.md5}
                  user={user}
                  onClick={() => onClick(user.login.md5)}
                />
              ))
            : users?.map((user: TUser) => (
                <User
                  key={user.login.md5}
                  user={user}
                  onClick={() => onClick(user.login.md5)}
                />
              ))}
        </>
      )}
    </div>
  );
};

export default UserList;
