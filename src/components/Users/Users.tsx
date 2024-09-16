import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';
import { AppState, AppDispatch } from '../../redux/store';
import UserTable from '../UserTable/UserTable';
import UserFilter from '../UserFilter/UserFilter';

const Users = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error, nameFilter, usernameFilter, emailFilter, phoneFilter } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
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
      <UserFilter />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Users;
