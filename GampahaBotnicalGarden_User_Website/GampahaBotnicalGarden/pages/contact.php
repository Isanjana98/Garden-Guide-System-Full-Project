<?php
if (isset($_POST['submit'])) {
    unset($_POST['submit']);
    $feedbackTable = new Table('feedback');
    $_POST['visitor_id'] = $_SESSION['visitor_id'];
    $feedbackTable->insertInDatabase($_POST);
    header('Location:contact?msg=Your Booking Appoitment is successfully we will contact as soon as possible');
}
$title = "Gampaha Botanical Garden - Contact Us";
$content = loadTemplate('../templates/contact_template.php', []);
