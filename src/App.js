import Menu from "./Components/menu/menu";
import Scroll_Banner from "./Components/scroll_banner/scroll_banner";
import Sec_Nav from "./Components/sec_nav/sec_nav";
import TopHeader from "./Components/top_header/top_header";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Missions from "./Containers/Missions/Missions";
import Shop from "./Containers/Shop/Shop";
import Extras from "./Containers/Extras/Extras";
import GamePlan from "./Containers/GamePlan/GamePlan";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="missions" element={<Missions/>} />
          <Route  path="shop" element={<Shop/>} />
          <Route  path="extras" element={<Extras/>} />
          <Route  path="game-plan" element={<GamePlan/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
