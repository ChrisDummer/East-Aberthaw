<?php
// Enqueue Accordion JS
global $scripts;
$scripts['accordion'] = '/dist/inc/accordion.min.js';

$faq_groups = array(
  array(
    'title' => 'FAQs 1',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.',
    'faqs' => array(
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      ),
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      ),
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      )
    )
  ),
  array(
    'title' => 'FAQs 2',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.',
    'faqs' => array(
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      ),
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      ),
      array(
        'question' => 'Lorem ipsum dolor sit amet',
        'answer' => 'Maecenas gravida nisl nec pulvinar pellentesque.'
      )
    )
  )
);

if (!empty($faq_groups)) :
  $i = 1;
  foreach ($faq_groups as $faq_group) {
    include("inc/modal-templates/faq-group.php");
    $i++;
  }
endif;
