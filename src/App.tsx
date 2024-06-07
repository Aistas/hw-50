import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';


const App: React.FC = () => {
  const [users] = useState<User[]>([]);


  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6">
          <UserForm />
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;

