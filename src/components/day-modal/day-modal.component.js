import React from "react";
import $ from "jquery";
import DayData from "../day-data/day-data.component";
import ReviewData from "./../day-review-modal/day-review-modal.component";

class DayModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      dayData: null,
      isPreview: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.modalContent = this.modalContent.bind(this);
    this.openModal = this.openModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(data) {
    console.log("next function");
    this.setState({ isPreview: true });
  }

  openModal() {
    $("#dayModal").modal("show");
  }

  modalContent() {
    if (this.state.isPreview) {
      return <ReviewData dayData={this.state.dayData}></ReviewData>;
    } else {
      return <DayData dayData={this.props.rowData} nextClick={this.nextClick}></DayData>;
    }
  }

  closeModal() {
    $("#dayModal").modal("hide");
  }
  render() {
    return (
      <div
        className="modal fade"
        data-backdrop="static"
        id="dayModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          {this.modalContent()}
        </div>
      </div>
    );
  }
}

export default DayModal;
