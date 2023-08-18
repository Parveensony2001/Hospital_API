const express = require('express');
const router = express.Router();

const patient = require('../controller/usercontroller');
const passport = require('passport');
 router.post('/resitration',passport.authenticate('jwt',{ session: false }),patient.resitration);
 router.post('/::id/createreport',passport.authenticate('jwt',{ session: false }),patient.report);
 router.post('/userdata',passport.authenticate('jwt',{session:false}),patient.userdata);
 router.get('/::id/tokan/allreport',passport.authenticate('jwt',{ session: false }),patient.resultreport);
//  router.get('/information',passport.authenticate('jwt',{session:false}),patient.information);

module.exports = router;