<?php

/**
 * TODO: ViewControl buttons are not working on keyboard input.
 * This appears to be a known issue https://github.com/google/marzipano/issues/413
 * https://github.com/google/marzipano/issues/11
 *
 * TODO: It would look nicer on a desktop if these were in the sidebar widget ul
 */

?>

<nav class="viewControlButtons">
  <ul>
    <li class="autorotate-toggle"><a title="Autoplay On/Off" href="javascript:void(0)" id="autorotateToggle" class="viewControlButton">
        <?= epls_icon('autoplay', 'off'); ?>
        <?= epls_icon('autoplay-pause', 'on'); ?>
      </a></li>
    <li class="control-toggle"> <a title="Scroll Left" href="javascript:void(0)" id="viewLeft" class="viewControlButton">
        <?= epls_icon('arrow-left'); ?>
      </a></li>
    <li class="control-toggle"><a title="Scroll Right" href="javascript:void(0)" id="viewRight" class="viewControlButton">
        <?= epls_icon('arrow-right'); ?>
      </a></li>
    <li class="control-toggle"><a title="Zoom In" href="javascript:void(0)" id="viewIn" class="viewControlButton">
        <?= epls_icon('plus'); ?>
      </a></li>
    <li class="control-toggle">
      <a title="Zoom Out" href="javascript:void(0)" id="viewOut" class="viewControlButton">
        <?= epls_icon('minus'); ?>
      </a>
    </li class="control-toggle">
    <li class="gyro-toggle">
      <a title="Change Device Control Method" href="javascript:void(0)" id="toggleDeviceOrientation" class="viewControlButton touchenabled">
        <?= epls_icon('gyro', 'enablegyro'); ?>
        <?= epls_icon('swipe', 'enableswipe'); ?>
      </a>
    </li>
    <li class="fullscreen-toggle">
      <a title="Fullscreen On/Off" href="javascript:void(0)" id="fullscreenToggle" class="viewControlButton">
        <?= epls_icon('fullscreen', 'off'); ?>
        <?= epls_icon('windowed', 'on'); ?>
      </a>
    </li>
  </ul>
</nav>
