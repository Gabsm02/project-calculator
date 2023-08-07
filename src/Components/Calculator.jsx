import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';

export default function Calculator() {
const [num, setNum] = useState(0);
const [oldNum, setOldNum] = useState();
const [operator, setOperator] = useState();
const [expression, setExpression] = useState('');

function formatNumberWithComma(number) {
    return number.toLocaleString('en-US');
}

function handleChangeNum(e) {
    const input = e.target.value;

    if (num === 0) {
    setNum(input);
    } else {
    setNum(num + input);
    }
    setExpression((prevExpression) => prevExpression + input);
}

function clearAll() {
    setNum(0);
    setExpression('');
}

function porcentage() {
    setNum(num / 100);
    setExpression((prevExpression) => prevExpression + '/100');
}

function handleSign() {
    if (num > 0) {
    setNum(-num);
    setExpression((prevExpression) => '-' + prevExpression);
    } else {
    setNum(Math.abs(num));
    setExpression((prevExpression) => prevExpression.slice(1));
    }
}

function handleOperator(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
    setExpression((prevExpression) => prevExpression + operatorInput);
}

function backspace() {
    if (num.length === 1) {
    setNum(0);
    } else {
    setNum(num.slice(0, -1));
    }
    setExpression((prevExpression) => prevExpression.slice(0, -1));
}

function calculate() {
    if (operator === '÷') {
    setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === 'x') {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === '-') {
    setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === '+') {
    setNum(parseFloat(oldNum) + parseFloat(num));
    }

    setOperator();
    setOldNum();
}

return (
    <Container maxWidth="xs">
    <div className="wrapper">
        <div className="tela">
        <p className="expression">{expression}</p>
        <p className="result">{formatNumberWithComma(num)}</p>
        </div>
            <button className='functions-calculator' onClick={clearAll}>C</button>
            <button className='functions-calculator' onClick={handleSign}>+/-</button>
            <button className='functions-calculator' onClick={porcentage}>%</button>
            <button className='matematics-operations' onClick={handleOperator} value={"÷"} >÷</button>
            <button className='number' onClick={handleChangeNum} value={7}>7</button>
            <button className='number' onClick={handleChangeNum} value={8}>8</button>
            <button className='number' onClick={handleChangeNum} value={9}>9</button>
            <button className='matematics-operations' onClick={handleOperator} value={"x"}>×</button>
            <button className='number' onClick={handleChangeNum} value={4}>4</button>
            <button className='number' onClick={handleChangeNum} value={5}>5</button>
            <button className='number' onClick={handleChangeNum} value={6}>6</button>
            <button className='matematics-operations' onClick={handleOperator} value={"-"}>-</button>
            <button className='number' onClick={handleChangeNum} value={1}>1</button>
            <button className='number' onClick={handleChangeNum} value={2}>2</button>
            <button className='number' onClick={handleChangeNum} value={3}>3</button>
            <button className='matematics-operations' onClick={handleOperator} value={"+"}>+</button>
            <button className='number' onClick={handleChangeNum} value={"."}>.</button>
            <button className='number' onClick={handleChangeNum} value={0}>0</button>
            <button className='number' onClick={backspace}>⇦</button>
            <button className='matematics-operations' onClick={calculate}>=</button>
        </div>       
        </Container>
        
    )
}