
function start() {
	//Class list to lookup and listen
	let elemClassList = [
			".rotate",			
			".rotate-mod-1",
			".rotate-mod-2",
			".rotate-more",			
			".chgbg",			
			".opacity",
			".scale",
			".wide",
			".higher",
			".circle",
			".move-top"
			];		
	
	listElements();	
		
	function listElements() {
		let elems = [];	
		
		for (let i = 0; i < elemClassList.length; i++) {
		  elems[i] = document.querySelector(elemClassList[i]);		  
		}
		
		groupListeners(elems);
	}
			
	function groupListeners(elems) {
		
		for (let i = 0; i < elems.length; i++) {
			elems[i].addEventListener("click", toggleActive, false);
			elems[i].addEventListener("click", toggleMessage, false);
		}
		
	}
	
	function toggleActive(evt) {
		let clicked = evt.currentTarget;
		toggleClass(clicked, "active");		
	}
	
	function toggleClass(elem, newClass){
		
		if(elem.classList) {
			elem.classList.toggle(newClass);
		}
		else {
			let classArr = elem.className.split(" ");
			let arrIndex = classArr.indexOf(newClass);
			
			if(arrIndex >= 0) {
				classArr.splice(arrIndex, 1);
			}
			else {
				classArr.push(newClass);
				elem.className.join(" ");
			}
		}
		
	}
	
	function toggleMessage(evt){
		let str = "";
		let elem = evt.currentTarget.nextElementSibling.nextElementSibling;
		
		if(elem.innerText == "") {
		  str = "<p>The action was triggered.</p>";	
		}
		else {
		  str = "";
		}
				
		elem.innerHTML = str;
	}
	
}

window.onload = start;
