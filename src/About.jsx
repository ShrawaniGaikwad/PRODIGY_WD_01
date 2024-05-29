import { useState } from 'react'
import './About.css'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };


      window.addEventListener('scroll', function() {
        var container = document.querySelector('.container');
        var mycontainer = document.querySelector('.mycontainer');
      
        if (window.scrollY > mycontainer.offsetTop) {
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
<div className='about'>
      <h1>Web Application Development Lorem Ipsum</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor nunc ut tortor ullamcorper commodo. Donec eu
        hendrerit velit. Quisque in augue justo. Fusce bibendum ac quam id tempus. Morbi scelerisque mauris nec nulla pharetra
        dignissim. Suspendisse potenti. Praesent at metus sit amet nisi interdum congue vel non justo. Ut aliquam tellus sit
        amet arcu rutrum, vel mattis velit consequat. Cras luctus a purus sed venenatis. Ut eu sapien sem. Morbi interdum est
        at posuere luctus. Ut elementum, sem ac viverra lobortis, sem risus aliquam nisi, nec commodo elit lacus eu odio.
    </p>
    <p>
        In hac habitasse platea dictumst. Sed non quam sit amet nulla ullamcorper venenatis. Nulla ac elit ac elit dignissim
        tristique. Aenean sed mauris ut libero facilisis dictum. Nam nec ex erat. Vivamus lacinia dapibus justo, id
        condimentum leo suscipit nec. Cras auctor posuere tincidunt. Morbi aliquam, neque at efficitur gravida, eros leo
        scelerisque dui, et facilisis odio velit vitae dui. Integer id libero magna. Donec sodales nibh nec risus egestas, eu
        scelerisque turpis vehicula. Maecenas accumsan tempus metus nec fermentum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <p>
        Suspendisse potenti. Curabitur vitae lacus sed lectus cursus aliquet nec sit amet ipsum. Aliquam id tortor nec elit
        malesuada faucibus. Suspendisse potenti. Nullam eget turpis augue. Nam euismod pellentesque justo, ut euismod augue
        luctus at. Integer tempor nec libero quis pharetra. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Ut sit amet neque justo. Morbi auctor scelerisque velit, non sodales sapien
        pulvinar et. Aliquam erat volutpat. Nullam bibendum nisl id leo laoreet, eget gravida erat iaculis. Fusce vel odio
        eget velit dictum consectetur ac a diam. Proin eu libero eget leo suscipit placerat eget eget lacus.
    </p>
    </div>

    <div className='mycontainer'>
      <h1>App Application Development Lorem Ipsum</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor nunc ut tortor ullamcorper commodo. Donec eu
        hendrerit velit. Quisque in augue justo. Fusce bibendum ac quam id tempus. Morbi scelerisque mauris nec nulla pharetra
        dignissim. Suspendisse potenti. Praesent at metus sit amet nisi interdum congue vel non justo. Ut aliquam tellus sit
        amet arcu rutrum, vel mattis velit consequat. Cras luctus a purus sed venenatis. Ut eu sapien sem. Morbi interdum est
        at posuere luctus. Ut elementum, sem ac viverra lobortis, sem risus aliquam nisi, nec commodo elit lacus eu odio.
    </p>
    <p>
        In hac habitasse platea dictumst. Sed non quam sit amet nulla ullamcorper venenatis. Nulla ac elit ac elit dignissim
        tristique. Aenean sed mauris ut libero facilisis dictum. Nam nec ex erat. Vivamus lacinia dapibus justo, id
        condimentum leo suscipit nec. Cras auctor posuere tincidunt. Morbi aliquam, neque at efficitur gravida, eros leo
        scelerisque dui, et facilisis odio velit vitae dui. Integer id libero magna. Donec sodales nibh nec risus egestas, eu
        scelerisque turpis vehicula. Maecenas accumsan tempus metus nec fermentum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <p>
        Suspendisse potenti. Curabitur vitae lacus sed lectus cursus aliquet nec sit amet ipsum. Aliquam id tortor nec elit
        malesuada faucibus. Suspendisse potenti. Nullam eget turpis augue. Nam euismod pellentesque justo, ut euismod augue
        luctus at. Integer tempor nec libero quis pharetra. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Ut sit amet neque justo. Morbi auctor scelerisque velit, non sodales sapien
        pulvinar et. Aliquam erat volutpat. Nullam bibendum nisl id leo laoreet, eget gravida erat iaculis. Fusce vel odio
        eget velit dictum consectetur ac a diam. Proin eu libero eget leo suscipit placerat eget eget lacus.
    </p>
    </div>
    </>
  )
}

export default App
