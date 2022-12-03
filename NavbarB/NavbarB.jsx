import { React, useState } from 'react';

import { FaHamburger } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import './NavbarB.css';

const NavbarB = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h1>Logo</h1>
            </div>

            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>Domů</a></li>
                <li className='p__opensans'><a href='#aboutus'>O Nás</a></li>
            </ul>

            <div className='app__navbar-login'>
                <a href="#login" className='p__opensans'>Telefon</a>
            </div>

            <div className='app__navbar-smallscreen'>
                <FaHamburger color="#230000" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <AiOutlineCloseCircle color="#230000" fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li><a href='#home' onClick={() => setToggleMenu(false)}>Domů</a></li>
                            <li><a href='#aboutus' onClick={() => setToggleMenu(false)}>O Nás</a></li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default NavbarB