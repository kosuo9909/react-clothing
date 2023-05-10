import styles from './DeleteProfile.module.css';
import { useQuery } from '@tanstack/react-query';
import FetchProfile from '../../api/fetchProfile';
import { Fragment, useEffect, useRef, useState } from 'react';
import { database } from '../../firebase/firebase';
import { ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, getAuth } from 'firebase/auth';

const DeleteProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userID = useSelector((state) => state.user.currentUserID);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState(false);

  const deleteUserHandler = () => {
    setIsDelete(true);
  };

  useEffect(() => {
    if (isDelete) {
      deleteUser(user)
        .then(() => {})
        .catch((error) => {
          if (
            error.message === 'Firebase: Error (auth/requires-recent-login).'
          ) {
            navigate('/relogin');
          }
        });
    }
  }, [user, isDelete, navigate]);

  const fetchedUsers = useQuery(['userData', userID], () =>
    FetchProfile(userID)
  );
  console.log(fetchedUsers.data);
  const submitHandler = (e) => {
    // e.preventDefault();
    const db = database;
    set(ref(db, 'users/' + userID), {
      name:
        nameRef.current.value === ''
          ? fetchedUsers.data.name
          : nameRef.current.value,
      address:
        addressRef.current.value === ''
          ? fetchedUsers.data.address
          : addressRef.current.value,
      phone:
        phoneRef.current.value === ''
          ? fetchedUsers.data.phone
          : phoneRef.current.value,
    });
    navigate('/cart');
  };

  return (
    <Fragment>
      <div className={styles.cont}>
        <div className={styles.containerGrid}>
          <aside className={styles.aside}>
            <Link to='/profile'>
              <span>Profile settings</span>
            </Link>
            <Link to='/unsubscribe'>
              <span className={styles.active}> Delete profile</span>
            </Link>
          </aside>
          <div className={styles.formCopy}>
            <h2 className={styles.formh2}>
              Съжаляваме да видим, че си тръгваш.
            </h2>
            <div className={styles.goodbye}>
              <p className={styles.warning}>
                Изтриването на профила ви ще бъде необратимо и ще премахне
                всички лични данни и настройки, свързани с профила.
              </p>
              <p className={styles.warning2}>
                Сигурни ли сте, че искате да продължите?
              </p>
              <button
                className={styles.deleteButton}
                onClick={deleteUserHandler}
              >
                Да, изтрий профила ми.
              </button>
            </div>
          </div>
          {/* <form className={styles.form}>

            <div className={styles.group}>
              <div className={styles.group2items}>
                <label className={styles.label} htmlFor='firstname'>
                  Име
                </label>
                <input
                  id='firstname'
                  ref={nameRef}
                  className={styles.formInput}
                  placeholder={fetchedUsers?.data ? fetchedUsers.data.name : ''}
                ></input>
              </div>
              <div className={styles.group2items}>
                <label className={styles.label} htmlFor='phone'>
                  Телефонен номер
                </label>
                <input
                  type='tel'
                  ref={phoneRef}
                  id='phone'
                  className={styles.formInput}
                  placeholder={
                    fetchedUsers?.data ? fetchedUsers.data.phone : ''
                  }
                ></input>
              </div>
            </div>
            <div className={styles.group2items}>
              <label className={styles.label} htmlFor='address'>
                Адрес
              </label>
              <input
                ref={addressRef}
                id='address'
                className={styles.formInputAdd}
                placeholder={
                  fetchedUsers?.data ? fetchedUsers.data.address : ''
                }
              ></input>
            </div>
            <button onClick={submitHandler} className={styles.btn}>
              Запази профил
            </button>
          </form> */}
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteProfile;
