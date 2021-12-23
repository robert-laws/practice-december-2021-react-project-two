import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <h1>My Articles</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  );
};
