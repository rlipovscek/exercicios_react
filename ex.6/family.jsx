import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
    <div>
        <h1>Família</h1>
        {/* Copia um elemento filho, e lança as propiedades informados no elemento para o filho */}
        {/* { React.cloneElement(props.children, { ...props }) } */}

        {/* Copia as propriedades do elemento para uma lista de filhos */}
        {childrenWithProps({ ...props })}
    </div>
)