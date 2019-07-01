import React from 'react';
import * as ReactDOM from 'react-dom';

const Hi = () => {
	return <h1>Hi.</h1>;
};

const app = document.getElementById('app');
ReactDOM.render(<Hi />, app);
