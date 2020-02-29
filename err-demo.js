const express = "express";
const router = express.router();
const path = require('path');
const fs = require('fs');

router.use('/err-demo', (req, res, next) => {
    throw new Error('This is err handiling')
});
module.exports = router;