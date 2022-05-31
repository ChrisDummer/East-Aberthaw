<div id="modal-compare-<?= $i; ?>" class="modal modal-compare">
  <h3><?= $image_set['title']; ?></h3>
  <p><?= $image_set['description']; ?></p>
  <div class="image-compare twentytwenty-container<?php if ($image_set['dark_handle']) echo ' has-dark-handle'; ?>">
    <img src="<?= $image_set['before_img'] . $packageVersion; ?>" alt="<?= $image_set['before_alt']; ?>">
    <img src="<?= $image_set['after_img'] . $packageVersion; ?>" alt="<?= $image_set['after_alt']; ?>">
  </div>
</div>
