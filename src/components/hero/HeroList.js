import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'

const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher(publisher);

  return (
    <>
        <h1>HeroList - {publisher}</h1>
        <ul>
            {heroes.map( hero =>
                <li key={hero.id}> {hero.superhero} </li>     
            )}    
        </ul> 
    </>
  )
}

export default HeroList