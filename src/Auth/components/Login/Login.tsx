import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, refresh } from '../../redux/auth';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClick = () => history.push('/register');

  const handleClickLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleClickRefresh = () => {
    dispatch(refresh());
  };

  return (
    <div>
      <h2>Login User:</h2>
      <div>
        <label>
          <div>Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button onClick={handleClickLogin}>Login</button>
          <button onClick={handleClickRefresh}>Refresh</button>
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
