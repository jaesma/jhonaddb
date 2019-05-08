const button = document.querySelector('#button');
const vids = document.querySelectorAll('.vid');

button.addEventListener('click', () => {
	for (var i = 0; i<vids.length; i++){
		vids[i].style.display = "block";
		button.style.display = "none";
	}

});





