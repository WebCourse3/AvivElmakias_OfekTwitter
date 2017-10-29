var userList = [
	{username: 'Marty-Mcfly'},
	{username: 'James-Bond'},
	{username: 'Janis-Joplin'},
	{username: 'Mark-Twain'},
	{username: 'Albert-Einstein'},
	{username: 'Bill-gates'},
	{username: 'Frodo'}
];

function toggleButton(elem) {
	changeButtonState(elem);
}

function changeButtonState(elem) {
	if (elem.innerHTML === 'Follow') {
		elem.classList.remove('btn-primary');
		elem.classList.add('btn-danger');
		elem.innerHTML = 'unfollow';
		addFollower(elem);
	}
	else {
		elem.classList.remove('btn-danger');
		elem.classList.add('btn-primary');
		elem.innerHTML = 'Follow';
		removeFollower(elem);
	}
}

window.onload = addUsers();

function addFollower(userButton) {
	var followees = document.getElementById('foloweesPics');
	userButton.parentNode.classList.remove('col-xs-1');
	userButton.parentNode.classList.add('col-xs-6');
	followees.appendChild(userButton.parentNode);

}

function createDiv() {
	return document.createElement('div');
}

function addUsers() {
	var len = userList.length;
	for (var i = 0; i < len; i++) {
		var avatarDiv = createUser(userList[i].username);
		var container = document.getElementById('users');
		container.appendChild(avatarDiv);
	}

}

function createUser(name) {
	var avatarDiv = createDiv();
	avatarDiv.classList.add('avatars', 'col-xs-1', 'thumbnail');
	var divImg = createImg('../images/User.png');
	var btn = createButton();
	var spanEle = createSpan(name);

	avatarDiv.appendChild(divImg);
	avatarDiv.appendChild(btn);
	avatarDiv.appendChild(spanEle);
	return avatarDiv;

}

function createImg(src) {
	var userImg = document.createElement('img');
	userImg.src = src;
	userImg.classList.add('img-thumbnail');
	return userImg;
}

function createButton() {
	var button = document.createElement('button');
	button.classList.add('btn-primary');
	button.type = 'button';
	button.setAttribute('onclick', 'toggleButton(this)');
	button.innerHTML = 'Follow';
	return button;
}

function createSpan(text) {
	var spanEle = document.createElement('span');
	spanEle.innerHTML = text;
	return spanEle;
}

function removeFollower(elem) {
	var followees = document.getElementById('foloweesPics');
	var users = document.getElementById('users');
	followees.removeChild(elem.parentNode);
	elem.parentNode.classList.remove('col-xs-6');
	elem.parentNode.classList.add('col-xs-1');
	users.appendChild(elem.parentNode);

}

function displayFilteredList() {
	var name = document.getElementById('UserName').value;
	var filter = name.toUpperCase();
	filterUsers(filter);

}

function filterUsers(name) {

	var userArray = document.getElementsByClassName('avatars');
	var len = userArray.length;
	for (var i = 0; i < len; i++) {
		if (userArray[i].childNodes[2].innerHTML.toUpperCase().indexOf(name) > -1) {
			userArray[i].style.display = '';
		} else {
			userArray[i].style.display = 'none';
		}
	}
}


