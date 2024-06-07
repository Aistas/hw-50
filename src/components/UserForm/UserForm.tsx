import React, { useState } from 'react';
import { User, UserMutation } from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [userMutation, setUserMutation] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: 'user',
  });

  const userChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserMutation(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const userCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setUserMutation(prev => ({
      ...prev,
      isActive: checked,
    }));
  };

  const userSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...userMutation,
    });
  };

  return (
    <form onSubmit={userSubmit}>
      <h4>Add New User</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          value={userMutation.name}
          onChange={userChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="form-control"
          value={userMutation.email}
          onChange={userChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={userMutation.role}
          onChange={userChange}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          checked={userMutation.isActive}
          onChange={userCheckboxChange}
        />
        <label className="form-check-label" htmlFor="isActive">Active</label>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;

