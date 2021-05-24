import { UniversityNames } from '../../data/UniversityNames'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const editSearchQuery = (searchTerm) => setSearchQuery(searchTerm)


  const dynamicSearch = () => searchQuery == '' ? [] : UniversityNames.filter(uniName => uniName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <input
        type="text"
        placeholder={searchQuery == '' ? 'Type to search...' : searchQuery}
        value={searchQuery}
        onChange={e => editSearchQuery(e.target.value)} />
      <div style={{ marginTop: '1rem', backgroundColor: 'white', borderRadius: '1em', width: '35%' }}>
        {dynamicSearch().map(uniName => (<Link href={`/university/${uniName}`}>{uniName}</Link>))}
      </div>
    </div>
  )
}

export default Search