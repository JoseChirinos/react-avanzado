import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Media from './src/playlist/components/media';
import data from './src/api.json';

const app = document.getElementById('app');
//const holaMundo = <h1>Hola Mundo!</h1>;
// ReactDOM.render(holaMundo,app);
//console.log('hola mundo!');

render(<Media type="video" title="¿Qué es Responsive Design?" author="JoseChirinos" image="./images/covers/responsive.jpg"/>,app);