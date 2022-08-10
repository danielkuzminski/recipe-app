//firebase
import {useCollection} from '../../hooks/useCollection'

//style
import './Home.css'

//components
import RecipeList from '../../components/RecipeList'


export default function Home() {

  const {documents: recipes} = useCollection('recipes')

  return (
    <div className='home'>
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
