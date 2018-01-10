import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
//const holaMundo = <h1>Hola Mundo!</h1>;
// ReactDOM.render(holaMundo,app);
//console.log('hola mundo!');

render(<Media title="Como comprar bitcoins?" author="GuidoChirinos" image="./images/covers/bitcoin.jpg"/>,app);