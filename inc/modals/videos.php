<?php
$videos = array(
  "Example Video from Youtube" => "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  "Example Video from Vimeo" => "https://player.vimeo.com/video/592468585",
);

if (!empty($videos)) :
  $i = 1;
  foreach ($videos as $video_title => $video_url) {
    include("inc/modal-templates/video.php");
    $i++;
  }
endif;
