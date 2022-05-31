<?php
$boards = array(
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-1",
    "title" => "Project Overview"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-2",
    "title" => "Site Selection and context"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-3",
    "title" => "The EIA Process"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-4",
    "title" => "Ecology"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-5",
    "title" => "Noise and Vibration"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-6",
    "title" => "Glint and glare"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-7",
    "title" => "Construction"
  ),
  array(
    "file-name" => "22-22126-Oaklands-Farm-panel-8",
    "title" => "Social Considerations"
  ),
);

if (!empty($boards)) :
  $i = 1;
  foreach ($boards as $board) {
    include("inc/modal-templates/board.php");
    $i++;
  }
endif;
