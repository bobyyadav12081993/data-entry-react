/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DayModal from "./../../container/day-modal-container";
import { GET } from "../../services/http.service";
import { API_URL } from "../../constants/constants";
import * as moment from "moment";
import "./data-entry.scss";

class DataEntry extends React.Component {
  constructor() {
    super();
    this.dayModalRef = React.createRef();
    this.state = {
      data: [],
      pagination: 1,
    };
    this.limit = 50;
    this.openDayModal = this.openDayModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.editData = this.editData.bind(this);
    this.getData = this.getData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.pagination = this.pagination.bind(this);
    this.changePagination = this.changePagination.bind(this);
    this.previousPagination = this.previousPagination.bind(this);
  }

  previousPagination() {
    if (this.state.pagination > 1) {
      this.setState({ pagination: this.state.pagination - 1 });
    }
  }

  changePagination(index) {
    this.setState({ pagination: index });
  }

  pagination() {
    if (this.state.data.length > this.limit) {
      const range = this.state.data.length / this.limit;
      const items = [];

      for (let i = 1; i <= range; i++) {
        items.push(
          <li key={i} onClick={() => this.changePagination(i)} className={"page-item " + (this.state.pagination === i ? "active" : "")}>
            <a className={"page-link " + this.props.theme} href="#">
              {i}
            </a>
          </li>
        );
      }
      return (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li onClick={this.previousPagination} className={"page-item " + (this.state.pagination === 1 ? "disabled" : "")}>
              <a className={"page-link " + this.props.theme} href="#">
                Previous
              </a>
            </li>
            {items}
          </ul>
        </nav>
      );
    }
  }

  handleInputChange(event) {
    this.props.changeTheme(event.target.checked);
  }

  getData() {
    GET(API_URL.GET_DATA).then((data) => {
      this.setState({ data });
    });
  }

  componentDidMount() {
    this.getData();
  }

  openDayModal() {
    this.props.resetState();
    this.dayModalRef.current.openModal();
  }

  nextClick(data) {
    console.log(data);
    this.dayModalRef.current.closeModal();
  }

  editData(row) {
    console.log(this.props);
    this.props.editDayData({
      isUpdate: true,
      dayData: row,
      isReview: false,
    });
    this.dayModalRef.current.openModal();
  }
  render() {
    return (
      <div>
        <div className="form-group row">
          <div className="custom-control custom-switch col text-right">
            <input className="custom-control-input" onChange={this.handleInputChange} id="theme" type="checkbox"></input>
            <label className={`custom-control-label cus-text-${this.props.theme}`} htmlFor="theme">
              Dark Theme
            </label>
          </div>
        </div>

        <div className="row form-group">
          <button onClick={this.openDayModal} className={`btn btn-${this.props.theme} mx-auto`}>
            Add Data
          </button>
        </div>

        <div>
          <table className={`table ${this.props.theme === "dark" ? "table-dark" : ""} table-hover`}>
            <thead className={`thead-${this.props.theme}`}>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Date</th>
                <th scope="col">New</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deceased</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.slice((this.state.pagination - 1) * this.limit, this.state.pagination * this.limit).map((row, i) => {
                return (
                  <tr key={i}>
                    <td>{row.stateName}</td>
                    <td>{moment(row.dateReported).format("DD/MM/YYYY")}</td>
                    <td>{row.newCases}</td>
                    <td>{row.recovered}</td>
                    <td>{row.deceased}</td>
                    <td>
                      <button onClick={() => this.editData(row)} className="btn btn-link">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {this.pagination()}
        </div>
        <DayModal getData={this.getData} ref={this.dayModalRef}></DayModal>
      </div>
    );
  }
}

export default DataEntry;
