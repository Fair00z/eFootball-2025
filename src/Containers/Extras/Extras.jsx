import React from "react";
import "./Extras.css"
import TopHeader from "../../Components/top_header/top_header";
import Sec_Nav from "../../Components/sec_nav/sec_nav";
import User_Information from "../../Assets/images/user-information.jpg"
import Settings from "../../Assets/images/settings.jpg"
import Help from "../../Assets/images/help.jpg"
import Training from "../../Assets/images/training.jpg"
import Support from "../../Assets/images/support.jpg"


function Extras(){
    return(
        <div>
            <TopHeader/>
            <Sec_Nav/>
            <div className="extras mt-4">
                <div className="extras-box d-flex">
                    <div className="w-50 d-flex mb-4">
                        <div className="extras-icon">
                            <img src={User_Information} />
                        </div>
                        <div className="extras-content text-white">
                            <h3>User Information</h3>
                            <p>Configure your personal information.</p>
                        </div>
                    </div>
                    <div className="w-50 d-flex mb-4">
                        <div className="extras-icon">
                            <img src={Settings} />
                        </div>
                        <div className="extras-content text-white">
                            <h3>Game Settings</h3>
                            <p>Configure your play settings.</p>
                        </div>
                    </div>
                    <div className="w-50 d-flex mb-4">
                        <div className="extras-icon">
                            <img src={Help} />
                        </div>
                        <div className="extras-content text-white">
                            <h3>Help</h3>
                            <p>Commands and how to play each mode.</p>
                        </div>
                    </div>
                    <div className="w-50 d-flex mb-4">
                        <div className="extras-icon">
                            <img src={Training} />
                        </div>
                        <div className="extras-content text-white">
                            <h3>Training</h3>
                            <p>Learn the match commands.</p>
                        </div>
                    </div>
                    <div className="w-50 d-flex mb-4">
                        <div className="extras-icon">
                            <img src={Support} />
                        </div>
                        <div className="extras-content text-white">
                            <h3>Support</h3>
                            <p>View your Balance Sheet,link your KONAMI ID, etc.</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Extras;