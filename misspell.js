var nearbykeys = {
	q: "qwa",
	w: "qaeds",
	e: "wsdfr",
	r: "edtgf",
	t: "rfghy",
	y: "tghju",
	u: "yhjki",
	i: "ujklo",
	o: "iklp",
	p: "ol",
	a: "qwsxz",
	s: "qazxcdew",
	d: "rewsxcvf",
	f: "bvcdertg",
	g: "bvfrtyhn",
	h: "tubmgjyn",
	j: "yhnmkiu",
	k: "lmjio",
	l: "opk",
	z: "asx",
	x: "zsc",
	c: "xvdsf",
	v: "cdbfg",
	b: "vfghn",
	n: "bghjm",
	m: "nhjk"
};

function misspell(word) {
	var mistake = Math.floor(4 * Math.random()); // Random mistake number
	var wordSplit = word.split(""); // Split string into seperate characters
	var randomCharacter = Math.floor(Math.random() * word.length + 1); // Get a random letter from the string (in number)
	var con = word.removeLetters("constants").split("");
	var vow = word.removeLetters("vowels").split("");
	var randomVowel = con[Math.floor(Math.random() * con.length)];
	var randomConstant = vow[Math.floor(Math.random() * vow.length)];

	if (mistake == 0) {
		wordSplit.splice(randomCharacter + 1, 0, wordSplit[randomCharacter]);
	}
	
	// Remove random character
	else if (mistake == 1) {
		wordSplit.splice(wordSplit.indexOf(wordSplit[randomCharacter]), 1);
	}
	
	// Replace random constant with vowel
	else if (mistake == 2) {
		wordSplit = word.replace(randomConstant, randomVowel).split("");
	}
	
	// Replace random vowel with constant
	else if (mistake == 3) {
		wordSplit = word.replace(randomVowel, randomConstant).split("");
	}
	
	// Replace with nearby key
	else if (mistake == 4) {
		var randomNearybyKey = Math.floor(Math.random() * nearbykeys(wordSplit[randomCharacter]).length);
		wordSplit = word.replace(wordSplit[randomCharacter], nearbykeys(wordSplit[randomCharacter])[randomNearybyKey]).split("");
	}

	return wordSplit.join("")
}

String.prototype.removeLetters = function(r) {
	var a = this;
	return "vowels" == r ? a = a.replace(/[euioa]/gi, "") : "constants" == r && (a = a.replace(/[qwrtypsdfghjklzxcvbnm]/gi, "")), a
};
