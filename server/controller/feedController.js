const FeedItem = require('../model/feedItem');

let feedItems = [];

let newItem1 = FeedItem.createFeedItem("Marist at Night", "Security, Safety, and Relaxing Scenery", "https://www.hufsd.edu/assets/images/2020/may/banner-18a.jpg",  "images/night.png");
    feedItems.push(newItem1);
let newItem2 = FeedItem.createFeedItem("Generous Donation", "Famous Alumni donates $100,000 to Marist College!", "https://example.com/story2", "images/news_pic.jpg");
    feedItems.push(newItem2);
let newItem3 = FeedItem.createFeedItem("Hancock Center", "NECSD Computer Science Pathway Summer Program", "https://example.com/story3", "images/hancock.jpeg");
    feedItems.push(newItem3);




exports.getfeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedItems));
}

exports.saveItem = (req, res) => {
    let newItem = FeedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    feedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
    
}

exports.getFeedItemsById = (req, res) => {
    const { id } = req.params;
    const feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
}

exports.updateItem = (req, res) => {
    var updatedItem =  feedItems;
    if(req.body.title)
        updatedItem.title = req.body.title;
    if(req.body.body)
        updatedItem.body = req.body.body;
    if(req.body.linkUrl)
        updatedItem.linkUrl = req.body.linkUrl;
    if(req.body.imageUrl)
        updatedItem.imageUrl = req.body.imageUrl;
    feeItems = updatedItem;

    res.setHeader('Content-Type', 'application/json');
}
    
    
    
   

exports.deleteItem = (req, res) => {
    feedItems.splice(1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);

}
