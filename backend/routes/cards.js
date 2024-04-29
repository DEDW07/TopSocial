const express = require('express');
const {getCardById,postCard,deleteCardById} = require('../controllers/cardsController');

const cardsRouter = express.Router();

//GET get card by id  /api/cards?id=1  查询参数
cardsRouter.get('/',getCardById);
//POST post a card   /api/cards
cardsRouter.post('/',postCard);
//DELETE delete a card by id     /api/cards/:card_id  动态参数
cardsRouter.delete('/:card_id',deleteCardById);

module.exports = cardsRouter;
