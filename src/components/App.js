import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import NavigationIcon from '@material-ui/icons/Navigation';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



class App extends Component {
  

  render() {
    var date = new Date();
    return (
      <div className="App">
        <Header></Header>
        <div className="hero">
          <div className="container">
            <Grid container spacing={16} justify="center">
              <Grid item xs={12}>
                <Paper>
                  <div className="search-area">
                    <Typography variant="headline">Find your next destination according to your budget!</Typography>
                    <div className="search-bar">
                      <TextField
                      id="origin"
                      label="Origin"
                      type="text"
                      margin="normal"
                    />

                    <TextField
                      id="budget"
                      label="Budget"
                      type="number"
                      margin="normal"
                    />

                    <TextField
                      id="departure"
                      label="Departure Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                    />

                    <TextField
                      id="return"
                      label="Return Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                    />
                    </div>
                    

                    <br/>

                    <Button variant="extendedFab" color="secondary" aria-label="search" >
                      <NavigationIcon  />
                      <Typography variant="button" color="inherit">Search</Typography>
                    </Button>
                  </div>
                </Paper> 
              </Grid>
            </Grid>
          </div>
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Budget Travels</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="container">

          <div className="destination-ideas">
            <Card>
              <CardMedia
                image="../images/pietro-de-grandi-329892-unsplash.jpg"
                title="Vietnam"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Vietnam
                </Typography>
                <Typography component="p">
                  Vietnam is located in South East Asia. Very hot. Very nice.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardMedia
                image="../images/pietro-de-grandi-329892-unsplash.jpg"
                title="Vietnam"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Vietnam
                </Typography>
                <Typography component="p">
                  Vietnam is located in South East Asia. Very hot. Very nice.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
