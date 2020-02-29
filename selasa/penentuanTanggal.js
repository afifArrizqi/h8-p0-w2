var tanggal = 30;
var bulan = 6;
var tahun = 1945;
var tanggalMax;
var tahunCheck = tahun > 1900 && tahun < 2200;

switch (bulan) {
	case 1:
		bulan = 'Januari';
		console.log('Bulan   : ' + bulan);
		tanggalMax = 31;
		break;
	case 2:
		bulan = 'Februari';
		console.log('Bulan   : ' + bulan);
		tahun % 4 === 0 ? (tanggalMax = 29) : (tanggalMax = 28);
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
