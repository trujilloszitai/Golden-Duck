import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import zxcvbn from 'zxcvbn';

const PasswordStrenghtMeter = props =>{
    const testResult = zxcvbn(props.password);
    const num = testResult.score * 100/4;

    const funcProgressColor= () => {
        switch (testResult.score) {
            case 0:
                return '#828282'
            case 1:
                return '#9B1158'
            case 2:
                return '#EA1111'
            case 3:
                return '#FFAD00'
            case 4:
                return '#00B500'
            default:
                return 'none'
        }
    }

    const changePasswordColor= () => ({
        width: num + '%',
        background: funcProgressColor(),
        height: '.5rem',
    })

  return (
    <div className='progress'>
        <div className='progress-bar' style={changePasswordColor()}/>
    </div>
  );
}

export default PasswordStrenghtMeter;