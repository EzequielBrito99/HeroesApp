import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: types.logout });
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <div class="d-flex justify-content-between w-100">
          <Link className="navbar-brand" to="/" >
            HeroesApp
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')} to="/marvel" >
              Marvel
            </NavLink>

            <NavLink className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')} to="/dc" >
              DC
            </NavLink>

            <NavLink className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')} to="/search" >
              Search
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto d-flex align-items-baseline">
          <span className='nav-item NavLink text-info'>
            {user.name}
          </span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}