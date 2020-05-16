import React from "react";

class ReviewData extends React.Component {
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
          <div className="row">
            <div className="col-6">
              <label>Operator Name</label>
            </div>
            <div className="col-6">: {this.props.dayData.name}</div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="mx-auto">
            <button type="button" className="btn btn-secondary mr-2" data-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewData;
