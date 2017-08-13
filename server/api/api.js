const express = require('express');
const router = express.Router();
const dbConnection = require('../db/db');

/* GET api listing */
router.get('/', (req, res) => {
    res.send('api works');
});

/* GET all users */
router.get('/users', (req, res) => {
    dbConnection.query('SELECT nickname,id,email FROM users', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

/* Redirect albums of current user */
router.get('/users/:user_id', (req, res) => {
    res.redirect(302, ('/api/users/' + req.params.user_id + '/albums'));
});

/* GET albums of current user */
router.get('/users/:user_id/albums', (req, res) => {
    dbConnection.query(('SELECT id,title,thumbnail FROM albums WHERE user_id="' + req.params.user_id + '"'), (err, rows) => {
        if (err || !rows.length) {
            res.redirect(302, '/api/users');
        }
        else {
            res.send(rows);
        }
    });
});

/* GET photo list from current album */
router.get('/albums/:album_id', (req, res) => {
    dbConnection.query(('SELECT id,title,url,url_thumbnail FROM photos WHERE album_id="' + req.params.album_id + '"'), (err, rows) => {
        if (err || !rows.length) {
            res.redirect(302, '/api/users');
        }
        else {
            res.send(rows);
        }
    });
});

/* GET photo list from current album */
router.get('/photo/:photo_id', (req, res) => {
    dbConnection.query(('SELECT id,title,url,url_thumbnail FROM photos WHERE id="' + req.params.photo_id + '"'), (err, rows) => {
        if (err || !rows.length) {
            res.redirect(302, '/api/users');
        }
        else {
            res.send(rows);
        }
    });
});

module.exports = router;

