<?php
// Enqueue Splide JS
global $scripts;
$scripts['splide'] = '/dist/inc/splide.min.js';

$gallery_groups = array(
  array(
    'title' => 'Consultation Plan Images',
    'desc' => '',
    'images' => array(
      "Draft Aerial View of Site" => "dist/img/pdf/Draft-Aerial-View-of-Site.png",
      "Draft Cable Route Plan" => "dist/img/pdf/Draft-Cable-Route-Plan.jpg",
      "Draft Main Site Plan" => "dist/img/pdf/Draf-Main-Site-Plan.jpg",
      "LowCarbon map" => "dist/img/pdf/LowCarbon_map.png",

    )
  ),
);
if (!empty($gallery_groups)) :
  $i = 1;
  foreach ($gallery_groups as $gallery_group) {
    include("inc/modal-templates/gallery.php");
    $i++;
  }
endif;