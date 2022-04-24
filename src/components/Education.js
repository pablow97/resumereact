import React from 'react';

class Education extends React.Component {
    render(){
        return(
        <div className='main-edu'>
            <div className='custom-row flex'>
                <div className='custom-desc'>
                    فارغ التحصیل مقطع کارشناسی رشته مهندسی برق از دانشگاه دولتی دامغان
                        (1398 - 1394)    
                </div>
            </div> 
            <div className='custom-row flex'>
                <div className='custom-desc'>
                    مدرک برنامه نویسی زبان C در مجتمع فنی تهران
                        (1397)    
                </div>
            </div> 
            <div className='custom-row flex'>
                <div className='custom-desc'>
                    مدرک +Netwok  در مجتمع فنی تهران
                        (1396)    
                </div>
            </div> 
        </div>
            )
    }
}

export default Education;