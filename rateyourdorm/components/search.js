import Styles from '../styles/Search.module.css'
import { UniversityNames } from '../data/UniversityNames'

import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const editSearchQuery = (searchTerm) => setSearchQuery(searchTerm)


  const dynamicSearch = () => searchQuery == '' ? [] : UniversityNames.filter(uniName => uniName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <a href="" target="_blank" hidden></a>
      <input
        type="text"
        placeholder={searchQuery == '' ? 'Type to search...' : searchQuery}
        value={searchQuery}
        onChange={e => editSearchQuery(e.target.value)} />
      <div style={{ marginTop: '1rem', backgroundColor: 'white', borderRadius: '1em', width: '35%'}}>
        {dynamicSearch().map(uniName => (<li style={{color: 'black', listStyleType: 'none', padding: '0.8rem'}}>{uniName}</li>))}
      </div>
    </div>
  )
}

export default Search