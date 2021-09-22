import React, { Component, Fragment } from 'react'
import "./BaiTapBookingTicket.css"
import ThongTinDatGhe from './ThongTinDatGhe'
import HangGhe from './HangGhe'
import data from "../data/danhSachGhe.json"
export default class BookingFilm extends Component {



    renderHangGhe = () => {
        return data.map((hangGhe, index) => {

            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return <div style=
            {{
                position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/Oantuxi/bgMovie.jpg')",
                backgroundSize: "100%"
            }}>
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.8)', position: "fixed", width: "100%", height: "100%"
            }
            }>  <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className="text-light display-4">ĐẶT VÉ XEM PHIM</div>
                            <div className="mt-3 text-light" style={{ fontSize: "25px" }}> Màn hình</div>
                            <div className="mt-2" style={{ marginLeft: "70px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div className=" ml-5 screen">
                                </div>
                                {this.renderHangGhe()}
                            </div>

                        </div>
                        <div className="col-4 text-center ">
                            <div className="text-light display-4 ">DANH SÁCH GHẾ BẠN CHỌN</div>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>
            </div >


        </div >

    }
}
