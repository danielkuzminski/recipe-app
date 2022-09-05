import { Link } from 'react-router-dom' 

//components
import SearchBar from './SearchBar'

//styles
import './Navbar.css'

export default function Navbar({recipes}) {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'><h1>Cooking Recipes</h1></Link>
        <SearchBar recipes={recipes} />
        <Link to='/create'>Create Recipe</Link>
      </nav> 
    </div>
  )
}
