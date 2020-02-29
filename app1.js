// const express = require('express');
// const app = express();
// const bodyParse = require('body-parser');
// const fs = require('fs');
// const path =require('path')

// app.use(bodyParse.urlencoded({ extended: true }))

// app.use('/add-product', (req, res, next) => {
//     fs.createReadStream(path.join(__dirname ,'view','add-product.html')).pipe(res);
   
// })

// app.post('/save-product', (req, res, next) => {
//     console.log('save product....')
//     console.log(req.body);
//      res.send("save seccessfuliy")
// })

// app.get('/', (req, res, next) => {
//     res.send("seve ")
// })

// app.listen(3000, () => {
//     console.log('it is runnig in 3000')
// })
// // app.use((err,req, res, next) => {
// //    res.status(500). res.send("This is err")
// // })