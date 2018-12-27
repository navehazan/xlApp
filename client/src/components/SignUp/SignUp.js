import React from "react";
import AuthForm from "../AuthForm/AuthForm";
const SignUp = props => <AuthForm register={true} push={props.history.push} />;
export default SignUp;
