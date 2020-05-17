import React from "react";
// import DayModal from "./../day-modal/day-modal.component";
import DayModal from "./../../container/day-modal-container";
import { GET } from "../../services/http.service";
import { API_URL } from "../../constants/constants";
import * as moment from "moment";

class DataEntry extends React.Component {
  constructor() {
    super();
    this.dayModalRef = React.createRef();
    this.state = {
      data: [],
      rowData: null,
    };
    this.openDayModal = this.openDayModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.editData = this.editData.bind(this);
  }

  componentDidMount() {
    GET(API_URL.GET_DATA).then((data) => {
      this.setState({ data });
    });
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
          <div className="form-check col text-right">
            <input className="form-check-input" id="theme" type="checkbox"></input>
            <label className="form-check-label" htmlFor="theme">
              Dark Theme
            </label>
          </div>
        </div>

        <div className="row form-group">
          <button onClick={this.openDayModal} className="btn btn-success mx-auto">
            Add Data
          </button>
        </div>

        <div>
          <table className="table">
            <thead>
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
              {this.state.data.map((row, i) => {
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
        </div>
        <DayModal ref={this.dayModalRef}></DayModal>
      </div>
    );
  }
}

export default DataEntry;
