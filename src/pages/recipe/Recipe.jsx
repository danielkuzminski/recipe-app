import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

//firebase
import {db} from '../../firebase/config'
import {doc, getDoc} from 'firebase/firestore'

// styles
import './Recipe.css'


export default function Recipe() {

  const {id} = useParams()

  const [recipe, setRecipe] = useState()

  useEffect(() => {

    let ref = doc(db, 'recipes', id)

    getDoc(ref).then((doc) => {
      setRecipe(doc.data())
    })

  }, [id])

  return (
    <div className='recipe'>
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>method: </p>
          <p className='method'>{recipe.method}</p>
          <ul>{recipe.ingredients.map(el => <li key={el}>{el}</li>)}</ul>
        </>
      )}
    </div>
  )
}

