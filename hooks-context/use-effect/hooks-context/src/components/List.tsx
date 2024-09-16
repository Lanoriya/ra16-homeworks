import { useState } from "react";
import { Details } from "./Details";

type User = {
  id: number;
  name: string;
};

type ListProps = {
  users: User[];
};

export function List({ users }: ListProps) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="about-container">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleUserClick(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
      
      {selectedUserId !== null && <Details userId={selectedUserId} />}
    </div>
  );
}
