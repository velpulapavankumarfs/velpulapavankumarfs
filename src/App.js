import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { getMouseMove } from "utils/mouseMove";
import "./app.scss";

function App() {
  return (
    <div className="app" onMouseMove={e => getMouseMove(e)}>
      <Sidebar />
      <Content />
      <div className="cursor-effect"></div>
    </div>
  );
}

export default App;
