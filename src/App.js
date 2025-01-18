import logo from './imgs/Logo.png'
import logoText from './imgs/logo-text.png'
import poorGirl from './imgs/poor-girl.png'

function App() {
  return (
    <div className='app'>
      <div className="header">
          <img src={logo} className='logo' />
          <img src={logoText} className='logo-text' />
            <ul className='nav'>
              <li className='nav-1'>ABOUT</li>
              <li className='nav-2'>SERVICES</li>
              <li className='nav-3'>TECHNOLOGIES</li>
              <li className='nav-4'>HOW TO</li>
            </ul>
          <button className='contact-us'>CONTACT US</button>
          <button className='join-hydra'>JOIN HYDRA</button>
      </div>
      <div className='page-1'>
        <h1><span className='color-text'>Dive</span> Into The Depths</h1>
        <h1>Of <span className='color-text'>Virtual Reality</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore nisl 
          tincidunt eget. Lectus mauris eros in vitae .
        </p>
        <button className='build-ur-world'>BUILD YOUR WORLD</button>
        <svg className='shape' width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333" 
        stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" 
        stroke-linejoin="round"/>
        </svg>
        <div className='shadow'></div>
        <div className='vr-prototype'>
         <img src={poorGirl} />
        </div>
      </div>
    </div>
  );
}

export default App;
