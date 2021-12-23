import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Navigation } from './components';
import { Home, About, Contact, Article } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
