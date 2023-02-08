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
      array(
        "title" => "Local Community Newsletter – February 2023",
        "thumbnail" => "dist/img/pdf/LowCarbon_newsletter_final.jpeg",
        "file" => "dist/pdf/LowCarbon_newsletter_final.pdf", // External URL example
      ),
      array(
        "title" => "Viewpoint 1 – Year 1",
        "thumbnail" => "dist/img/download/view-1-year-1.jpeg",
        "file" => "dist/img/pdf/view-1-year-1.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 1 – Year 15",
        "thumbnail" => "dist/img/download/view-1-year-15.jpeg",
        "file" => "dist/img/pdf/view-1-year-15.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 2 – Year 1",
        "thumbnail" => "dist/img/download/view-2-year-1.jpeg",
        "file" => "dist/img/pdf/view-2-year-1.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 2 – Year 15",
        "thumbnail" => "dist/img/download/view-2-year-15.jpeg",
        "file" => "dist/img/pdf/view-2-year-15.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 6 – Year 1",
        "thumbnail" => "dist/img/download/view-6-year-1.jpeg",
        "file" => "dist/img/pdf/view-6-year-1.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 6 – Year 15",
        "thumbnail" => "dist/img/download/view-6-year-5.jpeg",
        "file" => "dist/img/pdf/view-6-year-5.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 17 – Year 1",
        "thumbnail" => "dist/img/download/view-17-year-1.jpeg",
        "file" => "dist/img/pdf/view-17-year-1.jpeg", // External URL example
      ),
      array(
        "title" => "Viewpoint 17 – Year 1",
        "thumbnail" => "dist/img/download/view-17-year-15.jpeg",
        "file" => "dist/img/pdf/view-17-year-15.jpeg", // External URL example
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