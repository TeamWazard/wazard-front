import { useState, useContext } from "react";

// export const company_list

const companyList = () => {
  const companys = [
    {
      company_id: "0",
      user_id: "0",
      company_name: "CU",
      address: "서울특별시 종로구 CU",
      tel: "02-3333-2323",
      company_img: null,
    },
    {
      company_id: "1",
      user_id: "0",
      company_name: "gs",
      address: "서울특별시 종로구 CU",
      tel: "02-3333-2323",
      company_img: null,
    },
  ];
  //   const [companys, setCompanys] = useState([
  //     {
  //       company_id: "0",
  //       user_id: "0",
  //       company_name: "CU",
  //       address: "서울특별시 종로구 CU",
  //       tel: "02-3333-2323",
  //       company_img: null,
  //     },
  //     // (company_id = "0"),
  //     // (user_id = "0"),
  //     // (company_name = "CU"),
  //     // (address = "서울특별시 종로구 CU"),
  //     // (tel = "02-3333-2323"),
  //     // (company_img = null),
  //   ]);

  //   const onCreateCompany = () => {
  //     const newCompany = {
  //       company_id,
  //       user_id,
  //       company_name,
  //       address,
  //       tel,
  //       company_img,
  //     };
  //     setCompanys(...companys, newCompany);
  //   };

  return (
    <div className="company_list_page">
      <div className="company_list_wrapper">
        <div className="title">
          <h2>운영중인 업장</h2>
        </div>
        <div className="list">
          {companys.map((it) => (
            <div className="compant_one">
              <div className="company_img">img test</div>
              <div>업장명:{it.company_name}</div>
              <div>주소:{it.address}</div>
              <div>전화번호:{it.tel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default companyList;
