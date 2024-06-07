import React from 'react';
import {User} from '../../types.ts';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-text">Role: {user.role}</p>
        <p className="card-text">Active: {user.isActive ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default UserItem;


