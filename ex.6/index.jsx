import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';

const elemento = document.getElementById('app');

ReactDom.render(
    <Family lastname="Silva">
        <Member name="Guilherme"/>
        <Member name="Paulo"/>
    </Family>,
    elemento);