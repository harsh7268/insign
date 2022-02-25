import { useState } from 'react';
import '../css/Navbar.css';
const  NavBar = () =>{
    const [menuVal,setMenuVal] = useState('deActive')
   
    const  menu = () =>{
        if(menuVal==='active'){
            setMenuVal('deActive')
        }
        else{
            setMenuVal('active')   
        }
    };

    return (
        <nav>
        <div className="logo">
         <i className="fab fa-chrome icon-1" ></i>
         <span>Insignia</span>
        </div>
        <ul className={`menu-bar ${menuVal}`} id="menu-bar">
            <li>About</li>
            <li>Help</li>
            <li>Features</li>
            <li>Signup</li>
 
            <li ><div className="request"><span>Request Demo</span><i className="fas fa-long-arrow-alt-right" id="icon-2"></i></div></li>
        </ul>
        
         <i className="fas fa-bars fa-2x" id="menu-btn" onClick={menu}></i>
       
     </nav>
    );
}

export default NavBar;