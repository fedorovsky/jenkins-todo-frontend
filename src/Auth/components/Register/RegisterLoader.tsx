import * as React from 'react';

const Register = React.lazy(() => import('./Register'));

const RegisterLoader: React.FC = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Register />
    </React.Suspense>
  );
};

export default RegisterLoader;
