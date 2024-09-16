import React from 'react';
import { User } from '../../types/userTypes';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

export default UserRow;
