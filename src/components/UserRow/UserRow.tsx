import React from 'react';
import { User } from '../../types/userTypes';
import styles from './UserRow.module.scss';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr className={styles.userRow}>
      <td data-label="Name">{user.name}</td>
      <td data-label="Username">{user.username}</td>
      <td data-label="Email">{user.email}</td>
      <td data-label="Phone">{user.phone}</td>
    </tr>
  );
};

export default UserRow;
