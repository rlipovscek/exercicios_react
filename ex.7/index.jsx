import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';

const elemento = document.getElementById('app');

ReactDom.render(
    <ClassComponent value="Componente em classe" />,
    elemento);