import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
export const albaCompanyListSlice = createSlice({
  name: "alba_company",
  initialState: [
    {
      id: 0,
      name: "손가",
      address: "경기도 부천시 원미구 역곡동 역곡로13번길 27 1층",
      tel: "010-1234-1234",
      salary_day: 1,
      company_type: "음식점 🥘",
      company_img:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTJfMjky%2FMDAxNjY1NTU0MDk3OTIy.dK1sM3JTiyCwEnQkrEBEcpMz9_xjoNhFQ-lKbfJ56M4g.nFyN7IYrup-cay5L4SEWX1gAGcTvrXWFrKtm6eAie_Ug.JPEG.seunjoo3%2Fphoto_1665548761.jpg",
    },
  ],
  reducers: {
    addCompany: (state, action) => {
      const { name, address, tel, salary_day } = action.payload;
      state.push({ id: nextId++, name, address, tel, salary_day });
    },
  },
});

export const { alba_company } = albaCompanyListSlice.actions;
export default albaCompanyListSlice.reducer;
