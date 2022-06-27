import React from 'react';

import './footer.scss';

const footer = () => {
    return(
        <footer>
            {/* <span id='top'>top</span> */}
            <div className='LycoKatIco'/>
            <div className='iconicaFrase'>
                <p>Fortuna y seguridad, en un solo lugar.</p>
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/profile.php?id=100081120383944" title="Facebook">F</a>
                <a href="https://www.instagram.com/lycokat/" title="Instagram">I</a>
                <a href="mailto:lycokat.co@gmail.com" tooltip="LycoKat.Co@Gmail.Com">M</a>
                <a href="https://www.linkedin.com/in/LycoKat" title="LinkedIn">L</a>
                <a href="https://twitter.com/lycokat" title="Twitter">T</a>
            </div>
            <small>Copyright © 2022 LycoKat, Co.</small>
        </footer>
    )
}
export default footer;