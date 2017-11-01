function $(selector) {
	return new ofekQuery(selector);
}

var ofekQuery = function (selector) {
	this.elements=getElements(selector);
	function getElements(selector) {
		var isById = true;
		switch (selector.charAt(0)) {
			case '#':
				return document.getElementById(selector.substring(1, selector.length));
				break;
			case '.':
				let classElements = Array.from(document.getElementsByClassName(selector.substring(1, selector.length)));
				isById = false;
				return classElements;
				break;
			default:
				let tagElements;
				if (selector.search(' ') > -1) {
					var getArray = selector.split(' ');
					tagElements= Array.from(document.getElementsByTagName(getArray[getArray.length-1]));
					var len = getArray.length-2;
					for (var i =len; i >=0; i--) {
						tagElements=getEleWithChildren(tagElements,getArray[i]);

					}
				}
				else
					tagElements = Array.from(document.getElementsByTagName(selector));
				isById = false;
				return tagElements;
				break;
		}
	}

	function getEleWithChildren(tagCollection,parentTag) {
		var elements = []
			for(var j=0 ; j<tagCollection.length;j++){
				if(tagCollection[j].parentNode.nodeName===parentTag.toUpperCase()){
					elements.push(tagCollection[j]);
				}
			}
			return elements;

		}


	this.addClass = function (className) {
		if (isById)
			this.element.classList.add(className);
		else {
			for (let i = 0; i < this.elements.length; i++) {
				this.elements[i].classList.add(className);
			}
		}
	};
	this.removeClass = function (className) {
		if (isById) {
			this.element.classList.remove(className);
		}
		else {
			for (let i = 0; i < this.elements.length; i++) {
				this.elements[i].classList.remove(className);
			}
		}
	};
	this.each = function (fn) {
		if (isById)
			fn(this.element);
		else {
			for (let i = 0; i < this.elements.length; i++) {
				fn(this.elements[i]);
			}
		}
	};
	this.map = function (fn) {
		let len = this.elements.length;
		var objArr = [];
		var object;
		if (isById) {
			object = this.element.cloneNode(true);
			return fn(object);
		}
		for (let i = 0; i < len; i++) {
			objArr[i] = this.elements[i].cloneNode(true);
			fn(objArr[i]);
		}

		return objArr;
	};

	this.all = function () {
		let isSatisfy = true;

		for (let i = 0; i < this.elements[i]; i++) {
			for (let j = 0; j < arguments.length; j++) {
				if (!arguments[i](this.elements[j]))
					isSatisfy = false;
			}
			if (isSatisfy)
				return true;
		}
		return false;
	};

	this.any = function () {
		for (let i = 0; i < this.elements[i]; i++) {
			if (check(arguments, this.elements[i]))
				return true;
		}

		return false;
	};

	function check(arguments, element) {
		for (let i = 0; i < this.arguments.length; i++) {
			if (!arguments[i](element))
				return false;

		}
		return true;
	}
};

