// import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { RecipeList } from '../components';
// import firebaseApp from '../firebase/config';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

export const Home = () => {
  // const { data, isPending, error } = useFetch('http://localhost:3001/recipes');
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const db = getFirestore();
    const colRef = collection(db, 'recipes');

    const unsubscribeSnaphot = onSnapshot(
      colRef,
      (snapshot) => {
        let recipes = [];
        if (snapshot.empty) {
          setError('No recipes to load');
        } else {
          setError('');
          snapshot.docs.forEach((recipe) => {
            recipes.push({
              id: recipe.id,
              ...recipe.data(),
            });
          });
          setData(recipes);
        }
      },
      (error) => {
        setError(error);
      }
    );
    setIsPending(false);

    return () => {
      unsubscribeSnaphot();
    };
  }, []);

  return (
    <main className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </main>
  );
};
