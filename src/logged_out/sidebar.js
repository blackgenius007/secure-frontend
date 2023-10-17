import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ handleLogout, isOpen, toggleDrawer }) => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  return (
    <div className="sidebar">
      <React.Fragment key="Browse">
        {isOpen ? (
          <Button onClick={toggleDrawer(false)}>Close</Button>
        ) : (
          <Button onClick={toggleDrawer(true)}>Browse</Button>
        )}
      </React.Fragment>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: '250px' }}
          role="presentation"
        >
          {/* Sidebar content */}
          <List>
            {[
              { text: 'Dashboard', path: 'dashboard', icon: <DashboardIcon /> },
          
            //   { text: 'Create new Inmate', path: 'new' },
            //   { text: 'View Inmates', path: 'inmates' },
            //   { text: 'Profile', path: 'profile' },
              { text: 'Create new Inmate ', path: 'new', icon: <AccountBalanceIcon /> },
              { text: 'View Inmates', path: 'inmates', icon: <PeopleIcon /> },
              { text: 'Visitation matrix', path: 'visits', icon: <ShoppingBasketIcon /> },
              { text: 'Case files', path: 'files', icon: <ShoppingBasketIcon /> },
              { text: 'Inventory', path: 'request', icon: <AssignmentIcon /> },
              { text: 'Settings', icon: <SettingsIcon /> },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={`/${item.path}`}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text || item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { text: 'Reports', icon: <InboxIcon /> },
              { text: 'Logout', icon: <LogoutIcon />, onClick: handleLogout },
            ].map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={item.onClick}
                button
              >
                <ListItemButton component={Link} to={`/${item.text.toLowerCase()}`}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
