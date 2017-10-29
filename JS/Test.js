
window.onload= test_group('WALLA AVARTI',
	function () {
		assert(true, 'test1');
		assert(true, 'test2');
		assert(true, 'test3');
	});


function test_group(groupName, assertsFunction) {
	this.panelDiv = document.createElement('div');
	this.panelDiv.classList.add('test-succeed','row', 'panel', 'panel-default', 'col-xs-offset-4', 'col-xs-4');
	var title = document.createElement('h4');
	title.innerHTML = groupName;
	this.panelDiv.appendChild(title);
	var htmlBody = document.getElementsByTagName('body');
	htmlBody[0].appendChild(this.panelDiv);


	assertsFunction();
}

function assert(testPassed, testName) {
	var testDiv = document.createElement('div');
	testDiv.classList.add('panel', 'panel-default', 'col-xs-offset-3', 'col-xs-6');
	if (testPassed)
		testDiv.classList.add('test', 'panel-success');
	else {
		this.panelDiv.classList.remove('test-succeed');
		testDiv.classList.add('test', 'panel-danger');
		this.panelDiv.classList.add('test-failed');
	}
	var labelEle = document.createElement('label');
	labelEle.innerHTML = testName;
	testDiv.appendChild(labelEle);

	this.panelDiv.appendChild(testDiv);

	return testDiv;
}
