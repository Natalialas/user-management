import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';
import { AppState, AppDispatch } from '../../redux/store';
import UserTable from '../UserTable/UserTable';
import UserFilter from '../UserFilter/UserFilter';
import { User } from '../../types/userTypes';

const Users = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: AppState) => state.user);

  const [nameFilter, setNameFilter] = useState('');
  const [usernameFilter, setUsernameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user: User) => 
    user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
    user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
    user.phone.includes(phoneFilter)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <UserFilter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        usernameFilter={usernameFilter}
        setUsernameFilter={setUsernameFilter}
        emailFilter={emailFilter}
        setEmailFilter={setEmailFilter}
        phoneFilter={phoneFilter}
        setPhoneFilter={setPhoneFilter}
      />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Users;
