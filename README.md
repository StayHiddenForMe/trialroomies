<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
    <!-- My css -->
    <link rel="stylesheet" href="./css/index.css" />
    <!-- Font Awsome -->
    <script src="https://kit.fontawesome.com/8e26b4230d.js" crossorigin="anonymous"></script>
</head>

<body class="mainBody">
    <!-- Navbar -->
    <section>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a href="#">
                        <img class="logoImg" src="./images/fist-bump 128.png"/>
                    </a>
                    <a class="navbar-brand">
                        <p class="landingPageTitle">Roomies</p>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto px-5">
                            <a class="nav-link navbarFnt" href="#">About Us</a>
                            <a class="nav-link navbarFnt" href="#">Contact Us</a>
                            <a class="nav-link navbarFnt" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </section>
    <!-- Navbar ends -->

    <!-- Main Body -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 landingPageTxt" style="color:black;">
                    <p>Find out how easy it is to find a roommate.</p>
                </div>
                <div class="col-md-6 landingPageImg">
                    <img src="./images/LandingPageImage.png" alt="Image"/>
                </div>
                <div class="text-center">
                    <a href="./register.html">
                        <button type="button"class="btn btn-outline landingPageRegisterBtn">
                        Sign Up Now !!
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Login Page -->
    <section>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required/>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>
    </section>
    <!-- Login Page Ends-->


    <!-- Main Body ends -->


    <!-- My Script -->
    <script src="./js/index.js"></script>
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>
