import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate,useLocation  } from 'react-router-dom';
import './sec_nav.css'

function Sec_Nav(){
    const [nav,setNav]=useState('home')
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const go = useNavigate()
    return(
        <div class="container mt-3">
            <div class="row">
                <div class="col-12">
                    <div style={{width:'100%',display: 'flex',justifyContent:'center'}}>
                        <nav class="nav-sec-box d-flex text-white justify-content-between">
                            <div onClick={()=>{
                                setNav('home')
                                go('/')
                            }} class={ isActive('/') ? 'nav-2-item-box active':'nav-2-item-box'}>
                                <span >Home</span>
                            </div>
                            <div onClick={()=>{
                                setNav('missions')
                                go('/missions')
                            }} class={ isActive('/missions') ? 'nav-2-item-box active':'nav-2-item-box'}>
                                <span>Missions</span>
                            </div>
                            <div onClick={()=>{
                                setNav('shop')
                                go('/shop')
                            }} class={ isActive('/shop') ? 'nav-2-item-box active':'nav-2-item-box'}>
                                <span>Shop</span>
                            </div>
                            <div onClick={()=>{
                                setNav('extras')
                                go('/extras')
                            }} class={ isActive('/extras') ? 'nav-2-item-box active':'nav-2-item-box'}>
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