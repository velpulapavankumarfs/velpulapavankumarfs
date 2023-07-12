import Sidebar from "./components/Sidebar/Sidebar";
import Content from './components/Content/Content';
import "./app.scss";

function App() {
  function getMouseMove(e){
      const cursorEffect = document.querySelector(".cursor-effect");
      cursorEffect.style.left = e.clientX + "px";
      cursorEffect.style.top = e.clientY + "px";
  }

  return (
    <div className="app" onMouseMove={(e)=>getMouseMove(e)}>
        <Sidebar />
        <Content />
      <div className="cursor-effect"></div>

    </div>
  );
}

export default App;
