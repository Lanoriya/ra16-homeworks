import { useEffect, useState } from "react";
import { List } from "./components/List";

// Определяем тип для пользователя
type User = {
  id: number;
  name: string;
}

function App() {
  // Указываем тип для состояния как массив объектов User
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const users: User[] = await response.json(); // указываем тип получаемых данных
        setList(users);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <List users={list} />
  );
}

export default App;
