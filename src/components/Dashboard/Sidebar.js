import React from 'react';

const Sidebar = ({ activeMenuItem, onMenuItemClick }) => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className={activeMenuItem === 'home' ? 'active' : ''}>
          <button onClick={() => onMenuItemClick('home')}>Home</button>
        </li>
        <li className={activeMenuItem === 'profile' ? 'active' : ''}>
          <button onClick={() => onMenuItemClick('profile')}>Profile</button>
        </li>
        <li className={activeMenuItem === 'settings' ? 'active' : ''}>
          <button onClick={() => onMenuItemClick('settings')}>Settings</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

