const express = require('express');
const {getProfile} = require('../controllers/profileController')
const profileRouter = express.Router();
const axios = require('axios');

profileRouter.get('/',getProfile);

module.exports = profileRouter;
