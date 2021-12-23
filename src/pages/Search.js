import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { RecipeList } from '../components';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const url = 'http://localhost:3001/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <main>
      <h2>Search Results for "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </main>
  );
};
