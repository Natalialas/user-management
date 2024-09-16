import React from 'react';

interface UserFilterProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  usernameFilter: string;
  setUsernameFilter: (value: string) => void;
  emailFilter: string;
  setEmailFilter: (value: string) => void;
  phoneFilter: string;
  setPhoneFilter: (value: string) => void;
}

const UserFilter: React.FC<UserFilterProps> = ({
  nameFilter,
  setNameFilter,
  usernameFilter,
  setUsernameFilter,
  emailFilter,
  setEmailFilter,
  phoneFilter,
  setPhoneFilter,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={usernameFilter}
        onChange={(e) => setUsernameFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={emailFilter}
        onChange={(e) => setEmailFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={phoneFilter}
        onChange={(e) => setPhoneFilter(e.target.value)}
      />
    </div>
  );
};

export default UserFilter;
