import React from "react";
import classes from "./EditWindow.scss";
import TextField from "@material-ui/core/TextField";
import { updateCell } from "../../actions/cells";
import { connect } from "react-redux";
import axios from "axios";
class EditWindow extends React.Component {
  state = {
    value: ""
  };
  componentWillUnmount() {
    this.props.dispatch(updateCell(this.props.row, this.props.column, this.state.value));
    this.updateXlInDb();
  }
  updateXlInDb = async () => {
    try {
      await axios.put("http://localhost:3000/api/xls/update", this.props.cells);
    } catch (e) {
      throw Error(e,"Could not update cells in db")
    }
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };
  render() {
    return <TextField label="New Value" className={classes.textField} defaultValue={this.props.value} onChange={this.handleChange} margin="normal" />;
  }
}
const mapStateToProps = ({ cells }) => ({ cells });
export default connect(mapStateToProps)(EditWindow);
