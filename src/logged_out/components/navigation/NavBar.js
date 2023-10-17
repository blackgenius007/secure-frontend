import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fily from '../../../assets/img/about/54.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookIcon from '@mui/icons-material/Book';
import NavigationDrawer from '../../../shared/components/NavigationDrawer';

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Zen Loop', cursive",
    fontWeight: 200,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
});

function NavBar(props) {
  const { user, isSuccess } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    openLoginDialog2,
    openLoginDialog3,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: '/',
      name: 'Home',
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: '/blog',
      name: 'Blog',
      icon: <BookIcon className="text-white" />,
    },
    {
      name: 'Sign up',
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
  
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
          <Hidden smDown>
          title={<img src={fily} alt="logo" style={{ maxHeight: '56px' }} />} 
            </Hidden>              
             
             <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              // color="secondary"
              style={{color:'grey'}}
            >
              Workstreet 
            </Typography>
           <small
                      
                      ><i>
                        Everything you need is now in one place...
                      </i>
                        
                      </small>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>

          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              classes={{ text: classes.menuButtonText }}
              onClick={handleClick}
            >
              Login
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={{ text: classes.menuButtonText }}
            >
              <MenuItem onClick={openLoginDialog}>Employer</MenuItem>
              <MenuItem  onClick={openLoginDialog2}>Supplier</MenuItem>
              <MenuItem  onClick={openLoginDialog3}>Job Seeker</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  openLoginDialog2: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
