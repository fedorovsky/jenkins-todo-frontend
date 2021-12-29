import * as React from 'react';

const Login = React.lazy(() => import('./Login'));

const LoginLoader: React.FC = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Login />
    </React.Suspense>
  );
};

export default LoginLoader;
