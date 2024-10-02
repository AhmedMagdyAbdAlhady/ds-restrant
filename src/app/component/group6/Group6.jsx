import React from 'react';
import { bordStyle, h435px, headerImage2 } from './Group6.module.css'
const Group6 = () => {
    return (
        <div className={`${headerImage2}`}>
            
            <div className={`Dsopacity1 text-center d-flex  justify-content-center pt-5 wow animate__animated   `}>
                <p className={`w35 text-white py-5 px-2  wow animate__animated animate__jackInTheBox `}>
                    This is Photoshop`&apos;`s version  of Lorem
                </p>
            </div>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center pb-5 wow animate__animated animate__zoomInUp `}>
                <h2 className={`pb-5  wow animate__animated animate__bounce animate__slower animate__infinite`} >
                Special OFFER
                </h2>
            </div>
            <div className='container'>
                <div className={`${bordStyle} ${h435px}`}></div>
            </div>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center pt-5 pb-3 wow animate__animated animate__zoomInUp `}>
                <h3 className={`  wow animate__animated animate__bounce animate__slower animate__infinite`} >
                Burgers
                </h3>
            </div>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center pb-5 wow animate__animated animate__zoomInUp `}>
                <h1 className={`  wow animate__animated animate__bounce animate__slower animate__infinite`} >
                25% Off
                </h1>
            </div>
        </div>
    );
}

export default Group6;
