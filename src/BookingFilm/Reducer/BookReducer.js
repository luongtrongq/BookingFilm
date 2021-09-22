import { DAT_GHE, HUY_GHE } from "../_component/constants/constants";

// Lưu dữ liệu trên store
const stateDefault = {
    danhSachGheDangDat: [

    ]
}


const BaiTapDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUp = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUp.findIndex((gheDangDat) => {
                return gheDangDat.soGhe === action.ghe.soGhe
            });
            if (index !== -1) {
                danhSachGheDangDatUp.splice(index, 1)
            } else {
                danhSachGheDangDatUp.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUp;
            return { ...state }

        }
        case HUY_GHE: {
            let danhSachGheDangDatUP1 = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUP1.findIndex((gheDangDat) => {
                return gheDangDat.soGhe === action.soGhe
            });
            if (index !== -1) {
                danhSachGheDangDatUP1.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUP1
            return { ...state }
        }
        default: return { ...state }
    }
}

export default BaiTapDatVeReducer



