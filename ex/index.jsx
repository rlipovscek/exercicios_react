import React from 'react';
import ReactDom from 'react-dom';
import Field from './field'

const elemento = document.getElementById('app');

ReactDom.render(
    <Field initialValue="Teste"/>,
    elemento);