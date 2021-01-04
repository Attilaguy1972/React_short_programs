import React from 'react';
import ReactDOM from 'react-dom';

function shoot(){
alert('Great shoot!');
}

const myelement=(
<button onClick={shoot}>Take a shoot</button>);
ReactDOM.render(myelement,document.getElementById('root'));
