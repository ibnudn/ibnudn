<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="src/scss/custom.css">

    <title>SIKK RS</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-teal-700">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            SIKK RS
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <!-- <a class="nav-link active" aria-current="page" href="#">All Menu</a>
                <a class="nav-link" aria-current="page" href="#">Pizza</a>
                <a class="nav-link" aria-current="page" href="#">Pasta</a>
                <a class="nav-link" aria-current="page" href="#">Nasi</a>
                <a class="nav-link" aria-current="page" href="#">Minuman</a> -->
            </div>
        </div>
    </div>
    </nav>

    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <h1 class="text-center display-6">Informasi Ketersediaan Kamar Rumah Sakit Kota Surakarta</h1>
            </div>
        </div>
        <hr>
        <br>
        <div class="row">
            <nav role="navigation">
                <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="rekap-tab" data-bs-toggle="pill" href="#isi-rekap-tab" role="tab"aria-selected="true">Rekap Ketersediaan Kamar</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="detail-tab" data-bs-toggle="pill" href="#isi-detail-tab" role="tab" aria-controls="pills-profile" aria-selected="false">Detail Ketersediaan Kamar</a>
                    </li>
                </ul>
                <br>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" role="tabpanel">
                        <div class="row" id="isi-rekap-tab">
                            Isi Rekap
                        </div>
                    </div>
                    <div class="tab-pane fade show active" role="tabpanel" >
                        <div class="row" id="isi-detail-tab">
                            Isi Detail
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    
  </body>
</html>