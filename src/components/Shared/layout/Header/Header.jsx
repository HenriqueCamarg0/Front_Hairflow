import Header from './Header.module.css';
import React from 'react';
import { FaUserCircle, FaCut } from 'react-icons/fa';

const HeaderComponent = () => {
    return (
        <header className={Header.header}>
            <div className={Header.logo}>
                <FaCut className={Header.icon} />
                <span>HairFlow</span>
            </div>
            <div className={Header.profile}>
                <FaUserCircle className={Header.profileIcon} />
            </div>
        </header>
    );
};

export default HeaderComponent;