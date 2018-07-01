import React, { Component } from 'react';
import '../css/titleSection.css';
import profileImage from '../images/me.png';
import fish from '../images/fish.png';
import '../css/Hover-master/css/hover.css';

class TitleSection extends Component {

  componentDidMount(){
    const fish = document.getElementById("fish");
    let x = 0;
    let y = 100;

    let direction = 'right';
    fish.style.top = '15%';
    let swimDown = false;

    setInterval(swim, 5);


    function swim(){
      let screenWidth = window.innerWidth - 150;
      let screenHeightLimit = window.innerHeight - 200;

      // y = (Math.sin(x)) * 100;

      if(x <= screenWidth && direction === 'right'){
        fish.style.webkittransform = 'scaleX(-1)';
        fish.style.transform = 'scaleX(-1)';
        x++;

        if(swimDown === false){
          console.log('swimming up');
          y--;
          if(y === 0){
            swimDown = true;
          }
        }
        else{
          console.log('swimming up');
          y++;
          if(y === screenHeightLimit){
            swimDown = false;
          }
        }

        fish.style.top = y + 'px';
        fish.style.left = x + 'px';
      }
      else{
        direction = 'left';
      }
      if(x >= 1 && direction === 'left'){
        fish.style.webkittransform = 'scaleX(1)';
        fish.style.transform = 'scaleX(1)';
        x--;
        fish.style.left = x + 'px';
      }
      else{
        direction = 'right';
      }

    }
  }


  render() {
    return (
      <div id='titleSection' className="titleSection d-flex">

          <img src={fish} id='fish'/>

        <div className='centeredDiv justify-content-center align-self-center'>

          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <img src={profileImage} className='profileImage hvr-bob' alt='profileImage'/>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <h1 className='display-4'>Chris Eddy</h1>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <p className='lead'>
                Software Developer.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;