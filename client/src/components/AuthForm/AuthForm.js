import React from "react";
import classes from "./AuthForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { setIsLoggedIn } from "../../actions/isLoggedIn";
import { connect } from "react-redux";
class AuthForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    authError: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  onSubmitRequest = async event => {
    event.preventDefault();
    const url = this.props.register ? "http://localhost:3000/api/users/create" : "http://localhost:3000/api/users/login";
    try {
       await axios.post(url, this.state);
      this.props.dispatch(setIsLoggedIn(true));
      this.setState({ authError: false });
      this.props.push("/home");
    } catch (e) {
      this.setState({ authError: true });
      this.props.dispatch(setIsLoggedIn(false));
    }
  };

  getFields = () => {
    let fields;
    if (this.props.register) {
      fields = [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" }
      ];
    } else {
      fields = [{ name: "email", label: "Email", type: "email" }, { name: "password", label: "Password", type: "password" }];
    }
    return fields;
  };

  render() {
    return (
      <form onSubmit={this.onSubmitRequest} className={classes.container} autoComplete="off">
        {this.getFields().map(field => (
          <TextField
            key={field.name}
            required
            type={field.type}
            label={field.label}
            className={classes.textField}
            value={this.state[field.name]}
            onChange={this.handleChange(field.name)}
            margin="normal"
          />
        ))}

        <Button size="large" color="primary" type="submit">
          Submit
        </Button>
        {this.state.authError && <p className={classes.error}>Authentication Failed</p>}
      </form>
    );
  }
}
export default connect()(AuthForm);
