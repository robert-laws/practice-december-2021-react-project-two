import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main>
      <h2>Page Not Found</h2>
      <Link to='/'>Return to the Home Page</Link>
    </main>
  );
};
