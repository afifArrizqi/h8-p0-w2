// 1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');

var rows1 = 5;

for (var i = 0; i < rows1; i++) {
	console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');

var rows2 = 5;

for (var i = 0; i < rows2; i++) {
	var nilai = '';
	for (var j = 0; j < rows2; j++) {
		nilai += '*';
	}
	console.log(nilai);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');

var rows3 = 5;

for (var i = 0; i < rows3; i++) {
	nilai = '*';
	for (var j = 0; j < i; j++) {
		nilai += '*';
	}
	console.log(nilai);
}
