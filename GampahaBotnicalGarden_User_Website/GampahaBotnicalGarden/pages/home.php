<!-- <?php

$sponsorTable = new Table('sponsors');
$getSponsorName = function ($sponsorId) {
    global $sponsorTable;
    $sponsorQ = $sponsorTable->findInDatabase('sponsor_id', $sponsorId);
    $sponsor = $sponsorQ->fetch();
    return $sponsor['s_client_name'];
};
$testimonials = $pdo->prepare("SELECT * FROM testimonials ORDER BY posted_date DESC LIMIT 3");
$testimonials->execute();

$title = "Gampaha Botanical Garden - Homepage";
$content = loadTemplate('../templates/home_template.php', [
    'currAnimal' => $currAnimal, 'getImageName' => $getImageName,
    'testimonials'=>$testimonials, 'getSponsorName' => $getSponsorName
]);
