import React from 'react';
import Logo from './Logo.js';
import { FaRegEnvelope } from "react-icons/fa";
import { IoPhonePortraitOutline , IoEarthOutline , IoLocationOutline } from "react-icons/io5";



function ScrollAnimation_progress() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    document.getElementById("progress_bar").style.width = scrolled + "%";
}
window.addEventListener("scroll", ScrollAnimation_progress);
class Head extends React.Component {
    render(){
        return(
            <header className="header-section">
                <div id='progress_bar'></div>
                <div className='header-right'>
                    <Logo />
                    <div className='header-title'>
                        <h3>محمدحسین صابر</h3>
                        <p>برنامه نویس فرانت اند ( React )</p>
                    </div>
                </div>
                <div className='header-left'>
                    <ul className='contact'>
                        <li>
                        <a href="mailto:mhmdhosein.saber@gmail.com">mhmdhosein.saber@gmail.com</a>
                            <FaRegEnvelope />  
                        </li>
                        <li>
                        <a href="tel:+989032098458">09032098458</a>
                            <IoPhonePortraitOutline /> 
                        </li>
                        <li>
                            <span>Iran / Tehran</span>
                            <IoLocationOutline /> 
                        </li>
                        <li>
                            <a href='http://mh-saber.ir'>www.mh-saber.ir</a>
                            <IoEarthOutline /> 
                        </li>
                    </ul>
                </div>
            </header>
            )
    }
}

export default Head;