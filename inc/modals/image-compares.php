<?php
// Enqueue viewer script
global $scripts;
$scripts['twentytwenty'] = '/dist/inc/twentytwenty.min.js';

$image_comparisons = array(
  array(
    'dark_handle' => false,
    'title' => 'Lorem ipsum dolor sit amet',
    'description' => 'Steven Seagal',
    'before_img' => 'https://stevensegallery.com/600/300',
    'before_alt' => 'Colour',
    'after_img' => 'https://www.placecage.com/600/300',
    'after_alt' => 'Nicholas Cage'
  ),
  array(
    'dark_handle' => true,
    'title' => 'Lorem ipsum dolor sit amet',
    'description' => 'Bear vs Kitten',
    'before_img' => 'https://placebear.com/600/300',
    'before_alt' => 'Bear',
    'after_img' => 'https://placekitten.com/600/300',
    'after_alt' => 'Kitten'
  )
);

if (!empty($image_comparisons)) :
  $i = 1;
  foreach ($image_comparisons as $image_set) {
    include("inc/modal-templates/image-comparison.php");
    $i++;
  }
endif;
