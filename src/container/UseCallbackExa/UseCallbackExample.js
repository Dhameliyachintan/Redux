import { TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Switch from '@mui/material/Switch';
import LisItem from './ListItem';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function UseCallbackExample(props) {
    const [dark, setDark] = useState(false)
    const [number, SetNumber] = useState(0)
    const [value, setValue] = useState(false)


    const theme = {
        backgroundColor: dark ? "#80808070" : "#fff",
        color: dark ? "#fff" : "#000",
        // height: '100vh',
    }

    const getItem = useCallback((i) => {
        console.log(number);
        return [i + number, i + number + 1, i + number + 2]
    }, [number])




    return (
        <div style={theme}>
            <Switch {...label} onClick={() => setDark(!dark)} checked={value} name="Switch" onChange={(e) => setValue(e.target.checked)}    >Change Theam</Switch>
            <p>{String(value)}</p>
            <TextField type="text" placeholder="Plesae enter number" onChange={(e) => SetNumber(parseInt(e.target.value))}/>

            <LisItem getItem={getItem} />
        </div>
    );
}

export default UseCallbackExample;