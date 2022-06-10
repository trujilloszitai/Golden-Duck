import React, { useEffect } from 'react'
import './header.scss'
import logo from '../../assets/img/logo.svg'
import Bubble from './bubble_floating/Bubble'
import $ from 'jquery'

const Header = () => {

  // Efectos del parallax
  useEffect(() => {
    $('.header').mousemove(function (e) {
      var cvalueX = (e.pageX * -1) / 50;
      var cvalueY = (e.pageY * -1) / 50;
      $('.shapy').each((e) => {
        switch (e) {
          case 0:
            $('#shapes-mask svg:nth-child(2)').css('transform', 'matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 1:
            $('#shapes-mask svg:nth-child(3)').css('transform', 'translate3d(' + cvalueX + 'px, ' + cvalueY + 'px, 0px)');
            break;
          case 2:
            $('#shapes-mask svg:nth-child(4)').css('transform', 'rotate(-45deg) matrix3d(0.70711, 0.70711, 0, 0, -0.70711, 0.70711, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 3:
            $('#shapes-mask svg:nth-child(5)').css('transform', 'translate3d(' + cvalueX + 'px, ' + cvalueY + 'px, 0px)');
            break;
          case 4:
            $('#shapes-mask svg:nth-child(6)').css('transform', 'rotate(45deg) matrix3d(0.70711, 0.70711, 0, 0, -0.70711, 0.70711, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 5:
            $('#shapes-mask svg:nth-child(7)').css('transform', 'rotate(45deg) matrix3d(0.70711, 0.70711, 0, 0, -0.70711, 0.70711, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 6:
            $('#shapes-mask svg:nth-child(8)').css('transform', 'translate3d(' + cvalueX + 'px, ' + cvalueY + 'px, 0px)');
            break;
          case 7:
            $('#shapes-mask svg:nth-child(9)').css('transform', 'translate3d(' + cvalueX + 'px, ' + cvalueY + 'px, 0px)');
            break;
          case 8:
            $('#shapes-mask svg:nth-child(10)').css('transform', 'rotate(65deg) matrix3d(0.42262, 0.90631, 0, 0, -0.90631, 0.42262, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 9:
            $('#shapes-mask svg:nth-child(11)').css('transform', 'rotate(85deg) matrix3d(0.08716, 0.9962, 0, 0, -0.9962, 0.08716, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          case 10:
            $('#shapes-mask svg:nth-child(12)').css('transform', 'matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, ' + cvalueX + ', ' + cvalueY + ', 0, 1)');
            break;
          default:
            break;
        }
      })
    });
  });

  return (
    <div className="header d-flex  w-100 h-100">
      <div id="shapes-mask" class="is-loaded">
        <div id="shapes-preload">
          {/* triangle */}
          <svg xmlns="http://www.w3.org/2000/svg" width="37.196" height="32.213" viewBox="0 0 37.196 32.213">
            <symbol id="triangle">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
                <path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"></path>
              </svg>
            </symbol>
          </svg>
          {/* semi circle */}
          <svg xmlns="http://www.w3.org/2000/svg" width="29.093" height="14.546" viewBox="0 0 29.093 14.546">
            <symbol id="semiCircle"><path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"></path></symbol>
          </svg>
          {/* spring */}
          <svg xmlns="http://www.w3.org/2000/svg" width="17.046" height="36.016" viewBox="0 0 17.046 36.016">
            <symbol id="spring"><path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255"></path></symbol>
          </svg>
          {/* line */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
            <symbol id="line"><path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M4.92 2.514L21.964 19.56"></path></symbol>
          </svg>
        </div>
        <svg width="25px" height="25px" data-value="-2" className="layer1 p1 shapy"><use xlinkHref="#triangle" className="yellow"></use></svg>
        <svg width="28px" height="28px" data-value="6" className="layer1 p2 shapy"><use xlinkHref="#semiCircle" className="yellow"></use></svg>
        <svg width="25px" height="25px" data-value="4" className="layer2 p3 shapy"><use width="25px" height="25px" xlinkHref="#triangle" className="aqua"></use></svg>
        <svg data-value="-6" className="layer1 p4 shapy"><use xlinkHref="#triangle" className="pink"></use></svg>
        <svg width="28px" height="28px" data-value="8" className="layer1 p5 shapy"><use xlinkHref="#semiCircle" className="aqua"></use></svg>
        <svg width="36px" height="36px" data-value="-4" className="layer2 p6 shapy"><use xlinkHref="#spring" className="pink"></use></svg>
        <svg width="36px" height="36px" data-value="5" className="layer2 p7 shapy"><use xlinkHref="#spring" className="pink"></use></svg>
        <svg width="22px" height="22px" data-value="-9" className="layer2 p8 shapy"><use xlinkHref="#line" className="aqua"></use></svg>
        <svg width="22px" height="22px" data-value="-5" className="layer1 p9 shapy"><use xlinkHref="#line" className="aqua"></use></svg>
        <svg width="22px" height="22px" data-value="2" className="layer2 p10 shapy"><use xlinkHref="#line" className="yellow"></use></svg>
        <svg width="28px" height="28px" data-value="3" className="layer1 p11 shapy"><use xlinkHref="#semiCircle" className="aqua"></use></svg>
      </div>
      <div className="brand w-100">
        <div className="main-text flex-column">
          <div className="content">
            <h1 className="etp-name">Lycokat</h1>
            <h2 className="etp-slogan">Fortuna y seguridad, en un solo lugar.</h2>
          </div>
        </div>
      </div>
      <div className="logo-mask">
        <img src={logo} alt='Background image' />
      </div>
      <Bubble />
    </div>
  )
}

export default Header