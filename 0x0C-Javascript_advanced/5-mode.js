function changeMode (size, weight, transform, background, color) {

	return function () {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

function main () {

	var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
	var par = document.createElement('p');
	par.innerHTML = 'Welcome Holberton!';
	document.body.appendChild(par);
	// Spooky btn
	spBtn = document.createElement('button');
	spBtn.innerHTML = 'Spooky';
	document.body.appendChild(spBtn);

	spBtn.onclick = function () {
		spooky();
	};
	// Darkbtn
	Darkbtn = document.createElement('button');
	Darkbtn.innerHTML = 'Dark mode';
	document.body.appendChild(Darkbtn);

	Darkbtn.onclick = function () {
		darkMode();
	};
	// Screambtn
	Screambtn = document.createElement('button');
	Screambtn.innerHTML = 'Scream mode';
	document.body.appendChild(Screambtn);

	Screambtn.onclick = function () {
		screamMode();
	};
}

main();
