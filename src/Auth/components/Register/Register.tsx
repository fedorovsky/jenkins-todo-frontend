import * as React from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();

  const handleClick = () => history.push('/login');

  return (
    <div>
      <h2>Register User:</h2>
      <div>
        <label>
          <div>Email</div>
          <input type="text" />
        </label>
        <label>
          <div>Password</div>
          <input type="password" />
        </label>
        <div>
          <button>Register</button>
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
