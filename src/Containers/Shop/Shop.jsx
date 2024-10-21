import React from "react";
import TopHeader from "../../Components/top_header/top_header";
import Sec_Nav from "../../Components/sec_nav/sec_nav";
import Iconic from "../../Assets/images/Card iconic efootball.jpg"
import Shop_1 from "../../Assets/images/shop-1.jpg"
import Shop_2 from "../../Assets/images/shop-2.jpg"
import Shop_3 from "../../Assets/images/shop-3.jpg"
import './Shop.css'

function Shop(){
    return(
        <div>
            <TopHeader/>
            <Sec_Nav/>
            <div className="w-100 d-flex justify-content-center mt-5">
                <div style={{width: '70%',display: 'flex',justifyContent: 'space-between'}}>
                    <div className="shop-list">
                        <img src={Shop_1} />
                    </div>
                    <div className="shop-list">
                        <img src={Shop_2} />
                    </div>
                    <div className="shop-list">
                        <img src={Shop_3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop;