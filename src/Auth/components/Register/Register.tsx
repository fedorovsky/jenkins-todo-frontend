import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/auth';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClick = () => history.push('/login');

  const handleClickRegister = () => {
    console.log(email, password);
    dispatch(register({ email, password }));
  };

  return (
    <div>
      <h2>Register User:</h2>
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
          <button onClick={handleClickRegister}>Register</button>
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
