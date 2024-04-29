const express = require('express');
const requestRouter = express.Router();
const {getRequest} = require('../controllers/requestController');
const axios = require('axios');

requestRouter.get('/',getRequest);
module.exports = requestRouter;

