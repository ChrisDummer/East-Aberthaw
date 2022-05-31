<?php
$socials = array(
  "facebook" => "https://www.facebook.com/harvestersmin",
  "twitter" => "https://twitter.com/Harvestersmini1",
  "instagram" => "https://www.instagram.com/harvestersministries/",
  "youtube" => "https://www.youtube.com/channel/UCyz8qUBr4Gw2G-4cNbLQtkw",
);
?>
<div id="modal-contact" class="modal modal-contact modal-small">
  <h3>Contact Us</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.</p>

  <ul class="social-channels">
    <?php
    foreach ($socials as $social_channel => $url) {
      echo '<li class="social-icon"><a href="' . $url . '" rel="noopener" title="Follow us on ' . ucwords($social_channel) . '" target="_blank">' . epls_icon($social_channel, 'icon__' . $social_channel) . '</a></li>';
    }
    ?>
  </ul>

</div>
