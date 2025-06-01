// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ username, street, catchPhrase }) => {
  return (
    <div className="user-card border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{username}</h2>
      <p>Street: {street}</p>
      <p>Catch Phrase: {catchPhrase}</p>
    </div>
  );
};

export default UserCard;
