
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/SessionContext';
import { Button, Form } from 'react-bootstrap'

const LoginPage = () => {
  const  { setUser, setIsLoggedIn }  = useSession();
  const navigate = useNavigate();
  const LoginUser = () => {
    // TODO: API CALL a node y BD
    setIsLoggedIn(true)
    setUser({})
    navigate('/logged');
  }

  return (
    <>
      <Form className="formulario">
        <h1>Inicia Sesión</h1>

        <Form.Group class="mb-3">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control type="email" placeholder="ingresa tu email" name="email" />
        </Form.Group>

        <Form.Group class="mb-3">
          <Form.Label for="clave">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="ingresa tu clave" name="clave" />
        </Form.Group>
        <div>
          <Link to="/register">¿No tenes cuenta? Registrate</Link>  
        </div>
        <div>
         <Button variant="primary" type="button" onClick={LoginUser}>
            Entrar!
         </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginPage