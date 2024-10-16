import React from "react";
import './sec_nav.css'

function Sec_Nav(){
    return(
        <div class="container mt-3">
            <div class="row">
                <div class="col-12">
                    <div style={{width:'100%',display: 'flex',justifyContent:'center'}}>
                        <nav class="nav-sec-box d-flex text-white justify-content-between">
                            <div class="nav-2-item-box active">
                                <span>Home</span>
                            </div>
                            <div class="nav-2-item-box">
                                <span>Missions</span>
                            </div>
                            <div class="nav-2-item-box">
                                <span>Shop</span>
                            </div>
                            <div class="nav-2-item-box">
                                <span>Extras</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sec_Nav;