import React from 'react';
import { headerImage2 } from './Group5.module.css';

const Group5 = () => {
    return (
        <div className={`${headerImage2}  pt-5` }>
            <h1 className={`text-center mt-5 padding-100  pb-2  wow animate__animated animate__rubberBand  `} >
            <strong>
            2 x <span className=' wow animate__animated  animate__flash animate__slower animate__infinite '>1</span>
            <br/>
            DISCOUNT
            </strong>
            </h1>
            <div className={` text-center padding-100 pt-1 d-flex  justify-content-center  wow animate__animated   `}>
                <p className={`w35 text-white  px-2  wow animate__animated animate__pulse animate__slower animate__infinite `}>
                This is Photoshop`&apos;`s version  of Lorem Ipsum. 
                </p>
            </div>
        </div>
    );
}

export default Group5;