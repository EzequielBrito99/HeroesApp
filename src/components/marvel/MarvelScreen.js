import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <hr />
      
      <HeroList publisher={'Marvel Comics'} />
    </div>
  )
}

export default MarvelScreen