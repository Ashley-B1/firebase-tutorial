import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Please make sure passwords match.')
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch(e) {
      setError('Failed to create account, please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='conf-pw'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} type='submit' className='mt-3 w-100'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Log In!</Link>
      </div>
    </>
  )
}

export default SignUp
