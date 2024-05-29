import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';


function App() {

  return (
    <>

<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
