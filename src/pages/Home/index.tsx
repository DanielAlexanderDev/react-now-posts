import { useEffect, useState } from "react";

interface UserInterface {
  name: string;
  lastName: string;
  email: string;
  _id: string;
  createdAt: string;
}

const Home = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <main>
      {users.map((user) => (
        <div
          className="flex flex-col justify-center items-center my-4"
          key={user._id}
        >
          <span className="text-xs text-gray-400">{user._id}</span>
          <h2 className="text-xl font-bold">{`${user.name} ${user.lastName}`}</h2>
          <p className="text-base font-light">{user.email}</p>
          <p className="text-sm font-thin">{user.createdAt.substring(0, 10)}</p>
        </div>
      ))}
    </main>
  );
};
export default Home;
