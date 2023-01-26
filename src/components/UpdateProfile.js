import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Please make sure passwords match.')
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises).then(() => {
      navigate('/');
    }).catch(() => {
      setError('Failed to update account, please try again.')
    }).finally(() => {
      setLoading(false);
    })
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Update Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Control defaultValue={currentUser.email} type='email' ref={emailRef} />
            </Form.Group>
            <Form.Group className='mt-2' id='password'>
              <Form.Control placeholder='Password' type='password' ref={passwordRef} />
            </Form.Group>
            <Form.Group className='mt-2' id='conf-pw'>
              <Form.Control placeholder='Confirm Password'  type='password' ref={passwordConfirmRef} />
            </Form.Group>
            <Button disabled={loading} type='submit' className='mt-3 w-100'>Update Profile</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
}

export default UpdateProfile
