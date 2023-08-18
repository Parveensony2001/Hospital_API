const express = require('express');
const router = express.Router();

const hospital = require('../controller/hospitalcontroller');
  router.post('registration',hospital.create);
  router.post('doctor',hospital.asignDoctor);
  router.post('expirance',hospital.giveExpirance);
  // router.get('treatment',hospital.treatment);

module.exports = router;
