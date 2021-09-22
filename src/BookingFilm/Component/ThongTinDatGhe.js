import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../_component/actions/actions'
import { HUY_GHE } from '../_component/constants/constants'
class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <button style={{ marginLeft: "0 " }} className="gheDuocChon"></button> <span
                    className="text-light" style={{ marginRight: "35px", fontSize: "30px" }}>Ghế đã đặt</span>
                <br />
                <button style={{ marginLeft: "0 " }} className="gheDangChon"></button> <span
                    className="text-light" style={{ fontSize: "30px" }}>Ghế đang đặt</span>
                <br />
                <button style={{ marginLeft: "0 " }} className="ghe"></button> <span
                    className="text-light" style={{ fontSize: "30px" }}>Ghế chưa đặt</span>

                <table border="2" className="table" >
                    <thead>
                        <tr style={{ fontSize: "20px" }} className="text-light">
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Số ghế</th>

                        </tr>
                    </thead>
                    <tbody className="text-warning">
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button onClick={() => {
                                    this.props.dispatch({
                                        type: HUY_GHE,
                                        soGhe: gheDangDat.soGhe
                                    })
                                }} className="btn btn-success">Huỷ</button></td>
                            </tr>
                        })}
                        <tr>Tổng tiền
                            <td>{this.props.danhSachGheDangDat.reduce((initial, current) => {
                                return initial += current.gia
                            }, 0)}</td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>

            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}


export default connect(mapStateToProps, null)(ThongTinDatGhe)