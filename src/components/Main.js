import React from 'react';
import ProgressLine from './ProgressLine.js';
import SocialNetworks from './SocialNetworks.js';
import WorkExperience from './WorkExperience.js';
import Biography from './Biography.js';
import Education from './Education.js';

class Main extends React.Component {
    render(){
        return(
            <main className="main-section">
                <div className='flex prow'>
                    <div className='main-right'>
                        <span className='title'>معرفی</span>
                    </div>
                    <div className='main-left'>
                        <span className='description'>
                            <Biography />
                        </span>
                    </div>
                </div>

                <div className='flex prow'>
                    <div className='main-right  we-box'>
                        <span className='title  we-title'>مهارت ها</span>
                    </div>
                    <div className='main-left'>
                        <span className='description progress-box'>
                        <span className='description-tit'>
                            مهارت‌های تخصصی
                        </span>
                            <ProgressLine value='95' text='Html, Css' />
                            <ProgressLine value='60' text='JavaScript' />
                            <ProgressLine value='40' text='React Js'/>
                            <ProgressLine value='35' text='Vue Js'/>
                            <ProgressLine value='80' text='Jquery'/>
                            <ProgressLine value='50' text='php'/>
                            <ProgressLine value='90' text='Joomla'/>
                            <ProgressLine value='70' text='photoshop'/>
                            <ProgressLine value='45' text='illustrator'/>
                        <span className='description-tit'>
                            مهارت‌های فردی
                        </span>
                            <ProgressLine value='95' text='کار تیمی'/>
                            <ProgressLine value='80' text='مدیریت پروژه'/>
                            <ProgressLine value='90' text='خلاقیت'/>
                            <ProgressLine value='95' text='نظم'/>
                        </span>
                    </div>
                </div>
                <div className='flex prow'>
                    <div className='main-right we-box'>
                        <span className='title we-title'>سابقه کاری</span>
                    </div>
                    <div className='main-left'>
                        <span className='description'>
                            <WorkExperience />
                        </span>
                    </div>
                </div>
                <div className='flex prow'>
                    <div className='main-right'>
                        <span className='title'>تحصیلات و دوره ها</span>
                    </div>
                    <div className='main-left'>
                        <span className='description'>
                            <Education />
                        </span>
                    </div>
                </div>
                <div className='flex prow'>
                    <div className='main-right'>
                        <span className='title'>شبکه‌های اجتماعی</span>
                    </div>
                    <div className='main-left'>
                        <span className='description'>
                            <SocialNetworks />
                        </span>
                    </div>
                </div>
            </main>
            )
    }
}

export default Main;