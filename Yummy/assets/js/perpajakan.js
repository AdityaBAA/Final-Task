//Data dari 25 karyawan
var database = [
    {
        'no': 1,
        'nama': 'Azhari Ilham',
        'jabatan': 'HRD',
        'cuti': 0,
        'ijin': 0,
        'sakit': 2,
        'gaji': 40000000,
    }, {
        'no': 2,
        'nama': 'Aditya B.A',
        'jabatan': 'Pegawai Tetap',
        'cuti': 1,
        'ijin': 0,
        'sakit': 1,
        'gaji': 10000000,
    }, {
        'no': 3,
        'nama': 'Anissa Sintiawi',
        'jabatan': 'Administrasi',
        'cuti': 0,
        'ijin': 2,
        'sakit': 1,
        'gaji': 8000000,
    }, {
        'no': 4,
        'nama': 'Asbak Warteg',
        'jabatan': 'Pegawai Tetap',
        'cuti': 0,
        'ijin': 3,
        'sakit': 2,
        'gaji': 15000000,
    }, {
        'no': 5,
        'nama': 'Dewabrata',
        'jabatan': 'Pegawai Tetap',
        'cuti': 2,
        'ijin': 3,
        'sakit': 4,
        'gaji': 20000000,
    }, {
        'no': 6,
        'nama': 'Dudi Julianto',
        'jabatan': 'Security',
        'cuti': 3,
        'ijin': 1,
        'sakit': 3,
        'gaji': 5000000,
    }, {
        'no': 7,
        'nama': 'Erick Purnama',
        'jabatan': 'Pegawai Tetap',
        'cuti': 1,
        'ijin': 2,
        'sakit': 3,
        'gaji': 9000000,
    }, {
        'no': 8,
        'nama': 'Fabasassa',
        'jabatan': 'Pegawai Tetap',
        'cuti': 2,
        'ijin': 3,
        'sakit': 3,
        'gaji': 10000000,
    }, {
        'no': 9,
        'nama': 'Jecky Chandra',
        'jabatan': 'Office Boy',
        'cuti': 0,
        'ijin': 0,
        'sakit': 0,
        'gaji': 3000000,
    }, {
        'no': 10,
        'nama': 'Nurrohmat',
        'jabatan': 'Pegawai Tetap',
        'cuti': 0,
        'ijin': 0,
        'sakit': 3,
        'gaji': 10000000,
    }, {
        'no': 11,
        'nama': 'Purboaji Anggoro',
        'jabatan': 'Costumer Service',
        'cuti': 0,
        'ijin': 0,
        'sakit': 0,
        'gaji': 5000000,
    }, {
        'no': 12,
        'nama': 'Rafi Aditya',
        'jabatan': 'Pegawai Tetap',
        'cuti': 0,
        'ijin': 0,
        'sakit': 2,
        'gaji': 10000000,
    }, {
        'no': 13,
        'nama': 'Setyo',
        'jabatan': 'Pegawai Tetap',
        'cuti': 3,
        'ijin': 2,
        'sakit': 3,
        'gaji': 35000000,
    }, {
        'no': 14,
        'nama': 'Tarri Peritha Westi',
        'jabatan': 'Costumer Service',
        'cuti': 2,
        'ijin': 3,
        'sakit': 1,
        'gaji': 10000000,
    }, {
        'no': 15,
        'nama': 'Wildan',
        'jabatan': 'Pegawai Tetap',
        'cuti': 1,
        'ijin': 1,
        'sakit': 3,
        'gaji': 4500000,
    }, {
        'no': 16,
        'nama': 'Adithya Frachmansyah',
        'jabatan': 'Officer',
        'cuti': 0,
        'ijin': 2,
        'sakit': 0,
        'gaji': 2000000,
    }, {
        'no': 17,
        'nama': 'Candra L.A',
        'jabatan': 'Pegawai Tetap',
        'cuti': 1,
        'ijin': 0,
        'sakit': 3,
        'gaji': 10000000,
    }, {
        'no': 18,
        'nama': 'Ranua',
        'jabatan': 'Pegawai Tetap',
        'cuti': 3,
        'ijin': 1,
        'sakit': 2,
        'gaji': 20000000,
    }, {
        'no': 19,
        'nama': 'Younose',
        'jabatan': 'Security',
        'cuti': 3,
        'ijin': 1,
        'sakit': 2,
        'gaji': 50000000,
    }, {
        'no': 20,
        'nama': 'Ahmad Fauzi',
        'jabatan': 'Pegawai Tetap',
        'cuti': 0,
        'ijin': 0,
        'sakit': 3,
        'gaji': 20000000,
    }, {
        'no': 21,
        'nama': 'Kelvin Samuel',
        'jabatan': 'Supervisor',
        'cuti': 0,
        'ijin': 0,
        'sakit': 0,
        'gaji': 90000000,
    }, {
        'no': 22,
        'nama': 'David',
        'jabatan': 'Pegawai Magang',
        'cuti': 0,
        'ijin': 1,
        'sakit': 3,
        'gaji': 5000000,
    }, {
        'no': 23,
        'nama': 'Leo Frendysco',
        'jabatan': 'Office Boy',
        'cuti': 0,
        'ijin': 2,
        'sakit': 1,
        'gaji': 2800000,
    }, {
        'no': 24,
        'nama': 'Ricky Setiawan',
        'jabatan': 'Pegawai Magang',
        'cuti': 0,
        'ijin': 3,
        'sakit': 0,
        'gaji': 1000000,
    }, {
        'no': 25,
        'nama': 'Alex Chandra',
        'jabatan': 'Pegawai Tetap',
        'cuti': 0,
        'ijin': 0,
        'sakit': 2,
        'gaji': 10000000,
    },
];

