<?php
require_once '../db/db_connect.php';


$galleryImage = $pdo->prepare('SELECT * FROM gallery WHERE g_file_type=:g_file_type AND g_archived=:g_archived');
$galleryImage->execute(['g_file_type' => 'image', 'g_archived' => 'false']);


$galleryVideo = $pdo->prepare('SELECT * FROM gallery WHERE g_file_type=:g_file_type AND g_archived=:g_archived');
$galleryVideo->execute(['g_file_type' => 'video', 'g_archived' => 'false']);

$title = "Gampaha Botanical Garden - Gallery";
$content = loadTemplate('../templates/gallery_template.php', ['galleryImage' => $galleryImage, 'galleryVideo' => $galleryVideo]);
