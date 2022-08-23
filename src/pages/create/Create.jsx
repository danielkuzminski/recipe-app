import { useState, useRef } from 'react'

//databse import
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

// styles
import './Create.css'


export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const resetForm = () => {
    setTitle('')
    setMethod('')
    setIngredients([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let ref = collection(db, 'recipes')

    const recipe = {
      title,
      method,
      ingredients
    }

    await addDoc(ref, recipe)

    resetForm()
    
  }

  const handleAdd = (e) => {
    e.preventDefault()

    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }

    setNewIngredient('')

    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input 
            type="text"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            value={title}
            required  
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => {
                setNewIngredient(e.target.value)
              }}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current ingredient: {ingredients.map((i) => (<em key={i}>{i}, </em>))}</p>
        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => {
              setMethod(e.target.value)
            }}
            value={method}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
