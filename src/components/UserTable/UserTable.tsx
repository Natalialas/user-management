import React from 'react';
import { User } from '../../types/userTypes';
import UserRow from '../UserRow/UserRow';
import styles from './UserTable.module.scss';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </>
  );
};

export default UserTable;
