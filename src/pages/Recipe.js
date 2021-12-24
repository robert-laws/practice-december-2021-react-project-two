import { useParams } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';
import { useTheme } from '../hooks/useTheme';
import { useEffect, useState } from 'react';
import { getFirestore, onSnapshot, doc } from 'firebase/firestore';

export const Recipe = () => {
  const { mode } = useTheme();
  const { id } = useParams();
  // const url = `http://localhost:3001/recipes/${id}`;
  // const { data: recipe, isPending, error } = useFetch(url);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const db = getFirestore();
    const docRef = doc(db, 'recipes', id);
    onSnapshot(
      docRef,
      (doc) => {
        if (doc.data()) {
          setRecipe({ ...doc.data(), id: doc.id });
        } else {
          setError('No recipe to load');
        }
      },
      (error) => {
        setError(error);
      }
    );
    setIsPending(false);
  }, [id]);

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
