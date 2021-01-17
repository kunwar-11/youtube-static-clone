import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommended from './components/Recommended'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
