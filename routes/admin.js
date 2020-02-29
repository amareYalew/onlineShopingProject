const express = require('express');

const app = express();
const bodyParse = require('body-parser');
const fs = require('fs');
const path = require('path');

const router = express.Router();
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/view", "add-product.html"))

})
router.get('/add-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view', 'add-product.html')).pipe(res);

})

router.post('/add-product', (req, res, next) => {
    console.log('save product....')
    console.log(req.body);
    res.send("save seccessfuliy")
})

router.get('/edit-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view', 'add-product.html')).pipe(res);

})
router.post('/edit-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view', 'add-product.html')).pipe(res);

})
router.post('/delete-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view', 'add-product.html')).pipe(res);

})


module.exports = router;