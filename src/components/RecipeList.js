import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return (
      <div className='recipe-list'>
        <p>No recipes found.</p>
      </div>
    );
  }

  return (
    <div className='recipe-list'>
      {recipes &&
        recipes.map((recipe) => (
          <div className={`card ${mode}`} key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} minutes to prepare.</p>
            <div>{recipe.instructions.substr(0, 99)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          </div>
        ))}
    </div>
  );
};
