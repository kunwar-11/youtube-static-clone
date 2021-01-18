import React , {useState} from 'react'
import './styles/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommended from './components/Recommended'
function App() {
  const [isSideBar , setIsSideBar] = useState(false)
  return (
    <div className="App">
      <Header setIsSideBar = {setIsSideBar} isSideBar = {isSideBar}/>
      <Sidebar isSideBar = {isSideBar}/>
      <div className="App__body">
        <Recommended />
      </div>
    </div>
  );
}

export default App;
