import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styles from "./../style/components/AddressPost.scss";

const Post = (props) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      //도로명주소
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setCompany({
      ...props.company,
      zonecode: data.zonecode, // Update postal code
      address: fullAddress, // Update address
    });

    props.onComplete(); // Callback function to notify the parent component
  };

  const handleClose = () => {
    props.onClose(); // Callback function to close the popup
  };

  return (
    <>
      <div className="address-main">
        <div className="close-button-container">
          <button className="close-button" onClick={handleClose}>
            X
          </button>{" "}
        </div>
        <div className="daum-postcode-container">
          {" "}
          <DaumPostcode
            className={styles.postmodal}
            autoClose
            onComplete={complete}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
