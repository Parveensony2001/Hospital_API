const express = require('express');
const router = express.Router();
console.log('router is strat');
const homecontroller = require('../controller/homecontroler');
const passport = require('passport');
router.use('/user',require('./user'));
router.use('/hospital',require('./hospital'));
router.get(
    '/report/:status',
    passport.authenticate('jwt', { session: false }),homecontroller.status);
// router.get('/report/:status',passport.authenticate('jwt', {session:false}),homecontroller.filteredReports)
module.exports = router;