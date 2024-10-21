import React from "react";
import TopHeader from "../../Components/top_header/top_header";
import Sec_Nav from "../../Components/sec_nav/sec_nav";
import Iconic from "../../Assets/images/Card iconic efootball.jpg"
import Mission_1 from "../../Assets/images/mission-1.jpg"
import Mission_2 from "../../Assets/images/mission-2.jpg"
import Mission_3 from "../../Assets/images/mission-3.jpg"
import './Missions.css'

function Missions(){
    return(
        <div>
            <TopHeader/>
            <Sec_Nav/>
            <div className="w-100 d-flex justify-content-center mt-5">
                <div style={{width: '70%',display: 'flex',justifyContent: 'space-between'}}>
                    <div className="mission-list">
                        <img src={Mission_1} />
                    </div>
                    <div className="mission-list">
                        <img src={Mission_2} />
                    </div>
                    <div className="mission-list">
                        <img src={Mission_3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Missions;