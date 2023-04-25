import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound'
import PageA from './components/PageA'
import PageB from './components/PageB'
import Welcom from './components/Welcom';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" children={Welcom} />
        <Route path="/a" children={PageA} />
        <Route path="/b" children={PageB} />
        <Route path="*" children={NotFound} />
      </Switch>
    </>

  );
}

export default App;
