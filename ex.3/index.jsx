import React from 'react';
import ReactDom from 'react-dom';
import Component from './component';

const elemento = document.getElementById('app');

ReactDom.render(<Component value="Iniciando o curso de react" />, elemento);