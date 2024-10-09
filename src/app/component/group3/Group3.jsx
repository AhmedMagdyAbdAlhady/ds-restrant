import React from 'react';
import { bordStyle, h435px, headerImage2,  Menu} from './Group3.module.css'
const Group3 = () => {
    return (
        <div className={`${headerImage2}`}>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center py-5 wow animate__animated   `}>
                <p className={`w35 text-white py-5 px-2  wow animate__animated animate__jackInTheBox `}>
                    This is Photoshop`&apos;`s version  of Lorem
                </p>
            </div>
            <div className='container'>
                <div className={`${bordStyle} ${h435px}`}></div>
            </div>
            <div id="Menu" className={`Dsopacity1 text-center d-flex  justify-content-center py-5 wow animate__animated animate__zoomInUp `}>
                <h2  className={`  wow animate__animated animate__bounce animate__slower animate__infinite   ${Menu}`} >
                MENU
                </h2>
            </div>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center wow animate__animated   `}>
                <p className={`w35 text-white px-2  wow animate__animated animate__jackInTheBox `}>
                This is Photoshop`&apos;`s version  of 
                </p>
            </div>
        </div>
    );
}

export default Group3;
