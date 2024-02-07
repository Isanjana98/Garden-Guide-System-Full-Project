<?php
require_once '../classes/table.php';
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php echo $title ?></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="all,follow">
  <!-- Bootstrap CSS-->
  <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
  <!-- Google fonts-->
  <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"> -->
  <!-- Icon fonts-->
  <link rel="stylesheet" href="../css/pe-icon-7-stroke.css">
  <!-- Lightbox CSS-->
  <link rel="stylesheet" href="../vendor/lightbox2/css/lightbox.min.css">
  <!-- Leaflet CSS-->
  <link rel="stylesheet" href="../vendor/leaflet/leaflet.css">
  <!-- theme stylesheet-->
  <link rel="stylesheet" href="../css/style.green.css" id="theme-stylesheet">
  <!-- Custom stylesheet - for your changes-->
  <link rel="stylesheet" href="../css/custom.css">
  <!-- Favicon-->
  <link rel="shortcut icon" href="../img/favicon.png">
  
</head>

<body>
  <!-- navbar-->
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-header navbar-dark py-lg-0">
      <div class="container-fluid">
        <a href="home" class="navbar-brand font-weight-bold p-0">
          <div class="d-flex align-items-center">
            <div>
              <img src="../img/Henarathgoda.png" width="170"  style="border-radius: 100%" />
            </div>
            <div class="text-white ml-3">
              
            </div>
          </div>
        </a>
        <button type="button" id="navar-toggle-button" data-toggle="collapse" data-target="#navbarSupportedContent" class="navbar-toggler navbar-toggler-right small"><span class="text-uppercase text-white mr-2">Menu</span><i class="fas fa-bars"></i></button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto d-lg-flex align-items-lg-center">
            <li class="nav-item"><a href="home" class="nav-link font-weight-bold px-lg-3 py-lg-4">Home </a>
            </li>
            <li class="nav-item"><a href="gallery" class="nav-link font-weight-bold px-lg-3 py-lg-4">Gallery </a>
            </li>



            



            
            <?php if (!(isset($_SESSION['user_type']) && $_SESSION['user_type'] == 'sponsor')) { ?>

              <li class="nav-item"><a href="ticket_page" class="nav-link font-weight-bold px-lg-3 py-lg-4">Reservations </a>
              </li>
             
              <li class="nav-item"><a href="vacancies" class="nav-link font-weight-bold px-lg-3 py-lg-4">Vacancies </a>
              </li>
              <li class="nav-item"><a href="events" class="nav-link font-weight-bold px-lg-3 py-lg-4">Events </a>
              </li>
              <li class="nav-item"><a href="contact" class="nav-link font-weight-bold px-lg-3 py-lg-4">Contact Us </a>
              </li>
            <?php } else { 
            ?>
              <li class="nav-item"><a href="post_testimonial" class="nav-link font-weight-bold px-lg-3 py-lg-4">Add Testimonial</a>
              </li>
            <?php } ?>
            <?php if (!isset($_SESSION['authenticated'])) { ?>
              <li class="nav-item dropdown">
                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link font-weight-bold px-lg-3 py-lg-4 dropdown-toggle">Register</a>
                <div class="dropdown-menu mt-0">
                  <a href="register_visitor" class="dropdown-item small text-uppercase">Visitor Registration</a>
                  <a href="register_sponsor" class="dropdown-item small text-uppercase">Researcher Registration</a>
                </div>
              </li>
            <?php } ?>
            <?php if (!isset($_SESSION['authenticated'])) { ?>
              <li class="nav-item mt-4 mt-lg-0">
                <a type="button" href="login" class="btn btn-outline-primary nav-btn btn-sm navbar-login-button text-white"> <i class="fas fa-sign-out-alt mr-2"></i>Login </a>
              </li>
            <?php } else { ?>
              <li class="nav-item dropdown pr-2">
                <a class="nav-link dropdown-toggle font-weight-bold text-light" href="#a" data-toggle="dropdown">
                  <img src="../img/user-default-2-min.png" style="width: 35px; border-radius:50%" alt="" />
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="logout" class="dropdown-item">Logout</a>
                  <?php if ($_SESSION['user_type'] == "visitor") { ?>
                    <a href="register_visitor?visitor_id=<?= $_SESSION['visitor_id'] ?>" class="dropdown-item">Update Profile</a>
                  <?php } ?>
                  <?php if ($_SESSION['user_type'] == "sponsor") { ?>
                    <a href="register_sponsor?sponsor_id=<?= $_SESSION['sponsor_id'] ?>" class="dropdown-item">Update Profile</a>
                  <?php } ?>
                </div>
              </li>
            <?php } ?>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <?php echo $content ?>

  <footer style="background: #eee;" class="pt-5">
    <!-- before, background was #eee  -->
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 col-md-6 mb-4">
          <h5 class="lined lined-dark color-header mb-3 color-header">Open hours All Days: 8:30 am - 5:00 pm</h5>
          <p class="text-muted text-small">Gampaha Botanical Garden, also known as Henarathgoda Botanical Garden is situated in the suburb of Gampaha. It was established in 1876 by the British to conduct experiments on exotic economic plants such as Rubber, and explore plant wealth and development of the economy in the colony.  </p>
          <p class="text-muted text-small">The garden consists of a large variety of plants and many of them are from every corner of the tropical world it is expanding over 43 acres (0.17 km2).</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="lined lined-dark mb-3 color-header">Our Location</h5>
          <h6>Gampaha Botanical Garden</h6>
          <p class="text-muted mb-0 text-small">112 Gampaha Fly Over</p>
          <p class="text-muted mb-0 text-small">Gampaha</p>
          <p class="text-muted mb-4 text-small">Mobile 0332 222 316</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="lined lined-dark mb-3 color-header">We Offer You</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="footer-link text-small">Booking Tickets</a></li>
            <li><a href="#" class="footer-link text-small">Vacancies</a></li>
            <li><a href="#" class="footer-link text-small">Event Details</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="lined lined-dark mb-3 color-header">Connect with us</h5>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#" class="social-link facebook-logo"><i class="fab fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link googleplus-logo"><i class="fab fa-google-plus-g"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link twitter-logo"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link mail-logo"><i class="fas fa-envelope"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="lined lined-dark mb-3 color-header">Herbarium Appointment</h5>
          <p class="text-muted mb-4 text-large"> <b>You can Book an Appoitment using the form in Contact Us page.</b>
          </p>
        </div>
      </div>
    </div>
    <div class="bg-header py-2 text-center text-white">
      <p class="p-0 m-0">&copy; <?php echo date('Y')?> - Gampaha Botanical Garden </p>
    </div>
  </footer>
  
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../vendor/lightbox2/js/lightbox.min.js"></script>
  <script src="../vendor/leaflet/leaflet.js"></script>
  <script src="../js/front.js"></script>
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</body>

</html>