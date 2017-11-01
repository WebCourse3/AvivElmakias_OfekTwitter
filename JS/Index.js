var tweetList=[
	{username: 'Bobo', text: 'hello followers!'},
	{username: 'Elvis', text: 'this exercise is really easy!'},
	{username: 'Mimi', text: 'I want to go to sleep'}
];
var i=0;
document.getElementById('publish').addEventListener('click', function() {
	readyMessage();
});
function readyMessage(){
	var length= tweetList.length;

		if(i<length) {
			publishComment(tweetList[i].username, tweetList[i].text);
			i++;
		}
}
function publishComment(userName , comment) {
	var tweetText = document.getElementById('Comment');
	var tweets = document.getElementById('tweets');
	var newTweet=createNewTweet(userName,comment);
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
	var divs = $("div label");
	sentMessage.innerHTML=tweetText;
	newTweet.appendChild(sentMessage);
	return newTweet;
}

function func(div){
	div.classList.add('lala');
}

function createDiv() {
	return document.createElement('div');
}

function addClass(divElement , className) {
	 divElement.classList.add(className);
	 return divElement;
}




