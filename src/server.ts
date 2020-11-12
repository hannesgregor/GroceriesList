import express from 'express';
//const express = require('express');

const app = express();

app.get('/', (req, res ) => {
    res.json({ hello: 'worldddd  '});
});

export const server = () => {
    app.listen(8080);
    console.log(`Server started at http://localhost:${8080}`);
    console.log(`Press Ctrl + C to quit`);
};

