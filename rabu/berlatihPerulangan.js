// 1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While');

var i = 2;

console.log('LOOPING PERTAMA');
while (i <= 20) {
	console.log(i + ' - I love coding');
	i += 2;
}

console.log('LOOPING KEDUA');
while (i >= 2) {
	console.log(i + ' - I will become fullstack developer');
	i -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log('\n\n2. Melakukan Looping Menggunakan For');

console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
	console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var i = 20; i >= 1; i--) {
	console.log(i + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
console.log('\n\n3. Angka Ganjil dan Genap');

// perulangan Ganjil Genap
for (i = 1; i <= 100; i++) {
	i % 2 === 0 ? console.log(i + ' - GENAP') : console.log(i + ' - GANJIL');
}

// perulangan kelipatan 3 penambahan 2
console.log('\n== Perulangan Kelipatan 3 Penambahan 2 ==');
for (i = 1; i <= 100; i += 2) {
	if (i % 3 === 0) console.log(i + ' - KELIPATAN 3');
}

// perulangan kelipatan 6 penambahan 5
console.log('\n== Perulangan Kelipatan 6 Penambahan 5 ==');
for (i = 1; i <= 100; i += 5) {
	if (i % 6 === 0) console.log(i + ' - KELIPATAN 6');
}

// perulangan kelipatan 10 penambahan 9
console.log('\n== Perulangan Kelipatan 10 Penambahan 9 ==');
for (i = 1; i <= 100; i += 9) {
	if (i % 10 === 0) console.log(i + ' - KELIPATAN 10');
}
