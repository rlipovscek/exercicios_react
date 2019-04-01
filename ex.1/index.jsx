import React from 'react';
import ReactDom from 'react-dom';

const elemento = document.getElementById('app');
const conteudo = <h1>Olá React!</h1>;

ReactDom.render(conteudo, elemento);