var scr = 0;
function bird1() {
	document.querySelector("#duck1").style.display = 'none';
	var firstBird = Number(document.querySelector('#kill').innerHTML);
	firstBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = firstBird;
}
function bird2() {
	document.querySelector("#duck2").style.display = 'none';
	var secondBird = Number(document.querySelector('#kill').innerHTML);
	secondBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = secondBird;
}
function bird3() {
	document.querySelector("#duck3").style.display = 'none';
	var thirdBird = Number(document.querySelector('#kill').innerHTML);
	thirdBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = thirdBird;
}
function bird4() {
	document.querySelector("#duck4").style.display = 'none';
	var fourthBird = Number(document.querySelector('#kill').innerHTML);
	fourthBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = fourthBird;
}
function bird5() {
	document.querySelector("#duck5").style.display = 'none';
	var fifthBird = Number(document.querySelector('#kill').innerHTML);
	fifthBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = fifthBird;
}
function bird6() {
	document.querySelector("#duck6").style.display = 'none';
	var sixthBird = Number(document.querySelector('#kill').innerHTML);
	sixthBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = sixthBird;
}
function bird7() {
	document.querySelector("#duck7").style.display = 'none';
	var seventhBird = Number(document.querySelector('#kill').innerHTML);
	seventhBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = seventhBird;
}
function bird8() {
	document.querySelector("#duck8").style.display = 'none';
	var eightBird = Number(document.querySelector('#kill').innerHTML);
	eightBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = eightBird;
}
function bird9() {
	document.querySelector("#duck9").style.display = 'none';
	var ninthBird = Number(document.querySelector('#kill').innerHTML);
	ninthBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = ninthBird;
}

function bird10() {
	document.querySelector("#duck10").style.display = 'none';
	var tenthBird = Number(document.querySelector('#kill').innerHTML);
	tenthBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = tenthBird;
}

//egle here script

function bird11() {
	document.querySelector("#duck11").style.display = 'none';
	var eleventhBird = Number(document.querySelector('#kill').innerHTML);
	eleventhBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = eleventhBird;
}

function bird12() {
	document.querySelector("#duck12").style.display = 'none';
	var twelvethBird = Number(document.querySelector('#kill').innerHTML);
	twelvethBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = twelvethBird;
}

function bird13() {
	document.querySelector("#duck13").style.display = 'none';
	var thirthteenBird = Number(document.querySelector('#kill').innerHTML);
	thirthteenBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = thirthteenBird;
}

function bird14() {
	document.querySelector("#duck14").style.display = 'none';
	var fourthteenBird = Number(document.querySelector('#kill').innerHTML);
	fourthteenBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = fourthteenBird;
}

function bird15() {
	document.querySelector("#duck15").style.display = 'none';
	var fifteenBird = Number(document.querySelector('#kill').innerHTML);
	fifteenBird += 1;
	scr++;
	document.querySelector('#kill').innerHTML = fifteenBird;
}
if (scr == 15) {
	const winText = document.querySelector('#winText');
	winText.style.display = 'block';
}

// duck defaulter hidden
const duck1 = document.querySelector('#duck1').style.display = 'none';
const duck2 = document.querySelector('#duck2').style.display = 'none';
const duck3 = document.querySelector('#duck3').style.display = 'none';
const duck4 = document.querySelector('#duck4').style.display = 'none';
const duck5 = document.querySelector('#duck5').style.display = 'none';
const duck6 = document.querySelector('#duck6').style.display = 'none';
const duck7 = document.querySelector('#duck7').style.display = 'none';
const duck8 = document.querySelector('#duck8').style.display = 'none';
const duck9 = document.querySelector('#duck9').style.display = 'none';
const duck10 = document.querySelector('#duck10').style.display = 'none';
const duck11 = document.querySelector('#duck11').style.display = 'none';
const duck12 = document.querySelector('#duck12').style.display = 'none';
const duck13 = document.querySelector('#duck13').style.display = 'none';
const duck14 = document.querySelector('#duck14').style.display = 'none';
const duck15 = document.querySelector('#duck15').style.display = 'none';

function PlayGame() {
	document.getElementById('tune').play();
	var x = document.getElementById('playerName').value;
	document.getElementById('player').innerHTML = x;
	document.getElementById('Popup').style.display = 'none';

	const duck1 = document.querySelector('#duck1').style.display = 'block';
	const duck2 = document.querySelector('#duck2').style.display = 'block';
	const duck3 = document.querySelector('#duck3').style.display = 'block';
	const duck4 = document.querySelector('#duck4').style.display = 'block';
	const duck5 = document.querySelector('#duck5').style.display = 'block';
	const duck6 = document.querySelector('#duck6').style.display = 'block';
	const duck7 = document.querySelector('#duck7').style.display = 'block';
	const duck8 = document.querySelector('#duck8').style.display = 'block';
	const duck9 = document.querySelector('#duck9').style.display = 'block';
	const duck10 = document.querySelector('#duck10').style.display = 'block';
	const duck11 = document.querySelector('#duck11').style.display = 'block';
	const duck12 = document.querySelector('#duck12').style.display = 'block';
	const duck13 = document.querySelector('#duck13').style.display = 'block';
	const duck14 = document.querySelector('#duck14').style.display = 'block';
	const duck15 = document.querySelector('#duck15').style.display = 'block';

}
var help = document.querySelector('#help');
var hintbox = document.querySelector('.hintBox');

function showHintBox(event) {
	event.stopPropagation(); // Prevent the click event from bubbling up to the body
	hintbox.style.display = 'block';
	document.body.addEventListener('click', hideHintBoxOnce);
}

function hideHintBoxOnce(event) {
	if (!event.target.closest('.hintBox')) {
		hintbox.style.display = 'none';
		document.body.removeEventListener('click', hideHintBoxOnce);
	}
}
help.addEventListener('click', showHintBox);