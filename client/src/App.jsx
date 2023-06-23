import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StreamersList from './pages/StreamersList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
        </Switch>
      </Main>

      <Footer/>
    </Router>
  );
}

export default App;