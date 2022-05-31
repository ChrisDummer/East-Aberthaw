<div id="modal-map-<?= $i; ?>" class="modal modal-map">
  <?php if ($map['title']) echo '<h3>' . $map['title'] . '</h3>'; ?>
  <?php if ($map['desc']) echo '<p>' . $map['desc'] . '</p>'; ?>
  <div class="embed-container">
    <iframe width="1280" height="700" src="<?= $map['map_url']; ?>" width="1280" height="700" style="border:0" title="<?= $map['title']; ?>"></iframe>
  </div>
</div>
