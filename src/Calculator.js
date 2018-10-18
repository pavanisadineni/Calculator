import React from 'react';

import './Calculator.css';
import {Button,ButtonGroup} from 'reactstrap';
const buttonStyle={
    'margin':'4px',
    'padding':'12px',
    'height':'50px',
    'width':'50px',
    'borderRadius':'5px',
    
    

}
const inputStyle ={
'padding':'10px',
'margin':'5px',
'size':'20px',
'borderRadius':'5px',
'border':'1px solid black',
'backgroundColor':'orange',


}


const Calculator=(props)=>{
    return(
        <div id='container'>
        <input style={inputStyle} type="text" placeholder='0'></input>
        <ButtonGroup className='group'>
            <Button size='lg' style={buttonStyle} outline color="secondary">CE</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">C</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">ClR</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">/</Button>
        </ButtonGroup>
        <ButtonGroup className='group'>
        <Button size='lg' style={buttonStyle} outline color="secondary">7</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">8</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">9</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">*</Button>
        </ButtonGroup >
        <ButtonGroup className='group'>
        <Button size='lg' style={buttonStyle} outline color="secondary">4</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">5</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">6</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">-</Button>
        </ButtonGroup>
        <ButtonGroup className='group'>
        <Button size='lg' style={buttonStyle} outline color="secondary">1</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">2</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">3</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">+</Button>
        </ButtonGroup>
        <ButtonGroup className='group'>
        <Button size='lg' style={buttonStyle} outline color="secondary">+/-</Button>{' '}
            <Button size='lg' style={buttonStyle} outline color="secondary">0</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">.</Button>
            <Button size='lg' style={buttonStyle} outline color="secondary">=</Button>
        </ButtonGroup>

        </div>
    )
}
export default Calculator;