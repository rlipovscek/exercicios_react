import React from 'react';
import ReactDom from 'react-dom';
import { Primeiro, Segundo } from './component';

const elemento = document.getElementById('app');

ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>,
    elemento);