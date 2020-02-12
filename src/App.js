import React from "react";
import { Home } from "./Home";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from './background.jpg';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Page1}/>
        <Route path="/page1" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
  
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const styles = {
  paperContainer: {
      border: '5px',
      borderStyle: 'solid',
      borderColor: 'grey',
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '5px',
  }
};
class Page1 extends React.Component{
  constructor(){
    super();
    this.state = {
      password : "",
    };
  }
  doCheck = ()=> {
    if(this.state.password === "12345"){
      this.props.history.push('/page1')
    }
  }
  getText = (event)=> {
    this.setState({password: event.target.value});
  }
  render(){
    const classes = useStyles;
    return(
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={4} style={styles.paperContainer}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h1>Home Page</h1>
              <input type="text" onChange={this.getText}></input>
              <input type="button" onClick={this.doCheck}></input>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} style={styles.paperContainer}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>

        </Grid>
    </div>
    );
  }
}

export default App;