//Eksekusi pembangunan tabel dari data array
buildTable(database);

//Menambahkan table secara otomatis dari data array
function buildTable(data) {
    var table = document.getElementById("myTable");
    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
        <td data-label="No">${data[i].no} </td>
        <td data-label="Nama">${data[i].nama} </td>
        <td data-label="Jabatan">${data[i].jabatan} </td>
        <td data-label="Cuti">${data[i].cuti} </td>
        <td data-label="Ijin">${data[i].ijin} </td>
        <td data-label="Sakit">${data[i].sakit} </td>
        <td data-label="Gaji">${data[i].gaji} </td>
        </tr>`
        table.innerHTML += row;
    }
}

//Jquery dipakai disini
$(document).ready(function () {
    //Ketika klik salah satbu row di table, maka akan terlacak
    $("table tbody tr").click(function () {
        var a = [];
        $(this).find('td').each(function () {
            a.push($(this).text());
        });
        pph21(a[6]);
        //Memasukan value yang di klik kedalam local storage dan otomatis mengarahkan ke data-lengkap.html
        localStorage.setItem("textValue", a[0]);
        window.location.href = 'data-lengkap.html';
    });
});

//Perhitungan perpajakan disini
const ptkp = 54000000;
const pkp5 = 60000000;
const pkp10 = 100000000;
const pkp15 = 200000000;
const pkp20 = 500000000;

function pajak5(gajisetahun) {
    if (gajisetahun > pkp5) {
        return (ptkp - pkp5) * 5 / 100;
    }
    return (gajisetahun - ptkp) * 5 / 100;
}

function pajak10(gajisetahun) {
    if (gajisetahun > pkp10) {
        return (pkp5 - pkp10) * 10 / 100;
    }
    return (gajisetahun - pkp10) * 10 / 100;
}

function pajak15(gajisetahun) {
    if (gajisetahun > pkp15) {
        return (pkp10 - pkp15) * 15 / 100;
    }
    return (gajisetahun - pkp15) * 15 / 100;
}

function pajak20(gajisetahun) {
    if (gajisetahun > pkp20) {
        return (pkp15 - pkp20) * 20 / 100;
    }
    return (gajisetahun - pkp20) * 20 / 100;
}

function pajak25(gajisetahun) {
    return (gajisetahun - pkp20) * 25 / 100;
}

function pph21(gajisetahun) {
    let pajak = 0;
    if (gajisetahun > ptkp) {
        pajak += pajak5(gajisetahun);
        if (gajisetahun > pkp5) {
            pajak += pajak10(gajisetahun);
            if (gajisetahun > pkp10) {
                pajak += pajak15(gajisetahun);
                if (gajisetahun > pkp15) {
                    pajak += pajak20(gajisetahun);
                    if (gajisetahun > pkp20) {
                        pajak += pajak25(gajisetahun);
                    }
                }
            }
        }
    } else {
        alert("Penghasilan anda tidak kena pajak");
    }
    alert("Pajak penghasilan anda: " + pajak);
}