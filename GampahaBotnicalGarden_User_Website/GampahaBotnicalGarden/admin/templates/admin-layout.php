<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php echo $title ?></title>

  <!-- Custom fonts for this template-->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">
  <link href="../css/custom.css" rel="stylesheet">
  <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary pt-3 sidebar sidebar-dark accordion" id="accordionSidebar" style="background-image: none; background-color: black;">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex mb-4 align-items-center justify-content-center" href="admin-home">
        <!-- <div class="sidebar-brand-icon rotate-n-15"> -->
        <div class="sidebar-brand-icon">
          <!-- <i class="fas fa-laugh-wink"></i> -->
          <!-- <img src="../img/zoolg.png\" alt="" style="width: 95px; border-radius: 20%"> -->
        </div>
        <div class="sidebar-brand-text mx-3">Admin   </div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="admin-home">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      

      

      <?php if ($_SESSION['role'] == "admin") { ?>
        
        

        
        

        

        <!-- Vacancy Heading -->
        <div class="sidebar-heading">
          Vacancy
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVacancy">
            <i class="fas fa-fw fa-bullhorn"></i>
            <span>Vacancies</span>
          </a>
          <div id="collapseVacancy" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="save_vacancy">Add Vacancy</a>
              <a class="collapse-item" href="view_vacancies">View Active Vacancies</a>
              <a class="collapse-item" href="view_applications">View Applications</a>
            </div>
          </div>
        </li>

        <!-- Employee -->
        <div class="sidebar-heading">
          Employee
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEmployee">
            <i class="fas fa-fw fa-users"></i>
            <span>Employees</span>
          </a>
          <div id="collapseEmployee" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="view_employees">View Employees</a>
              <a class="collapse-item" href="view_employees?archived=true">View Archived Employees</a>
            </div>
          </div>
        </li>

        <!-- Visitor -->
        <div class="sidebar-heading">
          Visitor
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVisitor">
            <i class="fas fa-fw fa-address-card"></i>
            <span>Visitors</span>
          </a>
          <div id="collapseVisitor" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="view_visitors">View Visitor Accounts</a>
              <a class="collapse-item" href="view_visitors?archived=true">View Archived Visitors</a>
            </div>
          </div>
        </li>

        <!-- Feedback -->
        <div class="sidebar-heading">
          Herberium Requests
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFeedback">
            <i class="fas fa-fw fa-comment-alt"></i>
            <span>Herberium Requests </span>
          </a>
          <div id="collapseFeedback" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="view_feedback">View Unreviewed Requests</a>
              <a class="collapse-item" href="view_feedback?reviewed=true">View Reviewed Requests</a>
            </div>
          </div>
        </li>

        <!-- gallery -->
        <div class="sidebar-heading">
          Gallery
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGallery">
            <i class="fas fa-fw fa-images"></i>
            <span>Gallery</span>
          </a>
          <div id="collapseGallery" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="gallery">Update Gallery Content</a>
            </div>
          </div>
        </li>

        <!-- Tickets -->
        <div class="sidebar-heading">
          Ticket
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTicket">
            <i class="fas fa-fw fa-ticket-alt"></i>
            <span>Tickets</span>
          </a>
          <div id="collapseTicket" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="tickets">View Booked Tickets</a>
            </div>
          </div>
        </li>

        <!-- Tickets -->
        <div class="sidebar-heading">
         Our Researchers 
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSponsor">
            <i class="fas fa-fw fa-list-alt"></i>
            <span>Our Researchers</span>
          </a>
          <div id="collapseSponsor" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="view_sponsor_registrations">View  Our Researchers </a>
              <!-- <a class="collapse-item" href="sponsor_animal_requests">Sponsor Animal Requests</a> -->
            </div>
          </div>
        </li>

        <!-- Admin-->
        <div class="sidebar-heading">
          Admin
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAdmin">
            <i class="fas fa-fw fa-users-cog"></i>
            <span>Accounts</span>
          </a>
          <div id="collapseAdmin" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="save_account">Add Account</a>
              <a class="collapse-item" href="view_accounts?type=admin">View Admins</a>
              
              <a class="collapse-item" href="view_archived_accounts">View Archived Accounts</a>
            </div>
          </div>
        </li>

        <!-- Events -->
        <div class="sidebar-heading">
          Event
        </div>

        <!-- Vacancy collapse menu-->
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEvent">
            <i class="fas fa-fw fa-calendar-alt"></i>
            <span>Events</span>
          </a>
          <div id="collapseEvent" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="save_event">Add Event</a>
              <a class="collapse-item" href="view_events">View Events</a>
              <a class="collapse-item" href="view_events?archived=true">View Archived Events</a>
            
          </div>
        </li>

      <?php } ?>
      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->


          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Alerts -->


            <!-- Nav Item - Messages -->


            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?= $_SESSION['admin_name'] ?></span>
                <img class="img-profile rounded-circle" src="../../img/user-avatar.png">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <?php echo $content ?>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>&copy; <?php echo date('Y')?> - Henarathgoda Botanical Garden </span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-danger" href="logout">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- <script src="../vendor/bootstrap/js/bootstrap.js"></script> -->

  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="../vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="../js/demo/chart-area-demo.js"></script>
  <script src="../js/demo/chart-pie-demo.js"></script>
</body>

</html>