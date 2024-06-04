import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import './MainScreen.css'
import MenuButtons from './MenuButtons';

const MainScreen = () => {
    const [selectedButton, setSelectedButton] = useState('NONE');

    useEffect(() => {console.log(selectedButton)}, [selectedButton] )

    return(
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#73a7de', height: '90vh', marginTop: '25px' }} >
                    {selectedButton === 'NONE'
                    ?
                    <MenuButtons setSelectedButton={setSelectedButton}/>
                    :
                    <div>
                        <List sx={{ width: '100%', maxWidth: 360 }}>
                            <ListItem>
                                <ListItemText primary="Марина" secondary="20 часов не оплачено" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Яна" secondary="11 часов не оплачено" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Анна" secondary="vse ok" />
                            </ListItem>
                        </List>
                        <Button 
                            variant="contained" 
                            color='primary' 
                            className='button'
                            sx={{margin: '20px', marginTop: '40px'}}
                        >Dobaviti</Button>
                        <Button 
                            variant="contained" 
                            color='error' 
                            className='button'
                            sx={{margin: '20px', marginTop: '40px'}}
                            onClick={() => setSelectedButton('NONE')}
                        >Nazad</Button>
                    </div>
                }
                    
                </Box>
            </Container>
        </div>
    )

}

export default MainScreen;