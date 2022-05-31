<?php
$maps = array(
  array(
    "title" => "Map showing location of the development",
    "desc" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "map_url" => "https://www.google.com/maps/d/u/1/embed?mid=1rFSr8oBn1zqnBCtpSZmuC27nsYsDAyqT",
  )
);

if (!empty($maps)) :
  $i = 1;
  foreach ($maps as $map) {
    include("inc/modal-templates/map.php");
    $i++;
  }
endif;
