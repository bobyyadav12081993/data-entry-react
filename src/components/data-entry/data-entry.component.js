import React from "react";
import DayModal from "./../day-modal/day-modal.component";

class DataEntry extends React.Component {
  constructor() {
    super();
    this.dayModalRef = React.createRef();
    this.state = {
      data: [
        {
          stateName: "Maharashtra",
          dateReported: "12/05/2020",
          newCases: 1000,
          recovered: 35,
          deceased: 10,
          name: "Test",
        },
        {
          stateName: "Maharashtra",
          dateReported: "12/05/2020",
          newCases: 1000,
          recovered: 35,
          deceased: 10,
          name: "Test",
        },
        {
          stateName: "Maharashtra",
          dateReported: "12/05/2020",
          newCases: 1000,
          recovered: 35,
          deceased: 10,
          name: "Test",
        },
      ],
      rowData: null,
    };
    this.openDayModal = this.openDayModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.editData = this.editData.bind(this);
  }

  openDayModal() {
    this.setState({ rowData: null });
    this.dayModalRef.current.openModal();
  }

  nextClick(data) {
    console.log(data);
    this.dayModalRef.current.closeModal();
  }

  editData(row) {
    console.log(row);
    this.setState({ rowData: row }, () => {
      this.dayModalRef.current.openModal();
    });
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
                    <td>{row.dateReported}</td>
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
        <DayModal rowData={this.state.rowData} ref={this.dayModalRef} nextClick={this.nextClick}></DayModal>
      </div>
    );
  }
}

export default DataEntry;
