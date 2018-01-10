// Dependences
import React from 'react';
import ReactDOM, { render } from 'react-dom';
// Modules
import Category from './src/playlist/components/category';
// Data only for test
import data from './src/api.json';

const app = document.getElementById('app');
//const holaMundo = <h1>Hola Mundo!</h1>;
// ReactDOM.render(holaMundo,app);
//console.log('hola mundo!');
render(<Category data={data} />,app);