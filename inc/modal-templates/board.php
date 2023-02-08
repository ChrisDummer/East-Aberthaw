<div id="modal-board-<?= $i; ?>" class="modal modal-board modal-small modal-image">
  <a href="dist/pdf/<?= $board['file-name']; ?>.pdf<?= $packageVersion; ?>" download title="<?= $board['title']; ?>"
    aria-hidden="true" tabindex="-1">
    <img class="modal-image" src="dist/img/pdf/<?= $board['file-name']; ?>.png<?= $packageVersion; ?>"
      alt="<?= $board['title']; ?>">
    <a class="button small" href="dist/pdf/<?= $board['file-name']; ?>.pdf<?= $packageVersion; ?>" download
      title="<?= $board['title']; ?>">Download the PDF<?= epls_icon('download'); ?></a>
  </a>
</div>