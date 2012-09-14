function onSwipedown() {
if (document.getElementById("currentOrientation").width === '1280px') {
		document.getElementById("currentOrientation").width = '720px'; 
		document.getElementById("currentOrientation").height = '1280px'; 
		document.getElementById("black").height = '1280px'; 
		document.getElementById("black").width = '48px'; 
		}
else {
  		document.getElementById("currentOrientation").width = '1280px'; 
		document.getElementById("currentOrientation").height = '720px'; 
		document.getElementById("black").height = '48px'; 
		document.getElementById("black").width = '1280px'; 
		}
}
blackberry.event.addEventListener("swipedown", onSwipedown);

/*
function displayCurrentOrientation() {
	
	if (window.orientation === 0) {
		document.getElementById("currentOrientation").width = '1280px'; 
		document.getElementById("currentOrientation").height = '720px'; 
	}	
	if (window.orientation === 90) {
		document.getElementById("currentOrientation").width = '720px'; 
		document.getElementById("currentOrientation").height = '1280px'; 
	}
	if (window.orientation === 180) {
		document.getElementById("currentOrientation").width = '1280px'; 
		document.getElementById("currentOrientation").height = '720px'; 
	}
	if (window.orientation === -90) {
		document.getElementById("currentOrientation").width = '720px'; 
		document.getElementById("currentOrientation").height = '1280px'; 
	}
}

function handleLoad(event) {
	displayCurrentOrientation();
	window.addEventListener("orientationchange", displayCurrentOrientation, true);
}

window.addEventListener("load", handleLoad, true);
*/
