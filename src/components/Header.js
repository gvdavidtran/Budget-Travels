import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


class Header extends React.Component {
  render() {
    return(
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className="container">
            <Typography variant="title" color="inherit">
              Budget Travels
            </Typography>
            
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;