<?php
// Enqueue Splide JS
global $scripts;
$scripts['splide'] = '/dist/inc/splide.min.js';

$gallery_groups = array(
  array(
    'title' => 'Consultation Plan Images',
    'desc' => '',
    'images' => array(
      "Layout Plan" => "dist/img/pdf/Layout-Plan.jpg",
      "Preferred site design (Spring 2023)" => "dist/img/pdf/opp-and-con-plan.jpeg",
      "Site Location Plan including indicative cable route" => "dist/img/pdf/site-plan.jpeg",

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
