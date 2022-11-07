import { Link } from 'react-router-dom' 
import { useTheme } from '../hooks/useTheme'

//components
import SearchBar from './SearchBar'

//styles
import './Navbar.css'

export default function Navbar({recipes}) {
  
  const {color, changeColor} = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
      <nav onClick={() => {changeColor('blue')}} >
        <Link to='/' className='brand'><h1>Cooking Recipes</h1></Link>
        <SearchBar recipes={recipes} />
        <Link to='/create'>Create Recipe</Link>
      </nav> 
    </div>
  )
}
