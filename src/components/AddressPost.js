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

const AddressPost = () => {
  const [enroll_company, setEnroll_company] = useState({
    zonecode: "",
    address: "",
    detailedAddress: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = () => {
    setPopup(!popup);
  };

  const handlePopupClose = () => {
    setPopup(false); // Callback function to update the `popup` variable
    document.getElementById("detailedAddressInput").focus(); // Focus the detailed address input field
  };

  return (
    <div className="address-search">
      <label className="address-label">우편번호</label>
      <input
        className="user_enroll_text"
        placeholder="우편번호"
        type="text"
        required={true}
        name="zonecode"
        onChange={handleInput}
        value={enroll_company.zonecode}
      />
      <button onClick={handleComplete}>우편번호 찾기</button>
      <br />
      <label className="address-label">주소 </label>
      <input
        className="user_enroll_text"
        placeholder="주소"
        type="text"
        required={true}
        name="address"
        onChange={handleInput}
        value={enroll_company.address}
      />
      {popup && (
        <Post
          company={enroll_company}
          setCompany={setEnroll_company}
          onComplete={handlePopupClose}
          onClose={handlePopupClose} // Pass the close callback to the Post component
        />
      )}
      <input
        id="detailedAddressInput"
        className="detailed-address-input"
        placeholder="상세주소"
        type="text"
        required={true}
        name="detailedAddress"
        value={enroll_company.detailedAddress}
        onChange={handleInput}
      />
    </div>
  );
};

export default AddressPost;
