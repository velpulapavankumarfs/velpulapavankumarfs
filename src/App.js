import Sidebar from "./components/Sidebar/Sidebar";
import Content from './components/Content/Content';
import "./app.scss";

function App() {
  return (
    <div className="app">
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
