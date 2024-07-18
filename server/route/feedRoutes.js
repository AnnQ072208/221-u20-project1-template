const express = require('express');
const router = express.Router();

let feedController = require("../controller/feedController");

router.route('/feed')
    .get(feedController.getfeedItems)
    .post(feedController.saveItem);
   

router.route('/feed/:itemId')
    .get(feedController.getFeedItemsById)
    .patch(feedController.updateItem)
    .delete(feedController.deleteItem)
    .put(feedController.saveItem)
module.exports = router;
