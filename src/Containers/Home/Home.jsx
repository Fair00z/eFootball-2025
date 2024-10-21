import React from "react";
import TopHeader from "../../Components/top_header/top_header";
import Sec_Nav from "../../Components/sec_nav/sec_nav";
import Scroll_Banner from "../../Components/scroll_banner/scroll_banner";
import Menu from "../../Components/menu/menu";

function Home(){
    return(
        <div>
            <TopHeader/>
            <Sec_Nav/>
            <Scroll_Banner/>
            <Menu/>
        </div>
    )
}
export default Home;