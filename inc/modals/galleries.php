<?php
// Enqueue Splide JS
global $scripts;
$scripts['splide'] = '/dist/inc/splide.min.js';

$gallery_groups = array(
  array(
    'title' => 'Consultation Plan Images',
    //'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.',
    'images' => array(
      "Location plan" => "dist/img/pdf/Site_Location.jpg",
      "Site Layout plan" => "dist/img/pdf/Site_Layout.jpg",
      "Viewpoint 1" => "dist/img/pdf/Virtual-Exhibition-1.jpg",
      "Viewpoint 2" => "dist/img/pdf/Virtual-Exhibition-2.jpg",
      "Viewpoint 3" => "dist/img/pdf/Virtual-Exhibition-3.jpg",

    )
  ),
  array(
    'title' => 'Gallery Two',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.',
    'images' => array(
      "Puppies!" => "https://place-puppy.com/600x300",
      "Bearded Man" => "https://placebeard.it//600/300"
    )
  )
);
if (!empty($gallery_groups)) :
  $i = 1;
  foreach ($gallery_groups as $gallery_group) {
    include("inc/modal-templates/gallery.php");
    $i++;
  }
endif;
