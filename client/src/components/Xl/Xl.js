import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCells } from "../../actions/cells";
import ReactDataSheet from "react-datasheet";
import "./Xl.scss";
import { mapCellsToGrid } from "../../utils/mapCellsToGrid";
class Xl extends Component {
  componentDidMount() {
    this.getXl();
  }
  getXl = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/xls/get");
      const cells = res.data.data;
      this.props.dispatch(setCells(cells));
    } catch (e) {
      throw Error(e, "Could not fetch cells from db");
    }
  };
  render() {
    return <ReactDataSheet data={mapCellsToGrid(this.props.cells)} valueRenderer={cell => cell.value} />;
  }
}
const mapStateToProps = ({ cells }) => ({ cells });
export default connect(mapStateToProps)(Xl);
