import React, { useState } from 'react';

import {  Link } from 'react-router-dom';
import '../css/nav.css';







function Navbar() {


    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <nav className='navbars '>
                <div className='logos' >  <Link to='/'>CRUD Operation Form </Link></div>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                    <Link to='/create' className='Create' > <li>Create</li> </Link>
                    <Link to='/erase' className='Erase'><li>Erase</li> </Link>
                    <Link to='/update' className='Update' ><li>Update</li> </Link>
</ul>
       
        
                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className='fa-solid fa-times'></i> : <i class="fa-solid fa-bars"></i>}
                </button>

            </nav>
        </>

    )
}

export default Navbar;