import styles from './Register.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { Link, redirect, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [isTouchedEmail, setIsTouchedEmail] = useState('');
  const [isTouchedPassword, setIsTouchedPassword] = useState('');
  const [isTouchedPassword2, setIsTouchedPassword2] = useState('');
  const [isEmptyEmail, setIsEmptyEmail] = useState('');
  const [isEmptyPassword, setIsEmptyPassword] = useState('');
  const [isEmptyPassword2, setIsEmptyPassword2] = useState('');

  const blurHandlerEmail = (e) => {
    setIsTouchedEmail(true);
    if (e.target.value.trim() === '') {
      setIsEmptyEmail(true);
    }
  };
  const blurHandlerPassword = (e) => {
    setIsTouchedPassword(true);
    if (e.target.value.trim() === '') {
      setIsEmptyPassword(true);
    }
  };
  const blurHandlerPassword2 = (e) => {
    setIsTouchedPassword2(true);
    if (e.target.value.trim() === '') {
      setIsEmptyPassword2(true);
    }
  };

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
    await createUserWithEmailAndPassword(auth, email, password);
    setPassword('');
    setPassword2('');
    setEmail('');
    navigate('/');
  };

  return (
    <div className={styles.signUpDiv}>
      <h1 className={styles.greeting}>Hey there!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {isEmptyEmail && <label for='email'>This field is required</label>}
        <input
          className={isEmptyEmail ? styles.inputRed : styles.input}
          id='email'
          type='text'
          placeholder='Email'
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
            setIsEmptyEmail(false);
          }}
          onBlur={blurHandlerEmail}
        ></input>
        {isEmptyPassword && (
          <label for='password'>This field is required</label>
        )}

        <input
          className={isEmptyPassword ? styles.inputRed : styles.input}
          id='password'
          type='password'
          placeholder='Password'
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
            setIsEmptyPassword(false);
          }}
          onBlur={blurHandlerPassword}
        ></input>
        {isEmptyPassword2 && (
          <label for='password'>This field is required</label>
        )}

        <input
          className={isEmptyPassword2 ? styles.inputRed : styles.input}
          id='password2'
          type='password'
          placeholder='Repeat password'
          value={password2}
          required
          onChange={(event) => {
            setPassword2(event.target.value);
            setIsEmptyPassword2(false);
          }}
          onBlur={blurHandlerPassword2}
        ></input>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.btn} type='submit'>
          Register
        </button>
        <div className={styles.alreadyRegistered}>
          Already registered?{' '}
          <Link className={styles.alreadyRegisteredLink} to='/login'>
            Log in.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
