import Title from "components/Sidebar/Title/Title";
import Navbar from "components/Sidebar/NavBar/Navbar";
import SocialMedia from "components/Sidebar/SocialMedia/SocialMedia";
import './Sidebar.scss';

const Sidebar = ()=>{
    return (
        <div className="sideBar">
            <Title />
            <Navbar />
            <SocialMedia />
        </div>
    )
}
export default Sidebar;
