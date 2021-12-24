import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
// import { useFetch } from '../hooks/useFetch';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export const Create = () => {
  const [newIngredient, setNewIngredient] = useState('');
  const ingredientInput = useRef(null);
  const [recipe, setRecipe] = useState({
    title: '',
    cookingTime: '',
    instructions: '',
    ingredients: [],
  });
  // const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // const { postData, data, error } = useFetch(
  //   'http://localhost:3001/recipes',
  //   'POST'
  // );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = (event) => {
    event.preventDefault();
    const ingredient = newIngredient.trim();

    if (ingredient && !recipe.ingredients.includes(ingredient)) {
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, ingredient],
      });
    }

    setNewIngredient('');
    ingredientInput.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(recipe);
    // postData(recipe);

    const db = getFirestore();
    const colRef = collection(db, 'recipes');

    try {
      addDoc(colRef, recipe).then(() => {
        navigate('/');
      });
    } catch (err) {
      setError(err);
    }
  };

  // useEffect(() => {
  //   if (data && !error) {
  //     navigate('/');
  //   }
  // }, [data, error, navigate]);

  return (
    <main className='create'>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={recipe.title}
          />
        </label>

        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              ref={ingredientInput}
            />
            <button className='btn' onClick={addIngredient}>
              add
            </button>
          </div>
          <div className='ingredient-list'>
            <strong>current ingredients:</strong>{' '}
            {recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient) => (
                <span className='single-ingredient' key={ingredient}>
                  {ingredient}
                </span>
              ))
            ) : (
              <span>no ingredients</span>
            )}
          </div>
        </label>

        <label>
          <span>Cooking time (in minutes):</span>
          <input
            type='number'
            name='cookingTime'
            onChange={handleChange}
            value={recipe.cookingTime}
          />
        </label>
        <label>
          <span>Instructions:</span>
          <textarea
            type='text'
            name='instructions'
            onChange={handleChange}
            value={recipe.instructions}
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </main>
  );
};
