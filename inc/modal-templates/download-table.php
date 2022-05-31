<div id="modal-downloads-<?= $i; ?>" class="modal modal-downloads modal-small">
  <?php if ($download_group['title']) echo '<h3>' . $download_group['title'] . '</h3>'; ?>
  <?php if ($download_group['desc']) echo '<p>' . $download_group['desc'] . '</p>'; ?>
  <table class="is-hoverable downloads">
    <thead>
      <tr>
        <th class="hide-below-md"></th>
        <th>Title</th>
        <th>Size</th>
        <th>Type</th>
        <th class="hide-below-md"></th>
      </tr>
    </thead>
    <tbody>
      <?php
      foreach ($download_group['downloads'] as $file) {
        if (!strpos($file['file'], '//')) :
          $file_size = filesize($file['file']);
          $file_size = epls_human_filesize($file_size);
          $file_ext = pathinfo($file['file'])['extension'];
        else :
          // External files...
          $file_size = 'unknown';
          $file_ext = 'unknown';
        endif;
        echo '
        <tr>
          <td class="hide-below-md download-thumb">
            <a href="' . $file['file'] .  $packageVersion . '"  download title="' . $file['title'] . '" aria-hidden="true" tabindex="-1">
              <figure><img src="' . $file['thumbnail'] . $packageVersion . '" alt="' . $file['title'] . '"></figure>
            </a>
          </td>
          <td><a href="' . $file['file'] . $packageVersion . '" download title="' . $file['title'] . '">' . $file['title'] . '</a></td>
          <td>' . $file_size . '</td>
          <td>' . $file_ext . '</td>
          <td class="hide-below-md">
            <a class="button outline small" href="' . $file['file'] .  $packageVersion . '" download title="' . $file['title'] . '" aria-hidden="true" tabindex="-1">Download</a>
          </td>
        </tr>
        ';
      }
      ?>
    </tbody>
  </table>
  <p>To view the Preliminary Environmental Information Report click here: <a target="_blank" href="https://www.dropbox.com/sh/6uoaacw0wlt1kk7/AACKueNzbPA4v2Wu_Wox7uwva?dl=0">PEIR download folder</a> </p>
</div>
