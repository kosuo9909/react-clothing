import styles from './Profile.module.css';
import { useQuery } from '@tanstack/react-query';
import FetchProfile from '../../api/fetchProfile';
import { Fragment, useRef, useState } from 'react';
import SubmitProfile from '../../api/submitProfile';
import axios from 'axios';
import { database } from '../../firebase/firebase';
import { ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [submit, setSubmit] = useState(false);
  const userID = useSelector((state) => state.user.currentUserID);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  // const fetchedUsers = useQuery({
  //   queryKey: ['userData', userID],
  //   FetchProfile(userID),
  // });

  const fetchedUsers = useQuery(['userData', userID], () =>
    FetchProfile(userID)
  );
  console.log(fetchedUsers.data);
  const submitHandler = (e) => {
    e.preventDefault();
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
    // setSubmit(true);
  };

  // const sentData = useQuery({
  //   queryKey: ['userData'],
  //   queryFn: async () => {
  //     const response = await axios.post(
  //       'https://react-deployment-demo-510ac-default-rtdb.firebaseio.com/users.json',
  //       {
  //         name: nameRef.current.value,
  //         phone: phoneRef.current.value,
  //         address: addressRef.current.value,
  //       }
  //     );
  //     setSubmit(false);
  //     console.log('working');
  //     console.log(response);
  //     return response;
  //   },
  //   enabled: submit === true,
  // });

  return (
    <Fragment>
      <div>
        <form className={styles.form}>
          <h2 className={styles.formh2}>Update your details here</h2>

          <div className={styles.group}>
            <div className={styles.group2items}>
              <label className={styles.label} htmlFor='firstname'>
                Name
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
                Phone Number
              </label>
              <input
                ref={phoneRef}
                id='phone'
                className={styles.formInput}
                placeholder={fetchedUsers?.data ? fetchedUsers.data.phone : ''}
              ></input>
            </div>
          </div>
          <div className={styles.group2items}>
            <label className={styles.label} htmlFor='address'>
              Address
            </label>
            <input
              ref={addressRef}
              id='address'
              className={styles.formInputAdd}
              placeholder={fetchedUsers?.data ? fetchedUsers.data.address : ''}
            ></input>
          </div>
          <button onClick={submitHandler} className={styles.btn}>
            Save Profile
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
