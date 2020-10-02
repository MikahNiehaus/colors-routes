import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Green from '../componets/Green';
import Red from '../componets/Red';
import Yellow from '../componets/Yellow';
import Blue from '../componets/Blue';

function App() {
 
  return (
    <Router>
      <Route exact path="/" render={() => <Home></Home>} />
      <Route path='/green'><Green/></Route>
      <Route path='/red'><Red/></Route>
      <Route path='/yellow'><Yellow/></Route>
      <Route path='/blue'><Blue/></Route>
  </Router>
  );
}
 
export default App;