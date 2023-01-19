import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchtext: q
  });
  
  const {searchtext} = formValues;
  const heroFiltred = useMemo(()=>getHeroByName(q),[q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchtext}`);
  }


  return (
    <div>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
            
          <form onSubmit={handleSearch}>
            <input className='form-control' type="text" placeholder='Buscar un héroe' name='searchtext' autoComplete='off' onChange={handleInputChange} value={searchtext}/>
            <button className='btn btn-outline-primary mt-2' type='submit' >Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {(q==='') ? <p className='alert alert-info'>Buscar un heroe</p> 
          : (heroFiltred.length===0) && <p className='alert alert-danger'>No hay resultados para: {q}</p>}

          {heroFiltred.map(hero=> (<HeroCard key={hero.id} {...hero}/>))}
        </div>
      </div>
    </div>
  )
}

export default SearchScreen