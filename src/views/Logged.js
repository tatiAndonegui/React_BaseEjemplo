
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/SessionContext';
import { Button } from 'react-bootstrap'

const Logged = () => {
  const  { isLoggedIn }  = useSession();
  const navigate = useNavigate();

  const logout = () => {
    //Todo terminar 
  }

  if (!isLoggedIn) {
    navigate('login');
    return;
  }
 
  return (
   <>
    <h1>Bienvenido</h1>
    <Button className="mb-4" type='button' onClick={logout}>Desloguearse</Button>
   </>
  );
};

export default Logged