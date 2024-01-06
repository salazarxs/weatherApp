import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Styles
import '../styles/Navbar.css';

// Icons
import { IoMdSettings } from 'react-icons/io';
import { IoUmbrella } from 'react-icons/io5';
import { FaCloudSun } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';

const Navbar = () => {

    return (
        <div className="container-nav" >
            <nav >
                <ul>
                    <li>
                        <Link to='/'>
                            <IoUmbrella />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <FaCloudSun />Weather
                        </Link>
                    </li>
                    <li>
                        <Link to='/cities'>
                            <TfiMenuAlt />Cities
                        </Link>
                    </li>
                    <li>
                        <Link to='/settings'>
                            <IoMdSettings />Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
