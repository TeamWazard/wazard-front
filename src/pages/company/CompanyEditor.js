import { useRef, useState } from "react";
import ceoIcon from "../../imgs/ceoIcon.svg";

const CompanyEditor = () => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div className="company_list_page">
      <div className="company_list_wrapper">
        <div className="title">
          <h2>업장 등록</h2>
        </div>
        <div className="list">
          <div className="editor_wrapper">
            <div className="editor_img">
              <img src={imgFile ? imgFile : ceoIcon} alt="프로필 이미지" />
              <label className="uploadImg" htmlFor="companyImg">
                이미지 업로드
              </label>
              <input
                id="companyImg"
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={saveImgFile}
              />
            </div>
            <div className="editor_right">
              <div className="editor_set">
                <label>업장명 </label>
                <input></input>
              </div>
              <div className="editor_set">
                <label>주소 </label>
                <input></input>
              </div>
              <div className="editor_set">
                <label>전화번호 </label>
                <input></input>
              </div>
              <div className="editor_set">
                <label>월급날 </label>
                <input type="date"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="editor_company">
          <button className="save">저장</button>
          <button className="cancel">취소</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyEditor;
