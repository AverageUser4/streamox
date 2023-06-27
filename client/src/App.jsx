import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Footer, Header, Main, Loading } from 'features/ui';
import { ErrorBoundary } from 'features/ui';

const StreamersList = lazy(() => import('pages/StreamersList'));
const SingleStreamerPage = lazy(() => import('pages/SingleStreamerPage'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  return (
    <Router>
      <Header/>

      <Main>
        <ErrorBoundary>
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Redirect exact={true} from="/" to="/streamers/list"/>
              
              <Route exact={true} path="/streamers/list">
                <StreamersList/>
              </Route>

              <Route exact={true} path="/streamers/:id">
                <SingleStreamerPage/>
              </Route>

              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Main>

      <Footer/>
    </Router>
  );
}

export default App;