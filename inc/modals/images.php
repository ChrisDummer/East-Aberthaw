<?php
$images = array(
  "Example Image" => "dist/img/modal/example.jpg",
  "Kitten" => "https://placekitten.com/600/300",
);
if (!empty($images)) :
  $i = 1;
  foreach ($images as $img_title => $img_filepath) {
    include("inc/modal-templates/image.php");
    $i++;
  }
endif;
