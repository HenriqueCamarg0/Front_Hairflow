import React, { useState } from 'react';
import { FaUserCircle, FaCut } from 'react-icons/fa';
import Header from './Header.module.css';
import { useNavigate } from 'react-router-dom'; 

const HeaderComponent = () => {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate(); 

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const logout = () => {
        console.log("Saindo do sistema...");
        navigate('/login'); // Redireciona para a página de login
    };

    return (
        <header className={Header.header}>
            <div className={Header.logo}>
                <FaCut className={Header.icon} />
                <span>HairFlow</span>
            </div>
            <div className={Header.profile}>
                <button className={Header.profileButton} onClick={toggleOptions}>
                    <FaUserCircle className={Header.profileIcon} />
                </button>
                {showOptions && (
                    <div className={Header.optionsMenu}>
                        <button className={Header.option} onClick={logout}>Sair</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;
