import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imagesPath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className='card'>
            <div className='row no-gutters'>
                <div className="col-4">
                    <img src={imagesPath} className='card-img' alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {(characters !== alter_ego) && <p className='text-muted'>{characters}</p>}
                        <p className='text-muted'>{first_appearance}</p>
                        <Link to={`/hero/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCard
