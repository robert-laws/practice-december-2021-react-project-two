import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);

    setTerm('');
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearch}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
  );
};
