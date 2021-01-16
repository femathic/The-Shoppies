import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div
      className="animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-400 dark:border-gray-200 h-20 w-20 loader"
    />
  </div>
);

const App = () => (
  <Suspense fallback={<Loader />}>
    <Layout Loader={Loader} />
  </Suspense>
);

export default App;
