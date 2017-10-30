function $(selector) {
	return new ofekQuery(selector);
}

var ofekQuery = function (selector) {
	var isById = true;
	switch (selector.charAt(0)) {
		case '#':
			this.element = document.getElementById(selector.substring(1, selector.length));
			break;
		case '.':
			this.elements = Array.from(document.getElementsByClassName(selector.substring(1, selector.length)));
			isById = false;
			break;
		default:
			this.elements = Array.from(document.getElementsByTagName(selector));
			isById = false;
			break;
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
		for (let i = 0; i < this.elements.length; i++) {
			fn(this.elements[i]);

		}
	};
	this.map = function (fn) {
		let len = this.elements.length;
		var objArr=[];
		for (let i = 0; i < len; i++) {
			objArr[i]=this.elements[i].cloneNode(true);
			fn(objArr[i]);
		}

		return objArr;
	};

	this.all = function (){
		let isSatisfy=true;

		for(let i =0 ; i<this.elements[i];i++) {
			for (let j = 0; j<arguments.length ; j++) {
				if (!arguments[i](this.elements[j]))
					isSatisfy = false
			}
			if(isSatisfy)
				return true;
		}
		return false;
	};

	this.any= function(){
		for(let i =0 ; i<this.elements[i];i++){
			if(check(arguments,this.elements[i]))
				return true;
		}

		return false;
	};

	function check(arguments,element){
		for(let i =0 ; i<this.arguments.length;i++){
			if(!arguments[i](element))
				return false;

		}
		return true;
	}
};

