import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Home = () => {
  const { data, error, isPending } = useFetch('http://localhost:3001/articles');
  return (
    <div>
      <h2>All Articles</h2>
      <p>
        Read more about this on the <Link to='/about'>About Page</Link>
      </p>
      <hr />
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map((article) => (
          <div className='article' key={article.id}>
            <h3>
              <Link to={`/article/${article.id}`}>{article.title}</Link>{' '}
              <span>by {article.author}</span>
            </h3>
          </div>
        ))}
    </div>
  );
};
