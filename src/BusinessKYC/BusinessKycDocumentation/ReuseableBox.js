import React, { Component } from "react";
import DatePicker from "react-datepicker";
import crossImg from "../../images/red-cross.png";
import uploadFile from "../../images/upload-file.png";
import fileIcon from "../../images/file-icon.png";
import close from "../../images/close.png";
import upload from "../../images/upload-icon.png";

import { Link } from "react-router-dom";

import "./BusinessKycDocumentation.css";
// import "../kycBusiness.css";
import "../kycResBus.css";
const ReuseableBox = props => {
  return (
    <>
      <div className="tabcontent pt-4" id="idcards">
        <form>
          <div className="row">
            <div className="col-12">
              <div className="input-txt-d">
                <div className="fancyInput mr-md-4">
                  {props.activeTab === "idCard" ? (
                    <input
                      type="text"
                      placeholder="ID Card Number"
                      onChange={e => props.changeHandler(e)}
                      name="idCard"
                      value={props.inputValue}
                    />
                  ) : props.activeTab === "passPort" ? (
                    <input
                      type="text"
                      placeholder="Passport No"
                      onChange={e => props.changeHandler(e)}
                      name="passport"
                      value={props.inputValue}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="License No"
                      onChange={e => props.changeHandler(e)}
                      name="license"
                      value={props.inputValue}
                    />
                  )}
                </div>
                <div className="fancyInput position-relative">
                  <DatePicker
                    placeholderText="Expiration Date"
                    selected={props.date}
                    onChange={props.dateChange}
                    name={props.dateName}
                    dateFormat="dd/MM/yy"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="pt-2 mb-3">
                <h4 className="sub-head">Upload Documents</h4>
              </div>
              <div>
                <p className="fs-14-dashbaord m-0">
                  We require both sides of your documents
                </p>
              </div>
              <div
                className="uploaded-file-btn mt-3 mb-2"
                onClick={() => props.changeModelhandler(0)}
              >
                Drag your file to upload or Browse
              </div>
              <p className="row mb-2">
                {props.image.map((img, id) => (
                  <p key={id}>
                    <img
                      src={img}
                      alt="files"
                      className="documentationImg mr-2"
                    />
                    <img
                      src={crossImg}
                      className="docimagcancel"
                      onClick={() => props.onImageCancel(id, 0)}
                    />
                  </p>
                ))}
              </p>
              <p className="m-0 fs-12">
                Maximum size of image 8MB. JPG, PNG
              </p>
            </div>
            <div className="col-lg-12">
              <h3 className="m-0 head-main pt-4">2. Proof of Address </h3>
              <p className="m-0 fs-14-dashbaord pt-3">
                Proof of address document can be one of the following:
                Bank/credit card statment or a utility bill . More{" "}
              </p>
              <div
                className="uploaded-file-btn mt-3 mb-2"
                onClick={() => props.changeModelhandler(1)}
              >
                Drag your file to upload or Browse
              </div>
              <p className="row mb-2">
                {props.image1.map((img, id) => (
                  <p key={id}>
                    <img
                      src={img}
                      alt="files"
                      className="documentationImg mr-2"
                    />
                    <img
                      src={crossImg}
                      className="docimagcancel"
                      onClick={() => props.onImageCancel(id, 1)}
                    />
                  </p>
                ))}
              </p>
              <p className="m-0 fs-12">
                Maximum size of image 8MB. JPG, PNG
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Upload modal */}
      {props.modal ? (
        <div id="uploadModal" className="modal upload-flies">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="text-center modal-content">
              <span className="close-btn text-right">
                <img
                  src={close}
                  alt="close"
                  className="close"
                  onClick={props.changeModelFalse}
                />
              </span>
              <h3 className="m-0 pt-4 pb-3 upld-hd">Upload Documents</h3>
              <p className="modal-desc">
                Select the documents from your local drive
              </p>
              <div className="drag-file mb-2">
                <label>
                  Drag your file to upload or Browse
                  <input
                    type="file"
                    size="60"
                    name="img1"
                    onChange={props.handleFileChange}
                  />
                  <span>
                    <img src={upload} alt="upload" />
                  </span>
                </label>
              </div>
              {props.imageName == undefined ? null : (
                <div className="uploaded-file">
                  <img src={fileIcon} alt="file" />
                  <span className="ml-1">{props.imageName}</span>
                </div>
              )}
              <div className="upld-cancl-btn mt-3 d-flex">
                <button
                  type="submit"
                  className="upld-btn btn"
                  onClick={props.uploadButton}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="btn close cancl-btn"
                  onClick={props.changeModelFalse}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReuseableBox;
