import './App.scss'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <AuthPage/>
      
    </div>
  );
}

export default App
