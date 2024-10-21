import React from "react";
import Game_Plan from "../../Assets/images/game-plan.jpg"
import "./GamePlan.css"
import { useNavigate } from "react-router-dom";

function GamePlan() {
    const navigate = useNavigate();
    return(
        <div className="w-100 plan-div">
            <img src={Game_Plan} />
            <button onClick={()=>navigate('/')} className="bg-primary text-white">
                <i class="fa-solid fa-less-than"></i>
                Back
            </button>
        </div>
    )
}
export default GamePlan;