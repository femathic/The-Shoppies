import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, useLocation,
} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

const Home = lazy(() => import('./containers/Home'));
const Error = lazy(() => import('./containers/Error'));
const NotFound = lazy(() => import('./containers/NotFound'));
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);
  return null;
};

const Layout = ({ Loader }) => (
  <Router>
    <GlobalProvider>
      <ScrollToTop />
      <div className="w-full pb-10">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/error">
              <Error />
            </Route>
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </GlobalProvider>
  </Router>
);

export default Layout;
