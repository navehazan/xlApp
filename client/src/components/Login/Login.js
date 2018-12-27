import React from "react";
import AuthForm from "../AuthForm/AuthForm";
const Login = props => <AuthForm push={props.history.push} />;
export default Login;
