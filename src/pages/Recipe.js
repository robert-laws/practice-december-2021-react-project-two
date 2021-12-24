import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useTheme } from '../hooks/useTheme';

export const Recipe = () => {
  const { mode } = useTheme();
  const { id } = useParams();
  const url = `http://localhost:3001/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <main>
      <h2>Recipe Details</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <div className={`recipe ${mode}`}>
          <h3>
            {recipe.title}{' '}
            <span className='preparation'>
              ({recipe.cookingTime} minutes to prepare)
            </span>
          </h3>

          <p className='ingredients'>
            <strong>Ingredients</strong>
          </p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className='instructions'>{recipe.instructions}</p>
        </div>
      )}
    </main>
  );
};
