import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handelLogin = () => {
    const login = {
      type: types.login,
      payload: {name: 'Ezequiel'}
    }
    dispatch(login);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, { replace : true });
  }

  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handelLogin}>Login</button>
    </div>
  )
}

export default LoginScreen