import logo from './imgs/Logo.png'
import logoText from './imgs/logo-text.png'

function App() {
  return (
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
  );
}

export default App;
