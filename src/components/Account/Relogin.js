import styles from './Relogin.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

const ReLogin = () => {
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
    navigate('../profile', { replace: true });
    navigate(0);
  };

  return (
    <div className={styles.Div100vh}>
      <div className={styles.signUpDiv}>
        <h1 className={styles.greeting}>
          Please login again to complete your request.
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isEmptyEmail && <label for='email'>This field is required</label>}

          <input
            className={isEmptyEmail ? styles.inputRed : styles.input}
            type='text'
            placeholder='Email'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setIsEmptyEmail(false);
            }}
            onBlur={blurHandlerEmail}
            required
          ></input>
          {isEmptyPassword && (
            <label for='password'>This field is required</label>
          )}
          <input
            className={isEmptyPassword ? styles.inputRed : styles.input}
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
            Log In
          </button>
          {/* <div className={styles.noAccount}>
            You don't have an account?{' '}
            <Link className={styles.noAccountLink} to='/register'>
              Register now.
            </Link>{' '}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ReLogin;
