'use client'
import React, { useEffect } from 'react';
import bootstrapScript from '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
const bootstrap = () => {

    return (
        useEffect(() => {
            { bootstrapScript }
        }, [])
    );
}

export default bootstrap;