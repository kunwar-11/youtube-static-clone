import React , {useState} from 'react'
import './styles/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommended from './components/Recommended'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [isSideBar , setIsSideBar] = useState(false)
  return (
    <div className="App">
      <Router>
        <Header setIsSideBar = {setIsSideBar} isSideBar = {isSideBar}/>
        <Switch>
          <Route path = '/trending'>
            <Sidebar isSideBar = {isSideBar}/>
            <h2>Trending</h2>
          </Route>
          <Route path = '/search/:searchterm'>
              <Sidebar isSideBar = {isSideBar}/>
              <h2>search</h2>
          </Route>
          <Route path = '/'>
              <div className="App__body">
                <Sidebar isSideBar = {isSideBar}/>
                <Recommended />
              </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
