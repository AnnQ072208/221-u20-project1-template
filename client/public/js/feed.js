document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu(){
        goToLocation('http://my.marist.edu');
    }
    document.getElementById("portal_button").addEventListener("click", goToMaristEdu);
    document.getElementById("portal_button_text").addEventListener("click", goToMaristEdu);
});

let currentStories = [];

currentStories.push({
    Title: "Marist at Night",
    Body: "Security, Safety, and Relaxing Scenery",
    linkUrl: "https://www.hufsd.edu/assets/images/2020/may/banner-18a.jpg",
    imageUrl: "images/night.png"
});

currentStories.push({
    Title: "Generous Donation",
    Body: "Famous Alumni donates $100,000 to Marist College!",
    linkUrl: "https://example.com/story2",
    imageUrl: "images/news_pic.jpg"
});

currentStories.push({
    Title: "Hancock Center",
    Body: "NECSD Computer Science Pathway Summer Program",
    linkUrl: "https://example.com/story3",
    imageUrl: "images/hancock.jpeg"
});

function displayItemHTML(feedItem) {
    let newsfeedElement = document.getElementById("newsfeed");

    let itemHTML = `
        <div class="feed-item">
            <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
            <p>${feedItem.Body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">
                <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
            </a>
            <hr>
        </div>
    `
    newsfeedElement.innerHTML += itemHTML;        
}

currentStories.forEach(function(item) {
    displayItemHTML(item);
});
