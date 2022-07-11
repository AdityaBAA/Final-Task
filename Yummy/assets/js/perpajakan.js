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

buildTable(database);

var formatter = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR',
});

function buildTable(data) {
    var table = document.getElementById("myTable");
    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
        <td>${data[i].no} </td>
        <td>${data[i].nama} </td>
        <td>${data[i].jabatan} </td>
        <td>${data[i].cuti} </td>
        <td>${data[i].ijin} </td>
        <td>${data[i].sakit} </td>
        <td>${data[i].gaji} </td>
        </tr>`
        table.innerHTML += row;
    }
}

$(document).ready(function () {
    $("table tbody tr").click(function () {
        var a = [];
        $(this).find('td').each(function () {
            a.push($(this).text());
            //    $("test").text(a.toString()); 
        });
        $("#test").text(a);
    });
});