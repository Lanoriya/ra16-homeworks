import { useJsonFetch } from './useJsonFetch';

export const GetLoading = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <p>Data: {JSON.stringify(data)}</p>;
};