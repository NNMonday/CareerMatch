const express = require('express');
const path = require('path');

const configViewEngine = (app) => {
    app.get('/demo-socket', (req, res) => {
        res.sendFile(path.join(__dirname,'../', 'index.html'));
      });
    //img/css/js
    app.use(express.static(path.join(__dirname, 'public')));
}

module.exports = configViewEngine;