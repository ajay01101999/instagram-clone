import React from 'react';
import './Posts.css';
import { Avatar } from '@material-ui/core';
import image from '../assets/image.jpg';

const Posts =()=>{
    return (
        <div className='posts'>
            <div className='username'>
                <Avatar alt="A" className='avatar' src="/static/images/avatar/1.jpg" />
                <h3>Ajay SHarma</h3>
            </div>
            <img src={image} alt='image'/>
            <p><strong>AjaySharma </strong>Its a clone</p>
        </div>
    )
}

export default Posts;