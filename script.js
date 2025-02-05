function firstWord(s) {
  // your code here
	let str1 = s.trim();
	let str2 = str1.split(" ");
	return str2[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
