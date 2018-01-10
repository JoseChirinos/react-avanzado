import React from 'react';
import ReactDOM, { render } from 'react-dom';
import PlayList from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');
//const holaMundo = <h1>Hola Mundo!</h1>;
// ReactDOM.render(holaMundo,app);
//console.log('hola mundo!');

render(<PlayList data={ data } />,app);