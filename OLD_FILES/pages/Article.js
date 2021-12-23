import { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Article = () => {
  const { id } = useParams();
  const url = 'http://localhost:3001/articles/' + id;
  const { data: article, error, isPending } = useFetch(url);

  const navigate = useNavigate();

  const redirectUser = useCallback(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, [navigate]);

  useEffect(() => {
    if (error) {
      redirectUser();
    }
  }, [error, redirectUser]);

  return (
    <div>
      <h3>Article Details</h3>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {article && (
        <div className='article'>
          <h3>
            {article.title} <span>by {article.author}</span>
          </h3>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};
