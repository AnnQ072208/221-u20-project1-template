class FeedItem {
    constructor(id, title, body, linkUrl, imageUrl) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }
}

exports.createUser = function(id, title, body, linkUrl, imageUrl) {
    return new user(id, title, body, linkUrl, imageUrl);
  };