import { TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Switch from '@mui/material/Switch';
import LisItem from './ListItem';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function UseCallbackExample(props) {
    const [dark, setDark] = useState(false)
    const [number, SetNumber] = useState(0)

    const theme = {
        backgroundColor : dark ?  "#000" :  "#fff",
        color: dark ? "#fff" : "#000", 
        height:'100vh'
    }

    const getItem =  useCallback((i) => {
         console.log(number);
         return [i+ number, i+number+1, i+number+2]
    },[number])
    


    return (
        <div  style={theme}>
            <Switch {...label} onClick={() => setDark(!dark)}>Change Theam</Switch>
            <TextField type="text" placeholder="Plesae enter number" onChange={(e) => SetNumber(parseInt(e.target.value))}/>

            <LisItem getItem={getItem}/>

        </div>
    );
}

export default UseCallbackExample;