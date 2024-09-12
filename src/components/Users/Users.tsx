import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';
import { AppState, AppDispatch } from '../../redux/store';
import { User } from '../../types/userTypes';

const Users = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.username} - {user.email} - {user.phone} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
