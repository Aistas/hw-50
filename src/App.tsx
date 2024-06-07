import React from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App: React.FC = () => {


  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6">
          <UserForm/>
        </div>
        <div className="col-6">
          <Users/>
        </div>
      </div>
    </div>
  );
};

export default App;

