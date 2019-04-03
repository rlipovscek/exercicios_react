import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';

const elemento = document.getElementById('app');

ReactDom.render(
    <ClassComponent label="Contadoer" initialValue={10} />,
    elemento);