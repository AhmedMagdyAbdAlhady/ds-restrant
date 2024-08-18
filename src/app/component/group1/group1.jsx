import React from 'react';
import {
    headerImage,
    Dsopacity1,
    Dsopacity2,
    DSFont,
    RestrantFont,
    bordStyle,
    h435px,
    logomedia

} from './group1.module.css';
import NavBar from '../NAvbar/Navbar';
import Image from 'next/image';
import topLeft from '../../../../public/backgroundLogo/top-left.png';
import topRight from '../../../../public/backgroundLogo/top-right.png';
const Group1 = () => {
    return (
        <div className={`${headerImage}`}  >

            <div className={`w-100 d-flex justify-content-between mt-5 ${Dsopacity2 } ${logomedia}  `} >
                <Image
                    className="mx-5 "
                    src={topLeft}
                    alt="Picture of the author"
                    width={90}
                    height={90}
                />
                <Image
                    className="mx-5"
                    src={topRight}
                    alt="Picture of the author"
                    width={90}
                    height={90}
                />
            </div>
                <NavBar  Dsopacity={Dsopacity1} />
                <div className={`${Dsopacity1}  `} id='Home' >
                <h1 className={`text-center ${DSFont} wow animate__animated animate__bounce animate__slower animate__infinite `} >
                    DS
                    <p className={`text-center ${RestrantFont}`}>RESTRANT</p>
                </h1>
            </div>
            <div className='container'>
                <div className={`${bordStyle} ${h435px}`}></div>
            </div>
            <div className={`Dsopacity1 text-center d-flex  justify-content-center py-5 wow animate__animated animate__zoomInUp `}>
                <p className={`w35 text-white py-5 px-2  `}>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
               ipsum, nec sagittis sem nibh id elit. Duis sed </p>
            </div>
        </div>);
}

export default Group1;