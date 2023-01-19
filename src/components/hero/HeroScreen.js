import React,{useMemo} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

  const {heroeId} = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if(!hero){
    return <Navigate to='/'/>
  }

  const imagePath = `/assets/${hero.id}.jpg`;


  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img className='img-thumbnail animate__animated animate__fadeInLeft' src={imagePath} alt={hero.superhero} />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
          </ul>

          <h5 className='mt-4'>Characters</h5>
          <p>{hero.characters}</p>

          <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </div>
  )
}

export default HeroScreen
