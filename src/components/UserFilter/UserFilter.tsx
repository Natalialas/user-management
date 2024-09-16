import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } from '../../redux/actions/userActions';
import styles from './UserFilter.module.scss';

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();
  
  const { nameFilter, usernameFilter, emailFilter, phoneFilter } = useSelector((state: AppState) => state.user);

  return (
    <div className={styles.userFilter}>
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={usernameFilter}
        onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={emailFilter}
        onChange={(e) => dispatch(setEmailFilter(e.target.value))}
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={phoneFilter}
        onChange={(e) => dispatch(setPhoneFilter(e.target.value))}
      />
    </div>
  );
};

export default UserFilter;
