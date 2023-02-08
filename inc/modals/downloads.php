<?php
$download_groups = array(
  array(
    'title' => 'Literature stand',
    'desc' => 'You can download consultation literature here.',
    'downloads' => array(
      array(
        "title" => "Feedback Form",
        "thumbnail" => "dist/img/pdf/LowCarbon_feedback-form.jpeg",
        "file" => "dist/pdf/LowCarbon_feedback-form.pdf", // External URL example
      ),
    )
  ),

);

if (!empty($download_groups)) :
  $i = 1;
  foreach ($download_groups as $download_group) {
    include("inc/modal-templates/download-table.php");
    $i++;
  }
endif;