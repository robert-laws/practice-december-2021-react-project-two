import { useSearchParams } from 'react-router-dom';

export const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const updateName = () => {
    setSearchParams({ name: 'John' });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        velit excepturi. In, omnis sapiente nobis harum nostrum accusamus sit
        tempore rerum facilis laudantium. Maiores nihil sit veniam voluptatum
        molestiae eos voluptate animi nostrum delectus?
      </p>
      {name && <p>Search is: {name}</p>}
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};
