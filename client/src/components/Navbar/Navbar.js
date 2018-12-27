import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/FileCopy";
import classes from "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "../Aux/Aux";
import { setIsLoggedIn } from "../../actions/isLoggedIn";
const ButtonAppBar = props => {
  const onLogOut = () => {
    props.dispatch(setIsLoggedIn(false));
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            XL
          </Typography>
          {props.isLoggedIn ? (
            <Button component={Link} color="inherit" onClick={onLogOut} to="/">
              Log Out
            </Button>
          ) : (
            <Aux>
              <Button component={Link} color="inherit" to="/">
                Register
              </Button>
              <Button component={Link} color="inherit" to="/login">
                Login
              </Button>
            </Aux>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
export default connect(mapStateToProps)(ButtonAppBar);
