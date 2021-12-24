import './sass/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Create, Home, Recipe, Search, NotFound } from './pages';
import { NavBar, ThemeSelector } from './components';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <NavBar />
        <ThemeSelector />
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
