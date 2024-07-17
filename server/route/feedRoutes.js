const express = require('express');
const feedController = require('../controller/feedController');

const router = express.Router();

router.get('/feed', feedController.getAllFeedItems);
router.post('/feed', feedController.createFeedItem);
router.get('/feed/:id', feedController.getFeedItemById);
router.put('/feed/:id', feedController.updateFeedItem);
router.delete('/feed/:id', feedController.deleteFeedItem);

module.exports = router;


