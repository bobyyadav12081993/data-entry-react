import React from "react";
import $ from "jquery";

class DayData extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      dayData: {
        dateReported: "",
        recovered: "",
        deceased: "",
        name: "",
        stateName: "",
        newCases: "",
      },
      isUpdate: false,
    };
    this.modalRef = React.createRef();
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      dayData: {
        dateReported: "",
        recovered: "",
        deceased: "",
        name: "",
        stateName: "",
        newCases: "",
      },
      isUpdate: false,
    });
  }

  handleChange() {}

  componentWillReceiveProps(prop) {
    console.log(prop);
    if (prop.dayData) {
      this.setState({ isUpdate: true, dayData: prop.dayData }, () => {
        console.log("state update::", this.state);
      });
    } else {
      this.setState(this.initialState);
    }
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Data
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputEmail1">
                Data Entry Operator Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Data Entry Operator Name"
                value={this.state.dayData.name}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                State or UT
              </label>
              <input
                value={this.state.dayData.stateName}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="State or UT"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Date Reported
              </label>
              <input
                value={this.state.dayData.dateReported}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Date Reported"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                New Cases Reported
              </label>
              <input
                value={this.state.dayData.newCases}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="New Cases Reported"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Recovered Cases
              </label>
              <input
                value={this.state.dayData.recovered}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Recovered Cases"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Deceased Cases
              </label>
              <input
                value={this.state.dayData.deceased}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Deceased Cases"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="mx-auto">
            <button type="button" className="btn btn-secondary mr-2" data-dismiss="modal">
              Cancel
            </button>
            <button onClick={() => this.props.nextClick(this.state.dayData)} type="button" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DayData;
