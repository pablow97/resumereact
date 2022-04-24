import React from 'react';
import pic1 from '../images/developer.svg';
import pic2 from '../images/design.svg';
import pic3 from '../images/helpdesk.svg';
import pic4 from '../images/webdesign.svg';

function ScrollAnimation_list() {
    var Target = document.querySelectorAll(".custom-list li");
    for (var i = 0; i < Target.length; i++) {
      var windowHeight = window.innerHeight;
      var TargetTop = Target[i].getBoundingClientRect().top;
      var TargetVisible = 10;
      if (TargetTop < windowHeight - TargetVisible) {
        Target[i].classList.add("active");
      }
    }
  }
window.addEventListener("scroll", ScrollAnimation_list);

class Mainlist extends React.Component {
    render(){
        return(
        <div className='main-list'>
            <div className='custom-box flex'>
                <div className='custom-imgbox'>
                    <span>1399 - الان</span>
                    <span className='custom-title'>برنامه نویس</span>
                    <img src={pic1} width="150" height="150" />
                </div>
                <div className='custom-textbox'>
                به عنوان اولین تجربه رسمی، فعالیت خودم را با عنوان 
                Junior Front-end Developer
                در شرکت   
                <a href='https://peydagar.com'> پیداگر </a>
                شروع کردم.
                تیم پیداگر به من کمک کردند تا من بتونم جایگاه خودم رو در برنامه نویسی پیدا کنم و تجربه های زیاد و خوشبختانه موفقیت آمیزی کسب کنم.
                </div>
            </div>

            <div className='custom-box flex'>
                <div className='custom-imgbox'>
                    <span>1399 - الان</span>
                    <span className='custom-title'>طراح UI / UX </span>
                    <img src={pic2} width="150" height="150" />
                </div>
                <div className='custom-textbox'>
                در پروژه هایی که مشغول به کار شدم همیشه صفر تا صد طراحی قالب و رابط کاربری رو خودم انجام دادم و 
                کار خودم رو با سایت 
                <a href='https://mraghrabeh.com'> گالری ساعت عقربه </a>
                شروع کردم.
                همچنین سعی کردم از جدیدترین متدها برای طراحی رابط کاربری و تجربه کاربری استفاده کنم تا حس بهتری رو به مخاطب منتقل کنم.  

                </div>
            </div>

            <div className='custom-box flex'>
                <div className='custom-imgbox'>
                    <span>1399 - 1400</span>
                    <span className='custom-title'>ادمین سایت</span>
                    <img src={pic3} width="150" height="150" />
                </div>
                <div className='custom-textbox'>
                فعالیت رسمی من از پشتیبانی سایت شروع شد و  
                کارهایی مثل مدیریت سایت از طریق سیستم مدیرت محتوای جوملا، طراحی بنر، درج محصول و پاسخ گویی به مشتریان در شبکه های اجتماعی از جمله وظایف من بود 
                که تونستم از این موقعیت برای به دست آوردن یک سری مهارت ها مثل کار تیمی استفاده کنم.
                </div>
            </div> 
            
            <div className='custom-box flex'>
                <div className='custom-imgbox'>
                    <span>1399 - الان</span>
                    <span className='custom-title'>طراح سایت</span>
                    <img src={pic4} width="150" height="150" />
                </div>
                <div className='custom-textbox'>
                طراحی سایت رو با سیستم مدیریت محتوای جوملا شروع کردم، در ماژول نویسی و کامپوننت نویسی تجربیات زیادی کسب کردم 
                و تونستم تعدادی وب سایت شرکتی و فروشگاهی رو طراحی و توسعه بدم. 
                در حال حاضر تمام تمرکزم روی طراحی وب سایت با React Js  
                (مثل همین وب سایت)
                هست. 
                < br/>
                وب سایت هایی که تونستم تا امروز طراحی کنم و تجربه های زیادی رو ازشون کسب کنم :
                <br/>
                <ul className='custom-list'>
                    <li>وب سایت شرکت
                        <a href='https://peydagar.com' target='_blank'> پیداگر </a>
                    </li>
                    <li>فروشگاه
                        <a href='https://mraghrabeh.com' target='_blank'> گالری ساعت عقربه </a>
                    </li>
                    <li>فروشگاه صنایع دستی
                        <a href='https://jamehonar.ir' target='_blank'> جام هنر </a>
                    </li>
                    <li>فروشگاه تلفن همراه
                        <a href='https://arshadmobile.ir' target='_blank'> ارشد موبایل </a>
                    </li>
                    <li>اپل استور
                        <a href='https://www.appleland.ir' target='_blank'> اپل لند </a>
                    </li>
                    <li>وب سایت رستوران
                        <a href='https://gardenpersian.com' target='_blank'> باغ ایرانی </a>
                    </li>
                    <li>وب سایت
                        <a href='http://peydagar-mag.com' target='_blank'> مجله پیداگر </a>
                    </li>
                    <li>وب سایت فروشگاه (دمو)
                        <a href='https://modstyle.peydagar.ir' target='_blank'> مداستایل </a>
                    </li>
                    <li>وب سایت فروشگاه (دمو)
                        <a href='https://www.perfume.jamehonar.ir' target='_blank'> بیوتی </a>
                    </li>
                    <li>وب سایت فروشگاه (دمو)
                        <a href='https://www.carpet.peydagar.ir' target='_blank'> فرش کارپت </a>
                    </li>
                </ul>
                </div>
            </div> 
        </div>
            )
    }
}

export default Mainlist;