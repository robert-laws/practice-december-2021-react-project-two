import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  return (
    <div className='navbar'>
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
