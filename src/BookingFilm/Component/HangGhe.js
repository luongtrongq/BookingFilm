import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../_component/actions/actions';
class HangGhe extends Component {


    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false;
            //Trạng thái ghế đã bị người khác đặt
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon"
                disabled = true
            };
            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = "";
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangDat) => {
                return gheDangDat.soGhe === ghe.soGhe;
            })
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon";
            }
            return <button
                onClick={() => {
                    this.props.datGhe(ghe)
                }}
                disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index} >
                {ghe.soGhe}
            </button >
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-3">
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        }
        else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className="text-light text-left ml-3 mt-3" style={{ fontSize: "20px" }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)