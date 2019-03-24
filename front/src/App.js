import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Sidebar from './components/Sidebar'


class App extends Component {
  render() {
    return (
      <div className="App">
				{/* <Header/> */}
				<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
