import React from 'react';
import $ from 'jquery'
  
import './buttonUp.scss';

const ScrollButton = () =>{
  
  $(document).ready(function(){

    $('#upButton').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 0);
    });
  
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#upButton').slideDown(300);
      } else {
        $('#upButton').slideUp(300);
      }
    });
  
  });

  return (
    <div id='upButton' className='material-icons-outlined'>
      arrow_upward
    </div>
  );
}

export default ScrollButton;