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
      "Indicative cable route" => "dist/img/pdf/Draft-Cable-Route-Plan.jpg",
      "Initial site design (June 2022)" => "dist/img/pdf/Draf-Main-Site-Plan.jpg",
      "Preferred site design (Spring 2023)" => "dist/img/pdf/LowCarbon_map.png",

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