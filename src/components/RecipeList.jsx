import { Link } from 'react-router-dom'

// styles
import './RecipeList.css'

export default function RecipeList({recipes}) {
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className='card' key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>method:</p>
          <div>{recipe.method.substring(0,90)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Check for more</Link>
        </div>
      ))}
    </div>
  )
}
