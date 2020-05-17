import React from "react";

class ReviewData extends React.Component {
  render() {
    return (
      <div className={`modal-content theme-${this.props.theme}`}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Review Data
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-6">
              <label>Date Entry Operator Name</label>
            </div>
            <div className="col-6">: {this.props.dayData.name}</div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>State or UT</label>
            </div>
            <div className="col-6">: {this.props.dayData.stateName}</div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Date Reported</label>
            </div>
            <div className="col-6">: {this.props.dayData.dateReported}</div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>New Cases Reported</label>
            </div>
            <div className="col-6">: {this.props.dayData.newCases}</div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Recovered Cases</label>
            </div>
            <div className="col-6">: {this.props.dayData.recovered}</div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Deceased Cases</label>
            </div>
            <div className="col-6">: {this.props.dayData.deceased}</div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="mx-auto">
            <button onClick={this.props.cancelReview} type="button" className="btn btn-secondary mr-2">
              Cancel
            </button>
            <button onClick={this.props.confirmReview} type="button" className="btn btn-primary">
              Review and Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewData;
