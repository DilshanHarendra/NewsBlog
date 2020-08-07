import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from "./Navigation/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import {Provider} from "react-redux";
import reducer from "./Reducer/Reducer";
import {createStore} from "redux";
import SearchResult from "./SearchResult/SearchResult";



function App() {



  return (
    <Provider store={createStore(reducer)}>


    <div className="App">

      <Router>
          <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:id" exact component={Home}/>
          <Route path="/search/:id" exact component={SearchResult}/>
          <Route path="/news/:category/:id" exact component={Home}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
