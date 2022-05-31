<div id="modal-gallery-<?= $i; ?>" class="modal modal-gallery">
  <?php if ($gallery_group['title']) echo '<h3>' . $gallery_group['title'] . '</h3>'; ?>
  <?php if ($gallery_group['desc']) echo '<p>' . $gallery_group['desc'] . '</p>'; ?>
  <div class="splide slider has-inner-arrows">
    <div class="splide__track">
      <ul class="splide__list">
        <?php
        foreach ($gallery_group['images'] as $img_title => $image_filepath) { ?>
          <li class="splide__slide">
            <figure>
              <img src="<?= $image_filepath . $packageVersion; ?>" alt="<?= $img_title; ?>">
              <figcaption><?= $img_title; ?></figcaption>
              <a class="button mt-1 small primary text-white" href="<?= $image_filepath . $packageVersion; ?>" download="" title="<?= $img_title; ?>">Download the Image<svg class="icon">
                  <use xlink:href="dist/icons/icons.svg#icon-download"></use>
                </svg></a>
            </figure>
          </li>
        <?php }; ?>
      </ul>
    </div>
  </div>
</div>
