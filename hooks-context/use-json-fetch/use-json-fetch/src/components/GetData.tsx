import { useJsonFetch } from './useJsonFetch';

export const GetData = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <p>Data: {JSON.stringify(data)}</p>;
};