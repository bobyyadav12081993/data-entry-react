import React from "react";
import $ from "jquery";
import "./day-modal.scss";
import DayData from "../../container/day-data-container";
import ReviewData from "./../../container/day-review-container";
import { POST } from "./../../services/http.service";
import { API_URL } from "../../constants/constants";

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
    this.confirmReview = this.confirmReview.bind(this);
  }

  nextClick(data) {
    console.log("next function");
    this.props.addDayData(data);
    this.props.changeIsReview(true);
  }

  cancelReview() {
    console.log("cancelReview function");
    this.props.changeIsReview(false);
  }

  confirmReview() {
    console.log("review confirmed", this.props.dayData);
    const payload = {
      dayData: this.props.dayData,
    };
    const url = this.props.isUpdate ? API_URL.UPDATE_DATA : API_URL.ADD_DATA;
    POST(url, payload).then((res) => {
      console.log(res);
      this.props.getData();
      this.closeModal();
    });
  }

  openModal() {
    $("#dayModal").modal("show");
  }

  modalContent() {
    if (this.props.isReview) {
      return <ReviewData confirmReview={this.confirmReview} cancelReview={this.cancelReview}></ReviewData>;
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
