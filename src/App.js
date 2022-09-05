import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//components
import Navbar from './components/Navbar';


//page components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

// hooks
import {useCollection} from './hooks/useCollection'


function App() {

  const {documents: recipes} = useCollection('recipes')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar recipes={recipes} />
        <Routes>
          <Route path='/' element={<Home recipes={recipes} />}  />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
