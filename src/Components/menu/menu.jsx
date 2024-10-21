import React from "react";
import './menu.css'
import football_field_icon from '../../Assets/images/football-field.png'
import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate();

    return(
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 text-white">
                    <div class="w-100 d-flex justify-content-around">
                        <div class="text-center">
                            <div class="bg-parimary footer-box match">
                                <i class="fa-regular fa-futbol"></i>
                            </div>
                            <span class="">Match</span>
                        </div>
                        <div class="text-center">
                            <div onClick={()=>navigate('game-plan')} class="bg-warning footer-box squad">
                                <img src={football_field_icon} style={{width: '50%', height: '50%', objectFit: 'cover',}} alt=""/>
                            </div>
                            <span>Game Plan</span>
                        </div>
                        <div class="text-center">
                            <div class="footer-box team">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <span>My Team</span>
                        </div>
                        <div class="text-center">
                            <div class="footer-box contract">
                                <i class="fa-solid fa-user-plus"></i>
                            </div>
                            <span>Contract</span>
                        </div>
                        <div class="text-center">
                            <div class="footer-box daily-game">
                                <i class="fa-solid fa-flag"></i>
                            </div>
                            <span>Daily Game</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;