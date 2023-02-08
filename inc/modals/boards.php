<?php
$boards = array(
  array(
    "file-name" => "LowCarbon_banners_1",
    "title" => "Welcome"
  ),
  array(
    "file-name" => "LowCarbon_banners_2",
    "title" => "Site Location"
  ),
  array(
    "file-name" => "LowCarbon_banners_3",
    "title" => "Site Design Evolution"
  ),
  array(
    "file-name" => "LowCarbon_banners_4",
    "title" => "Preferred Design"
  ),
  array(
    "file-name" => "LowCarbon_banners_5",
    "title" => "Technical assessments"
  ),
  array(
    "file-name" => "LowCarbon_banners_6",
    "title" => "Landscape and visual assessment"
  ),
  array(
    "file-name" => "LowCarbon_banners_7",
    "title" => "Frequently asked questions"
  ),
  array(
    "file-name" => "LowCarbon_banners_8",
    "title" => "Construction, operation and decommissioning"
  ),
  array(
    "file-name" => "LowCarbon_banners_9",
    "title" => "Community Considerations"
  ),
  array(
    "file-name" => "LowCarbon_banners_10",
    "title" => "Consultation process and next steps"
  ),
);

if (!empty($boards)) :
  $i = 1;
  foreach ($boards as $board) {
    include("inc/modal-templates/board.php");
    $i++;
  }
endif;