import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas-fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                            NAME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}> 
                            EMAIL
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/rooms' className='nav-links' onClick={closeMobileMenu}> 
                            COMPANY
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}> 
                            FOLLOWERS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}> 
                            FOLLOWING
                            </Link>
                        </li>
                    </ul>
                    {button && <button buttonstyle='btn--outline'className="buttons" >GitHub </button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
