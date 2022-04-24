import React from 'react';
import { IoLogoInstagram , IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import '../styles/socialnetwork.css';
import ReactTooltip from 'react-tooltip'

class SocialNetworks extends React.Component {

    render(){
        return(
            <div className='socialicone-box'>
                <a className='socialicone' href='https://instagram.me/i__pablow' data-tip='اینستاگرام'> 
                    <IoLogoInstagram />  
                </a>
                <a className='socialicone' href='https://wa.me/+989032098458' data-tip='واتساپ'> 
                    <IoLogoWhatsapp />  
                </a>          
                <a className='socialicone' href='https://telegram.me/im_pablow' data-tip='تلگرام'> 
                    <FaTelegramPlane />  
                </a>
            <ReactTooltip />     
            </div>
        )
    }
}
export default SocialNetworks;