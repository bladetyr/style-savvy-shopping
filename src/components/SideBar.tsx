import customerImage from '../assets/customer.png';
import './css/SideBar.css';

function SideBar(){
    return(
        <div style={{display: 'flex', justifyContent: 'right', width: '25%'}}>
            <div className="SideBar">
                <img src={customerImage} alt="Screenshot of a Stylke Savvy customer. She has her eyes closed and appears joyful."></img>
                <div className="SpeechBubble">Omg I love it !!!<br/>You're the best, thanks!<br/><div><br/>— Definitely Real Customer</div></div>
            </div>
        </div>
    );
}

export default SideBar;