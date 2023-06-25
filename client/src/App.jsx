import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { StreamersList, SingleStreamerPage } from 'pages/';
import { Footer, Header, Main } from 'features/ui';

function App() {
  return (
    <Router>
      <Header/>

      <Main>
        <Switch>
          <Redirect exact="true" from="/" to="/streamers/list"/>
          
          <Route path="/streamers/list">
            <StreamersList/>
          </Route>

          <Route path="/streamers/:id">
            <SingleStreamerPage/>
          </Route>
        </Switch>
      </Main>

      <Footer/>
    </Router>
  );
}

export default App;