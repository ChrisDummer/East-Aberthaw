<?php
$overlays = array(
  array(
    'title' => 'Pikachu',
    'slug' => 'pikachu',
    'url' => 'https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif',
  ),
  array(
    'title' => 'Charmander',
    'slug' => 'charmander',
    'url' => 'https://static.wikia.nocookie.net/pokemeow-community/images/9/9a/Uncommon_Charmander.gif',
  ),
  array(
    'title' => 'Waving Character',
    'slug' => 'character',
    'url' => '/dist/img/waving-character.gif',
  )
);

if (!empty($overlays)) :
  foreach ($overlays as $overlay) {
    include("inc/modal-templates/overlay.php");
  }
endif;
