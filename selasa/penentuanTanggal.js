var tanggal = 21;
var bulan = 1;
var tahun = 1945;
var tanggalMax;
var tahunCheck = tahun > 1900 && tahun < 2200;

switch (bulan) {
	case 1:
		bulan = 'Januari';
		tanggalMax = 31;
		break;
	case 2:
		bulan = 'Februari';
		tahun % 4 === 0 ? (tanggalMax = 29) : (tanggalMax = 28);
		break;
	case 3:
		bulan = 'Maret';
		tanggalMax = 31;
		break;
	case 4:
		bulan = 'April';
		tanggalMax = 30;
		break;
	case 5:
		bulan = 'Mei';
		tanggalMax = 31;
		break;
	case 6:
		bulan = 'Juni';
		tanggalMax = 30;
		break;
	case 7:
		bulan = 'Juli';
		tanggalMax = 31;
		break;
	case 8:
		bulan = 'Agustus';
		tanggalMax = 31;
		break;
	case 9:
		bulan = 'September';
		tanggalMax = 30;
		break;
	case 10:
		bulan = 'Oktober';
		tanggalMax = 31;
		break;
	case 11:
		bulan = 'November';
		tanggalMax = 30;
		break;
	case 12:
		bulan = 'Desember';
		tanggalMax = 31;
		break;
	default:
		console.log('bulan error');
		bulan = undefined;
		break;
}

switch (true) {
	case tanggal > 0 && tanggal <= tanggalMax:
		tanggal;
		break;
	default:
		console.log('tanggal error');
		tanggal = undefined;
		break;
}

switch (true) {
	case tahunCheck:
		tahun;
		break;
	default:
		console.log('tahun error');
		tahun = undefined;
}

tanggal && bulan && tahun ? console.log(tanggal + ' ' + bulan + ' ' + tahun) : console.log('Nothing to display');
