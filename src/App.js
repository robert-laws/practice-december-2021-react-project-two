import './sass/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Create, Home, Recipe, Search, NotFound } from './pages';
import { NavBar } from './components';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
