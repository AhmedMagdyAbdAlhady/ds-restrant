'use client'
import React, { useEffect } from 'react';
import WOW from '../../../../node_modules/wowjs/dist/wow.min.js'

const bootstrap = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return (
        <></>
    );
}

export default bootstrap;