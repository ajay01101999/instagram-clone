import React from 'react';
import './ContentArea.css';
import Posts from './Posts';

const ContentArea = ( ) =>{
    return (
        <div className='content'>
            <Posts />
            <Posts />
            <Posts />
        </div>
    )
}

export default ContentArea;