function rekap() {
    $('#isi-rekap-tab').html('');
    $('#isi-detail-tab').html('');
    $.getJSON('data/lat-rekap.json', function(data) {
        let rekap = data.rekap;
        console.log(rekap);

        $.each(rekap, function(i, data) {
            let persen = data.available/data.capacity*100;
            let bulat = Math.round(persen);

            $('#isi-rekap-tab').append(`
                <div class="col-md-4">
                    <div class="card bg-teal-200 mb-3">
                        <div class="card-body">
                            <h1 class="card-title">`+data.available+`</h1>
                            <p class="card-text">Kamar Tersedia</p>
                            <h1 class="card-text display-6">`+data.room_name+`</h1>
                        </div>
                        <div class="card-footer">
                            <h6 class="card-subtitle mb-2 text-muted text-center">`+bulat+`% kamar tersedia dari `+data.capacity+` kamar</h6>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: `+persen+`%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
}

function detail() {
    $('#isi-rekap-tab').html('');
    $('#isi-detail-tab').html('');
    $.getJSON('data/lat-detail.json', function(data) {
        let detail = data.detail;
        console.log(detail);
        
        $('#isi-detail-tab').append(`
            <table class="table table-hover table-bordered table-responsive text-center" id="detail-table">
                <thead class="bg-teal-200">
                    <tr>
                        <th scope="col" class="sorting">#</th>
                        <th scope="col">Nama RS</th>
                        <th scope="col">VVIP</th>
                        <th scope="col">VIP</th>
                        <th scope="col">Kelas I</th>
                        <th scope="col">Kelas II</th>
                        <th scope="col">Kelas III</th>
                        <th scope="col">ICU</th>
                        <th scope="col">PICU</th>
                        <th scope="col">NICU</th>
                        <th scope="col">Lainnya</th>
                    </tr>
                </thead>
        `);
        
        $.each(detail, function(i, data) {
            let no = i+1;
            let room = data.room;
            $('#detail-table').append(`
                <tbody>
                    <tr>
                        <td>`+no+`</td>
                        <th>`+data.name+`</th>
                        <td>`+room[0].available+`</td>
                        <td>`+room[1].available+`</td>
                        <td>`+room[2].available+`</td>
                        <td>`+room[3].available+`</td>
                        <td>`+room[4].available+`</td>
                        <td>`+room[5].available+`</td>
                        <td>`+room[6].available+`</td>
                        <td>`+room[7].available+`</td>
                        <td>`+room[8].available+`</td>
                    </tr>
                </tbody>
            `);
        });
        
        // $('#isi-detail-tab').append(`
        //         </tbody>
        //     </table>    
        // `);
    });

}

rekap();

$('#rekap-tab').on('click', function() {
    rekap();
});

$('#detail-tab').on('click', function() {
    detail();
});

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));