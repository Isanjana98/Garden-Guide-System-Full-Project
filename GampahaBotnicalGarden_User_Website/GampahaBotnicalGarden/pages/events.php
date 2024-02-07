<?php
$eventsTable = new Table('events');
$events = $eventsTable->findInDatabase('event_archived', 'false');

$title = "Gampaha Botanical Garden - Events";
$content = loadTemplate('../templates/events_template.php', ['events' => $events]);
