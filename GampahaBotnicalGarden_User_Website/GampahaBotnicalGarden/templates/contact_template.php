<section class="py-5 bg-cover bg-gray">
    <div class="container py-5">
        <h1 class="lined">Contact And Herbarium Request Form</h1>
        <p class="lead my-4">Welcome to our Botanical Garden's Herbarium Portal, a treasure trove of botanical knowledge and preserved specimens. This digital gateway offers a unique opportunity for plant enthusiasts, researchers, and students to delve into the rich tapestry of plant life we curate and conserve.<br> <br> <b>To request a herbarium booking appointment, please fill out the form below with accurate details. Our researchers will contact you shortly.</b></p>
    </div>
</section>

<section class="py-5">
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="row">
                    <div class="col-lg-12 col-md-6 mb-4">
                        <div class="icon mb-4"><i class="pe-7s-map-2"></i></div>
                        <h5 class="lined mb-4">Address</h5>
                        <strong><p class="text-muted mb-0 text-small">Henarathgoda Botanical Garden</p>
                        <p class="text-muted mb-0 text-small"> 112,Gampaha Fly Over,</p>
                        <p class="text-muted mb-0 text-small">Gampaha,</p></strong>
                    </div>
                    <div class="col-lg-12 col-md-6 mb-4">
                        <div class="icon mb-4"><i class="pe-7s-phone"></i></div>
                        <h5 class="lined mb-4">Call center</h5>
                        <strong><p class="text-muted mb-3 text-small">We're here to assist you with any questions, concerns, or assistance you may need. For your convenience, you can easily reach our dedicated team by phone. Simply dial our main number.</p>
                        <p class="text-muted font-weight-bold">0332 222 316</p></strong>
                    </div>
                    <div class="col-lg-12 col-md-6 mb-4">
                        <div class="icon mb-4"><i class="pe-7s-mail-open"></i></div>
                        <h5 class="lined mb-4">Electronic support</h5>
                        <strong><p class="text-muted mb-3 text-small">Please feel free to write an email to us for aditional information.</p></strong>
                        <ul>
                            <li><a href="#" class="font-weight-bold text-small">henarathgodabotnicalgarden@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 ml-auto">
                <div class="col-lg-12 col-md-6 mb-4">
                    <div class="icon mb-4"><i class="pe-7s-pen"></i></div>
                    <?php
                    if (isset($_GET['msg'])) {
                        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">' . $_GET['msg'] . '
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                         </div>';
                    } ?>
                    <h5 class="lined mb-4">Herberium Appoitment</h5>
                    <p class="text-muted text-large"><b>To request a herbarium booking appointment, please fill out the form below with accurate details. Our researchers will contact you shortly. <br>Once the appointment is confirmed, we will send a confirmation email to you, which will include the time slot and other additional details</b></p>
                    <form id="contact-form" method="post" action="" class="contact-form form">
                        <div class="row">
                            <div class="form-group col-lg-6">
                                <label for="name" class="font-weight-normal">Firstname</label>
                                <input id="name" type="text" name="f_firstname" class="form-control" value="<?= isset($_SESSION['v_firstname']) ? $_SESSION['v_firstname']  : "" ?>" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="surname" class="font-weight-normal">Lastname </label>
                                <input id="surname" type="text" name="f_lastname" class="form-control" value="<?= isset($_SESSION['v_lastname']) ? $_SESSION['v_lastname']  : "" ?>" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="email" class="font-weight-normal">Email</label>
                                <input id="email" type="email" name="f_email" class="form-control" value="<?= isset($_SESSION['v_email']) ? $_SESSION['v_email']  : "" ?>" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="subject" class="font-weight-normal">Subject</label>
                                <input id="subject" type="text" name="f_subject" class="form-control" required>
                            </div>
                            <div class="form-group col-lg-12">
                                <label for="message" class="font-weight-normal">Message</label>
                                <textarea id="message" rows="4" name="f_message" class="form-control" required></textarea>
                            </div>
                            <div class="form-group col-lg-12">
                                <?php if (isset($_SESSION['authenticated'])) { ?>
                                    <button type="submit" class="btn btn-outline-primary" name="submit"> <i class="far fa-envelope mr-2"> </i>Send message</button>
                                <?php } else { ?>
                                    <button class="btn btn-outline-danger" disabled>You have to be logged in to send messages</button>
                                <?php } ?>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="container-fluid">
    <div class="row">
        <div class="col">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.206306726237!2d79.98421577470504!3d7.102072292901273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fbbd5e444be5%3A0x2bea4d46f4280c82!2sGampaha%20Botanical%20Garden!5e0!3m2!1sen!2slk!4v1693108574745!5m2!1sen!2slk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</div>
