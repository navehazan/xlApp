import React from "react";
import { connect } from "react-redux";
import Xl from "../Xl/Xl";
const Home = props => {
  const jsx = props.isLoggedIn ? <Xl /> : <h1>You are not allowed to access this page</h1>;
  return jsx;
};
const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
export default connect(mapStateToProps)(Home);
