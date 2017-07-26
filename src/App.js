import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import Dashboard from './ui/pages/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route render={({location})=>{
              return location.pathname !== '/' ?
              (<Sidebar />):null
            }} />
            {/* //指定在某个页面显示某个组件 */}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup'  component={Signup} />
              <Route path='/login'  component={Login} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
