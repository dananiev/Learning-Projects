import React, { useContext } from 'react'
import ReactLogo from './ReactLogo.svg.png';
import { links, social } from './data';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useContext(AppContext);

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={ReactLogo} className='logo' alt='react-logo' />
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {links.map((link) => {
                    const { id, url, text, icon } = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
