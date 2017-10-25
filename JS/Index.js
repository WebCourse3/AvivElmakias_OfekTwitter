var tweetList=[
	{username: 'Bobo', text: 'hello followers!'},
	{username: 'Elvis', text: 'this exercise is really easy!'},
	{username: 'Mimi', text: 'I want to go to sleep'}
];
Document.ready

function publishButton() {
	var tweetText = document.getElementById('Comment');
	var tweets = document.getElementById('tweets');
	var newTweet=createNewTweet('James bond',tweetText.value);
	tweets.appendChild(newTweet);
	tweetText.value="";

}

function createImg(src) {
	var userImg = document.createElement('img');
	userImg.src = src;
	return userImg;
}

function createNewTweet(publisherName,tweetText) {
	var newTweet = createDiv();
	newTweet=addClass(newTweet,'row');
	newTweet=addClass(newTweet,'post');
	newTweet.appendChild(createImg('../images/User.png'));
	var commentingPerson = createDiv();
	commentingPerson=addClass(commentingPerson,'person');
	commentingPerson.innerHTML=publisherName;
	newTweet.appendChild(commentingPerson);
	var sentMessage = createDiv();
	sentMessage.innerHTML=tweetText;
	newTweet.appendChild(sentMessage);
	return newTweet;
}

function createDiv() {
	return document.createElement('div');
}

function addClass(divElement , className) {
	 divElement.classList.add(className);
	 return divElement;

}
