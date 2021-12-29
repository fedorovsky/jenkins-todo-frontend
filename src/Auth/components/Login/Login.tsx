import * as React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleClick = () => history.push('/register');

  return (
    <div>
      <h2>Login User:</h2>
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
          <button>Login</button>
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
