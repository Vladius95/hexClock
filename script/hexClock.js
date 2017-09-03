var clock = document.getElementById('clock');
var hex = document.getElementById('hex');

function hexClock(){
	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();


	const shift = 10;//for fast color change, else for 1 day will be only shades of blue
	var time = h*60 + m*60 + s * shift;
	var hexTime = '#'+'0'.repeat(6-time.toString(16).length) + time.toString(16).toUpperCase();

	var stringTime = ((h < 10) ? '0' + h.toString() : h.toString()) + ':' +
					 ((m < 10) ? '0' + m.toString() : m.toString()) + ':' +
					 ((s < 10) ? '0' + s.toString() : s.toString());

	clock.textContent = stringTime;
	hex.textContent = hexTime;

	document.body.style.background = hexTime;
}

hexClock();
setInterval(hexClock, 1000);