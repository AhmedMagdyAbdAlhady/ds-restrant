import React from 'react';
import { headerImage2,subTitel,subheader } from './group2.module.css';
const Group2 = () => {
    return (
        <div className={`${headerImage2}`}>
            <h1 className={`text-center my-5 header wow animate__animated animate__rubberBand   ${subheader}`} >
                Special<span className='font-bold wow animate__animated  animate__flash animate__slower animate__infinite '>CHEF</span>
            </h1>
            <div className={` text-center d-flex  justify-content-center pt-5 wow animate__animated   `}>
                <p className={`w35 text-white pt-5 px-2  wow animate__animated animate__jackInTheBox `}>
                    This is Photoshop`&apos;`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                </p>
            </div>
            <h2 className={`text-center ${subTitel} my-1 header wow animate__animated animate__bounce animate__slower animate__infinite `} >
                Delights
            </h2>
        </div>
    );
}

export default Group2;