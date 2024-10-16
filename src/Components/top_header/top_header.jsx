import React from "react";
import gp from '../../Assets/images/gp.png'
import coin from '../../Assets/images/efootball-coins.webp'
import './top_header.css'

function TopHeader() {
    return(
        <div className="mt-2">
            <nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-around nav-top mt-1 px-5">
                            <div className="d-flex">
                                <div className="ratio ratio-1x1" style={{width: '37px', height: '37px'}}>
                                    <img style={{width: '100%', height: '100%', objectfit: 'cover',}} src={coin}></img>
                                </div>
                                <div className="pt-2">
                                    <p className="text-white ms-2">12,000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="ratio ratio-1x1" style={{width: '37px', height: '37px',}}>
                                    <img style={{width: '100%', height: '100%', objectfit: 'cover',}} src={gp} alt=""></img>
                                </div>
                                <div className="pt-2">
                                    <p className="text-white ms-2">15,23000</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-circle-info top-nav-icons"></i>
                            <i className="fa-solid fa-user-group top-nav-icons"></i>
                            <i className="fa-solid fa-envelope top-nav-icons"></i>
                            <i className="fa-solid fa-bell top-nav-icons"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
    
}
export default TopHeader;