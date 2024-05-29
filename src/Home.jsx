import { useState } from 'react'
import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };


      window.addEventListener('scroll', function() {
        var container = document.querySelector('.container');
        var container1 = document.querySelector('.container1');
      
        if (window.scrollY > container1.offsetTop) {
          container.style.backgroundColor = 'rgb(77, 185, 252)';
          container.style.border='2px solid gray';
          var links = container.querySelectorAll('a');
          links.forEach(function(link) {
            link.style.color = 'black';
          });
        } else {
          container.style.backgroundColor = 'black';
          var links = container.querySelectorAll('a');
          links.forEach(function(link) {
            link.style.color = 'white';
          });
        }
      });
      


  return (
    <>


      <div className={`container ${menuOpen ? 'responsive' : ''}`}>
        <p style={{float:'left',color:'white',marginLeft:30}}>ProdigyInfotech</p>
        <a href="/about" style={{marginRight:50}} className="menu-item">About</a>
        <a href="/" className="menu-item">Home</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        &#9776;
        </a>
      </div>
      <div className="image-container">
      <img className="responsive-image" src="src/assets/welcome.png" alt="Welcome" />
    </div>
    <div className="container1" >
      <div className="row">
        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
      </svg>
      <h2>App development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
        We provide services in app development. We work for efficients apps which provide good user interface with user friendly and which are 
        compatible for both android and ios devices.
      </p>
        </div>

        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
      </svg>
      <h2>App development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
        We provide services in app development. We work for efficients apps which provide good user interface with user friendly and which are 
        compatible for both android and ios devices.
      </p>
        </div>

        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
      </svg>
      <h2>App development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
        We provide services in app development. We work for efficients apps which provide good user interface with user friendly and which are 
        compatible for both android and ios devices.
      </p>
        </div>
      </div>
      </div>
      <div className='footer'>
        <div style={{display:'flex',color:'black',justifyContent:'center',marginTop:10,marginBottom:10}}>
        <i className="bi bi-c-circle" color='black' style={{marginTop:18}}></i>
        <br></br>
        <p> &nbsp;2024 Responsive Landing Page. All rights reserved</p>
        </div>
        </div>
    </>
  )
}

export default App
