<section style="background: url(../img/HomeCover.jpg)" class="py-5 bg-cover bg-center">
    <div class="hero-overlay"></div>
    <div class="container py-5 px-0 text-white text-left">
        <h1 class="text-shadow hero-heading font-weight-normal">Henarathgoda Botanic Gardens</h1>
        <p class="text-shadow font-weight-light mt-3 mb-4" style="width: 60%">
        Henarathgoda Botanic Gardens,Gampaha was established in 1876 for the introduction of rubber to Sri Lanka and possess an array of botanical and horticultural attractions with a rich history. It is situated in Gampaha with a total extent of 17.4 ha. This garden consists of important plant collections of about 2000 species of Sri Lanka and other countries.
        </p>
    </div>
</section>
<!-- welcome to Henarathgoda Botnical Garden -->
<section class="pb-2 pt-5">
    <div class="container-fluid p-5 pb-2">
        <div class="row px-2">
            <div class="col-lg-6 col-sm-12">
                <h2>Welcome to <span class="font-weight-bold text-light-green">Gampaha Botnical Garden</span></h2>
                <div style="width: 8%">

                    <hr style="border-top: 10px solid #489A33;">
                </div>
                <p class="lead text-secondary">The garden is located about 450 meters from the Gampaha railway station on the Gampaha-Minuwangoda main road. The distance from Colombo to the garden is about 30 km. The garden is located at about 33 feet above sea level and has a tropical lowland climate. The garden covers a total area of 17.4 ha..</p>
                <p class="text-small text-secondary">Henarathgoda Botanic Gardens, was established in 1876 for introduction of rubber to Sri Lanka and possess an array of botanical and horticultural attractions with a rich history.The old Henarathgoda Railway Station, which is still preserved as an archeological site of historical significance, can still be seen today.This station was created at that time to accommodate foreign scientists coming by train for rubber research..</p>
                <a href="gallery" class="btn btn-primary btn-sm" style="border-radius: 50px;">View Gallery</a>
            </div>
            <div class="col-lg-6 col-sm-12 mt-sm-4">
                <div class="row">
                    <div class="col">
                        <img src="../img/Ground.jpg" alt="" class="img-fluid mb-4" width="500px">
                        <h4 class="h5 mb-2">We Provide Ground Facilities</h4>
                        <p class="text-small text-muted"><b>If you'd like to plan a Match Picnic or utilize any other facilities we offer on our grounds, you'll need to book the ground in advance. You can contact us for reservations.</b></p>
                    </div>
                    <div class="col">
                        <img src="../img/Boat Ride.jpg" alt="" class="img-fluid mb-4" width="500px">
                        <h4 class="h5 mb-2">Boat Ride</h4>
                        <p class="text-small text-muted"><b>We provide boat rides for our clients, and you can enjoy our garden. Additionally, you can choose from various types of boat rides.</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="p-3" style="background-color: #489A33">
    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <h3 class="text-center font-weight-bold text-white">Our Researcher</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <?php foreach ($testimonials as $testimonial) { ?>
                <div class="col-lg-4 col-sm-10 text-center mb-sm-4">
                    <div class="">
                        <img src="../img/gr8.png" alt="" width="195px" style="border-radius: 50%; border: 10px solid #3E7331">
                    </div>
                    <h5 class="text-white mt-2"><?= $getSponsorName($testimonial['sponsor_id']) ?></h5>
                    <p class="" style="color: #ebe1e1"><?= $testimonial['test_message'] ?></p>
                </div>
            <?php  } ?>
            
        </div>
    </div>
</section>




<section class="bg-gray py-5">
    <div class="container-fluid py-5">
        <div class="row">
            <div class="col">
                <h2 class="mb-5 lined ml-5">Map of Botanical Garden</h2>
                <div class="row">
                    <div class="col-xs-10 col-lg-6">
                        <img src="../img/Map02.jpeg" alt="" width="90%">
                    </div>
                    <div class="col-xs-10 col-lg-6 mt-xs-3 mt-3">
                        <img src="../img/Map01.jpeg" alt="" width="80%">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>