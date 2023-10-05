import "./App.css";
import Body from "./components/Body";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
