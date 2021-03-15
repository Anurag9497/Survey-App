import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Publish from './components/Publish';

function App() {
  const[sQuestion, setSQuestion] = useState([]);
  return (
    <div className="container text-center">
      <Router>
        <Link to="/Survey-App" className="text-decoration-none">
          <h1 className="my-1 display-3 text-success" title="Click for Home">Survey App</h1>
        </Link>
        <Switch>
          <Route exact path="/Survey-App">
            <Menu />
          </Route>
          <Route path="/create">
            <CreateSurvey sQuestion={sQuestion} setSQuestion={setSQuestion}/>
          </Route>
          <Route path="/publish">
            <Publish sQuestion={sQuestion}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
