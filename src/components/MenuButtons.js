import * as React from 'react';
import Button from '@mui/material/Button';

import './MainScreen.css'

const MenuButtons = ({setSelectedButton}) => {

    return(
        <div className='flex-box'>
            <Button 
                variant="contained" 
                color='primary' 
                className='button'
                sx={{margin: '20px', marginTop: '40px'}}
                onClick={() => setSelectedButton('workers')}
            >Работники</Button>
            <Button 
                variant="contained" 
                color='success' 
                className='button'
                sx={{margin: '20px'}}
            >Работа</Button>
            <Button 
                variant="contained" 
                color='info' 
                className='button'
                sx={{margin: '20px'}}
            >Отчёты</Button>
            <Button 
                variant="contained" 
                color='warning' 
                className='button'
                sx={{margin: '20px'}}
            >Others</Button>
        </div>
    )

}


export default MenuButtons;