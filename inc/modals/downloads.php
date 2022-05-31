<?php
$download_groups = array(
  array(
    'title' => 'Literature stand',
    'desc' => 'You can download consultation literature here.',
    'downloads' => array(
      array(
        "title" => "Consultation Summary",
        "thumbnail" => "dist/img/pdf/Summary_Document.jpeg",
        "file" => "dist/pdf/Summary_Document.pdf",
      ),
      array(
        "title" => "Feedback Form",
        "thumbnail" => "dist/img/pdf/Feedback-form.jpeg",
        "file" => "dist/pdf/feedback-form.pdf", // External URL example
      ),
      array(
        "title" => "Spring 2022 Newsletter",
        "thumbnail" => "dist/img/pdf/Solar-Spring-Newsletter.jpeg",
        "file" => "dist/pdf/Solar-Spring-Newsletter.pdf",
      ),
      array(
        "title" => "Statement of Community Consultation",
        "thumbnail" => "dist/img/pdf/Statement-of-Community.jpeg",
        "file" => "dist/pdf/Statement-of-Community.pdf",
      ),
      array(
        "title" => "Section 48 notice",
        "thumbnail" => "dist/img/pdf/Section-48.jpeg",
        "file" => "dist/pdf/Section-48.pdf",
      ),
      array(
        "title" => "Section 47 advert",
        "thumbnail" => "dist/img/pdf/Section-47.jpeg",
        "file" => "dist/pdf/Section-47.pdf",
      ),
      array(
        "title" => "FAQs",
        "thumbnail" => "dist/img/pdf/FAQ_Document.jpeg",
        "file" => "dist/pdf/FAQ_Document.pdf",
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
