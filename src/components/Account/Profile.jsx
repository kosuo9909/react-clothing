import styles from './Profile.module.css';
import { useQuery } from '@tanstack/react-query';
import FetchProfile from '../../api/fetchProfile';
import { Fragment, useEffect, useRef, useState } from 'react';
import { database } from '../../firebase/firebase';
import { ref, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { hasProfileUpdate } from '../../app/UserSlice';

const Profile = () => {
  const userID = useSelector((state) => state.user.currentUserID);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (
      nameRef.current.value.length > 0 &&
      addressRef.current.value.length > 0 &&
      phoneRef.current.value.length > 0
    ) {
      dispatch(hasProfileUpdate(true));
    }
    navigate('/cart');
    // navigate(0);
  };

  return (
    <Fragment>
      <div className={styles.cont}>
        <div className={styles.containerGrid}>
          <aside className={styles.aside}>
            <Link to='/profile'>
              <span className={styles.active}>Настройки на профил</span>
            </Link>
            <Link to='/unsubscribe'>Изтриване на профил</Link>
          </aside>
          <form className={styles.form}>
            <h2 className={styles.formh2}>Обнови данните ти за доставка тук</h2>

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
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
