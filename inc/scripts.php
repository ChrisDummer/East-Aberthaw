<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!-- jQuery from CDN -->
<script src="dist/js/vendor.min.js<?= $packageVersion; ?>"></script>
<script src="dist/js/environment.min.js<?= $packageVersion; ?>"></script>
<?php // Project does not like to be minified
echo '<script type="text/javascript" src="dist/js/project.js' . $packageVersion . '"></script>';
?>
<?php
// Enqueue scripts added to the scripts array
foreach ($scripts as $scriptId => $scriptUrl) {
  echo '<script id="' . $scriptId . '" src="' . $scriptUrl . $packageVersion . '"></script>';
}
?>
<script defer data-config="klaroConfig" type="application/javascript" src="dist/inc/klaro.js">
</script>
