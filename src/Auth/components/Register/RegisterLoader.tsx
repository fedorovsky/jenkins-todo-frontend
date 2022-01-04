import * as React from 'react';
// import { DynamicModuleLoader } from 'redux-dynamic-modules';
// import { getAuthModule } from '../../redux/getAuthModule';

const Register = React.lazy(() => import('./Register'));

const RegisterLoader: React.FC = () => {
  return (
    // <DynamicModuleLoader modules={[getAuthModule()]}>
    <React.Suspense fallback={<div>loading...</div>}>
      <Register />
    </React.Suspense>
    // </DynamicModuleLoader>
  );
};

export default RegisterLoader;
