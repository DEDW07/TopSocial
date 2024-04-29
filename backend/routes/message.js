const express = require('express');
const {getMessage} = require('../controllers/messageController');
const messageRouter = express.Router();
const axios = require('axios');

messageRouter.get('/',getMessage);

module.exports = messageRouter;