import { useFetch } from '../hooks/useFetch';
import { RecipeList } from '../components';

export const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3001/recipes');
  return (
    <main className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </main>
  );
};
