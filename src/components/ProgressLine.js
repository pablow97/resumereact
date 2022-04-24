import React from 'react';
import '../styles/ProgressLine.css';

function ScrollAnimation() {
    var Target = document.querySelectorAll(".progress-box");
    for (var i = 0; i < Target.length; i++) {
      var windowHeight = window.innerHeight;
      var TargetTop = Target[i].getBoundingClientRect().top;
      var TargetVisible = 10;
      var TargetHeight = Target[i].clientHeight;
      TargetHeight = -TargetHeight;
      
      if (TargetTop < windowHeight - TargetVisible) {
        Target[i].classList.add("active");
      }
      else{
        Target[i].classList.remove("active");
      }
      if(TargetTop < TargetHeight){
        Target[i].classList.remove("active");
      }
    }
  }
window.addEventListener("load", ScrollAnimation);
window.addEventListener("scroll", ScrollAnimation);

class ProgressLine extends React.Component {

    render(){
        setTimeout(() => {
            const Progress_bar = [...document.getElementsByClassName('progress-span')];
            Progress_bar.forEach(bar => {
              const percentage = bar.getAttribute('data-progress');
              bar.style.width = percentage + '%';
            });
          }, 10);

        return(
            <div className='animated-progress'>
                <span className='progress-text'>{this.props.text}</span>
                <span className='progress-span' data-progress={this.props.value}></span>
                <div className='progress-outer'></div>
            </div>
        )
    }
}
export default ProgressLine;