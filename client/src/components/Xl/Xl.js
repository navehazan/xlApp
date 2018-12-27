import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCells } from "../../actions/cells";
import ReactDataSheet from "react-datasheet";
import  "./Xl.scss";
import { mapCellsToGrid } from "../../utils/mapCellsToGrid";
class Xl extends Component {
  componentDidMount() {
    this.getXl();
  }
  getXl = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/xls/get");
      const cells = res.data.data.cells;
      this.props.dispatch(setCells(cells));
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <ReactDataSheet
        data={mapCellsToGrid(this.props.cells)}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}
const mapStateToProps = ({ cells }) => ({ cells });
export default connect(mapStateToProps)(Xl);
