import Menu from "./Components/menu/menu";
import Scroll_Banner from "./Components/scroll_banner/scroll_banner";
import Sec_Nav from "./Components/sec_nav/sec_nav";
import TopHeader from "./Components/top_header/top_header";

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Sec_Nav/>
      <Scroll_Banner/>
      <Menu/>
    </div>
  );
}

export default App;
