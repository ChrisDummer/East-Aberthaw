<?php
// Enqueue Splide JS
global $scripts;
$scripts['splide'] = '/dist/inc/splide.min.js';

$gallery_groups = array(
  array(
    'title' => 'Consultation Plan Images',
    'desc' => '',
    'images' => array(
      "Layout Plan" => "dist/img/pdf/layout-plan.jpeg",
      "Master Plan" => "dist/img/pdf/master-plan.jpeg",
      "Opportunities and Constraints Plan" => "dist/img/pdf/opp-and-con-plan.jpeg",
      "Site Location Plan" => "dist/img/pdf/site-plan.jpeg",

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