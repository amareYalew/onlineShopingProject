const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const fs = require('fs');
const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParse.urlencoded({ extended: true }));
// It is to link the css fi
//app.use(express.static(path.join(__dirname, 'public')))


//This is good for urlsecurity;

app.use('/abc', express.static(path.join(__dirname, 'public')))






app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).send('page Not Found');
})

app.use((err, req, res, next) => {
    res.status(500).send('semthing Brokk')
})
app.listen(3000, () => {
    console.log('it is runnig in 3000')
})