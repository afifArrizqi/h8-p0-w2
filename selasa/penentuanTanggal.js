var tanggal = 28;
var bulan = 2;
var tahun = 1900;
var tanggalMax;
var tahunCheck = tahun >= 1900 && tahun <= 2200;

switch (bulan) {
	case 1:
		bulan = 'Januari';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 2:
		bulan = 'Februari';
		console.log('Bulan   : ' + bulan);
		if (tahun % 4 !== 0 || (tahun % 400 !== 0 && tahun % 100 === 0)) tanggalMax = 28;
		else tanggalMax = 29;
		// if (year is not divisible by 4) then (it is a common year)
		// else if (year is not divisible by 100) then (it is a leap year)
		// else if (year is not divisible by 400) then (it is a common year)
		// else (it is a leap year)
		break;
	case 3:
		bulan = 'Maret';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 4:
		bulan = 'April';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 30;
		break;
	case 5:
		bulan = 'Mei';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 6:
		bulan = 'Juni';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 30;
		break;
	case 7:
		bulan = 'Juli';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 8:
		bulan = 'Agustus';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 9:
		bulan = 'September';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 30;
		break;
	case 10:
		bulan = 'Oktober';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 11:
		bulan = 'November';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 30;
		break;
	case 12:
		bulan = 'Desember';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	default:
		console.log('bulan error');
		bulan = undefined;
		tanggalMax = 31;
		break;
}

switch (true) {
	case tanggal > 0 && tanggal <= tanggalMax:
		console.log('Tanggal : ' + tanggal);
		break;
	default:
		console.log('tanggal error');
		tanggal = undefined;
		break;
}

switch (true) {
	case tahunCheck:
		console.log('Tahun   : ' + tahun);
		break;
	default:
		console.log('tahun error');
		tahun = undefined;
}

tanggal && bulan && tahun ? console.log(tanggal + ' ' + bulan + ' ' + tahun) : console.log('Nothing to display');
