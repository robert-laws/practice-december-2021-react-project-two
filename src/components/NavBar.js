import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { useTheme } from '../hooks/useTheme';

export const NavBar = () => {
  const { color } = useTheme();

  return (
    <div className={`navbar ${color}`}>
      <nav>
        <NavLink className='brand' to='/'>
          <h1>Cooking App</h1>
        </NavLink>
        <div className='tools'>
          <SearchBar />
          <NavLink to='/create'>Create Recipe</NavLink>
        </div>
      </nav>
    </div>
  );
};
