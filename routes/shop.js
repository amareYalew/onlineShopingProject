const express = require('express');

const app = express();


const router = express.Router();


router.get('/err-demo', (req, res, next) => {
    console.log(err)
    throw new Error('This is to Test Error Handling')
});

router.all('/', (req, res, next) => {
    res.send("THIS PAGE")
})

module.exports = router;
