import { useEffect, useState } from "react";

type UserDetails = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

type DetailsProps = {
  userId: number;
};

export function Details({ userId }: DetailsProps) {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Состояние для хранения данных пользователей
  const [cachedUserData, setCachedUserData] = useState<Record<number, UserDetails>>({});

  useEffect(() => {
    // Если данные для текущего userId уже есть в кэше, не загружаем снова
    if (cachedUserData[userId]) {
      setUserData(cachedUserData[userId]);
      return;
    }

    // Функция для загрузки данных
    const fetchUserDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных пользователя");
        }

        const data: UserDetails = await response.json();
        setUserData(data);
        setCachedUserData(prevData => ({ ...prevData, [userId]: data })); // Сохраняем данные в кэш
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId, cachedUserData]); // Загружаем данные при изменении userId или кэша

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Детали пользователя</h2>
      {userData ? (
        <>
          {userData.avatar ? (
            <img src={`${userData.avatar}?v=${Date.now()}`} alt={`${userData.name}'s avatar`} />
          ) : (
            <p>Аватар не доступен</p>
          )}
          <p>Город: {userData.details.city}</p>
          <p>Компания: {userData.details.company}</p>
          <p>Позиция: {userData.details.position}</p>
        </>
      ) : (
        <p>Выберите пользователя</p>
      )}
    </div>
  );
}
