import React, { useState } from 'react'

import './SearchBar.css'

export default function SearchBar({recipes}) {

  const [searchedWord, setSearchedWord] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const handleFilter = (e) => {
    setSearchedWord(e.target.value)

    const newFilter = recipes.filter((value) => {
      return value.title.toLowerCase().includes(searchedWord.toLowerCase())
    })

    if(searchedWord.length === 0){
      setFilteredRecipes([])
    } else {
      setFilteredRecipes(newFilter)
    }

  }


  return (
    <div >
      <form className='searchbar'>
        <label htmlFor="search">Search:</label>
        <input 
          type="text" 
          id='search'
          onChange={handleFilter}
          value={searchedWord}
          placeholder='enter new search...'
        />
      </form>
    </div>
  )
}
