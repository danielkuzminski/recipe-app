//style
import './Home.css'

//components
import RecipeList from '../../components/RecipeList'


export default function Home({recipes}) {

  

  return (
    <div className='home'>
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
