import React from "react";
import $ from "jquery";
// import DayData from "../day-data/day-data.component";
import DayData from "../../container/day-data-container";

// import ReviewData from "./../day-review-modal/day-review-modal.component";
import ReviewData from "./../../container/day-review-container";

class DayModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.modalContent = this.modalContent.bind(this);
    this.openModal = this.openModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.cancelReview = this.cancelReview.bind(this);
  }

  nextClick(data) {
    console.log("next function");
    this.props.addDayData(data);
    this.setState({ isPreview: true });
  }

  cancelReview() {
    console.log("cancelReview function");
    this.setState({ isPreview: false });
  }

  openModal() {
    $("#dayModal").modal("show");
  }

  modalContent() {
    if (this.state.isPreview) {
      return <ReviewData cancelReview={this.cancelReview}></ReviewData>;
    } else {
      return <DayData nextClick={this.nextClick}></DayData>;
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
