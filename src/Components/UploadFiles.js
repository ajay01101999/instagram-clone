import React, { useState } from 'react';
import './UploadFiles.css';
import { Button,TextField } from '@material-ui/core'
//MQDvG7ju5t9omFWg
const UploadFiles = () =>{
    const [caption, setCaption]=useState('');
    const [file, setFile]=useState('');

    const handleCaption=(event)=>{
        console.log(event.target.value);
        setCaption(event.target.value);
    }
    const handleFile = (event) =>{
        const fileRead = new FileReader();
        const path = event.target.files[0];
        fileRead.readAsDataURL(path);
        fileRead.onload=()=>{
            setFile(fileRead.result);
        }
    }
    return (
        <div className='uploadfiles'>
            <progress className='progress' value='80' max='100'></progress>
            <TextField id="standard-basic" onChange={(event)=>handleCaption(event)} className='ip' type='text' label='ENTER CAPTION' />
            <br/>
            <input type='file' onChange={(event)=>handleFile(event)}/>
            <Button variant="contained" color="primary">UPLOAD</Button>
        </div>
    )
}

export default UploadFiles;