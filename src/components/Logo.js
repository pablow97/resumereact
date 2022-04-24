import React from 'react';
import logo from '../pablogo-nc.png';


class Logo extends React.Component {
    render(){
        return(
                <div className='logobox'>
                    <img src={logo} alt="logo" width={170} height={170} />
                </div>
            )
    }
}

export default Logo;