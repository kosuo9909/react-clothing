import styles from './Register.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    if (password !== password2) {
      setError('Passwords do not match!');
      setPassword('');
      setPassword2('');
      return;
    }
    const isEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    if (!isEmail) {
      setError('Please enter a valid email address.');
      setEmail('');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPassword('');
      setPassword2('');
      setEmail('');
      navigate('/');
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setError('This email address does not exist.');
        setEmail('');
      }
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setError('Incorrect password.');
        setPassword('');
        setPassword2('');
      }
      console.log(error);
    }
  };

  return (
    <div className={styles.signUpDiv}>
      <h1 className={styles.greeting}>Welcome back!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <input
          type='password'
          placeholder='Repeat password'
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        ></input>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.btn} type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
