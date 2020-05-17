import React from "react";
import Autocomplete from "../utilities/autocomplete";
import { STATES } from "../../constants/constants";
import * as moment from "moment";

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
      isInvalid: false,
      isUpdate: false,
      statesNames: STATES,
    };
    this.modalRef = React.createRef();
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  validateData() {
    let fields = this.state.dayData;
    let formIsValid = true;
    if (!fields["name"]) {
      formIsValid = false;
    } else if (!fields["dateReported"]) {
      formIsValid = false;
    } else if (!fields["recovered"]) {
      formIsValid = false;
    } else if (!fields["newCases"]) {
      formIsValid = false;
    } else if (!fields["stateName"]) {
      formIsValid = false;
    } else if (!fields["deceased"]) {
      formIsValid = false;
    }
    return formIsValid;
  }

  nextClickHandler() {
    if (this.validateData()) {
      this.setState({ isInvalid: false });
      this.props.nextClick(this.state.dayData);
    } else {
      this.setState({ isInvalid: true });
    }
  }

  handleChange(event) {
    const numericFields = ["recovered", "deceased", "dateReported"];
    let dayData = this.state.dayData;
    if (numericFields.includes(event.target.name)) {
      const regex = /^[0-9\b]+$/;

      // if value is not blank, then test the regex

      if (event.target.value === "" || regex.test(event.target.value)) {
        dayData[event.target.name] = event.target.value;
        this.setState({
          dayData,
        });
      }
    } else {
      dayData[event.target.name] = event.target.value;
      this.setState({
        dayData,
      });
    }
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.dayData) {
      this.initialState.dayData = this.props.dayData;
      this.setState(this.initialState);
    }
  }

  componentWillReceiveProps(props) {
    console.log("props received", props);
    this.setState({ dayData: props.dayData, isUpdate: props.isUpdate, isInvalid: false });
  }

  handleAutoComplete(value) {
    let dayData = this.state.dayData;
    dayData.stateName = value;
    this.setState({
      dayData,
    });
  }

  render() {
    return (
      <div className={`modal-content theme-${this.props.theme}`}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Data
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className={"needs-validation " + (this.state.isInvalid ? "was-validated" : "")} noValidate>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputEmail1">
                Data Entry Operator Name
              </label>
              <input
                type="text"
                className="form-control"
                id="operatorName"
                name="name"
                placeholder="Data Entry Operator Name"
                value={this.state.dayData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                State or UT
              </label>
              <Autocomplete
                value={this.state.dayData.stateName}
                onChange={this.handleAutoComplete}
                options={this.state.statesNames}
              ></Autocomplete>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Date Reported
              </label>
              <input
                value={moment(this.state.dayData.dateReported).format("YYYY-MM-DD")}
                type="date"
                name="dateReported"
                className="form-control"
                id="dateReported"
                placeholder="Date Reported"
                onChange={this.handleChange}
                required
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
                id="newCases"
                name="newCases"
                placeholder="New Cases Reported"
                onChange={this.handleChange}
                required
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Only Numbers are accepted
              </small>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Recovered Cases
              </label>
              <input
                value={this.state.dayData.recovered}
                type="text"
                className="form-control"
                id="recoveredCases"
                name="recovered"
                placeholder="Recovered Cases"
                onChange={this.handleChange}
                required
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Only Numbers are accepted
              </small>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="exampleInputPassword1">
                Deceased Cases
              </label>
              <input
                value={this.state.dayData.deceased}
                type="text"
                className="form-control"
                id="deceasedCases"
                name="deceased"
                placeholder="Deceased Cases"
                onChange={this.handleChange}
                required
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Only Numbers are accepted
              </small>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="mx-auto">
            <button type="button" className="btn btn-secondary mr-2" data-dismiss="modal">
              Cancel
            </button>
            <button onClick={this.nextClickHandler} type="button" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DayData;
