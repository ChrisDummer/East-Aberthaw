<?php
require_once "inc/Mobile_Detect.php";
include_once("inc/functions.php");
$packageVersion = epls_get_version();
$deviceType = epls_get_device();
$scripts = [];

//$GoogleAnalyticsID = 'UA-188327436-1';
//$GoogleFonts = 'https://fonts.googleapis.com/css?family=Roboto+Condensed';

// TODO: Change these vars for your project
$title = 'Consultation website for Low Carbon';
$desc = 'A virtual consultation showing ';
$url = 'https://epls.design';
$client_name = 'Oaklands Solar Farm';
$client_slug = 'low-carbon-logo'; // This should be the name of the logo file eg. epls

?>
<!DOCTYPE html>
<html lang="en" dir="ltr" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="utf-8">
  <title><?= $title; ?></title>
  <meta name="description" content="<?= $desc; ?>">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <?php // TODO: Set make sure you replace these for your project by visiting https://realfavicongenerator.net/ and replacing the below assets / code
  ?>
  <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/dist/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/dist/favicon/favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="/dist/favicon/safari-pinned-tab.svg" color="#ffea3d">
  <link rel="shortcut icon" href="/dist/favicon/favicon.ico">
  <meta name="msapplication-TileColor" content="#ffc40d">
  <meta name="msapplication-config" content="browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?= $url; ?>">
  <meta property="og:title" content="<?= $title; ?>">
  <meta property="og:description" content="<?= $desc; ?>">
  <meta property="og:image" content="/dist/img/social-image.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="<?= $url; ?>">
  <meta property="twitter:title" content="<?= $title; ?>">
  <meta property="twitter:description" content="<?= $desc; ?>">
  <meta property="twitter:image" content="/dist/img/social-image.png">

  <script type="text/javascript">
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "b9mpnygghr");
  </script>

  <?php
  if ($GoogleAnalyticsID) :
  ?>
    <!-- Global site tag (gtag.js) - Google Analytics - loaded in on consent from Klaro -->
    <script type="text/plain" data-type="application/javascript" data-name="googleAnalytics" async src="https://www.googletagmanager.com/gtag/js?id=<?= $GoogleAnalyticsID; ?>"></script>
    <script type="text/plain" data-type="application/javascript" data-name="googleAnalytics">
      window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '<?= $GoogleAnalyticsID; ?>');
  </script>
  <?php endif;

  if ($GoogleFonts) : ?>
    <link data-name="googleFonts" rel="preconnect" href="https://fonts.gstatic.com">
    <link data-name="googleFonts" data-href="<?= $GoogleFonts; ?>" rel="stylesheet">
  <?php endif; ?>

  <link rel="stylesheet" href="dist/css/style.min.css<?= $packageVersion; ?>" media="all">

  <!-- SVG4Everybody Polyfill -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js?ver=5.8.1' id='svg4everybody-js'></script>
  <script id='svg4everybody-js-after'>
    svg4everybody();
  </script>

</head>

<body class="<?= $deviceType; ?>">

  <?php
  // If the user is on an old browser, show a message and don't run the presentation
  if (preg_match('~MSIE|Internet Explorer~i', $_SERVER['HTTP_USER_AGENT']) || (strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/7.0; rv:11.0') !== false) || (strpos($_SERVER['HTTP_USER_AGENT'], 'Edge') !== false)) : ?>

    <div class="container" style="padding-top: 40px;color:white;">
      <div class="row">
        <div class="col">
          <h1 style="font-size: 1.8em;color:red;font-weight:bold;">Your Browser is out of date</h1>
          <p>We have detected that you are browsing from Internet Explorer; a web browser which is no longer compatible with much of the modern web. This website, like many others, relies on new and modern technologies to display interactive and dynamic content. It is unable to run on Internet Explorer and legacy versions of Edge as the technologies required are not supported.</p>
          <p>We kindly ask that you <a href="https://browser-update.org/update.html" rel="nofollow">update your web browser</a> or visit from another browser (Chrome, Edge, Safari, Opera, Firefox) or device (eg. a tablet or mobile phone).
          <p>Thank you.</p>
        </div>
      </div>
    </div>

  <?php else : ?>
    <?php
    $pre_scene_includes = array(
      'preloader.php',
      'header.php'
    );
    foreach ($pre_scene_includes as $file) {
      $filepath = 'inc/partials/' . $file;
      if (file_exists($filepath)) include_once($filepath);
    }
    ?>

    <div id="main">
      <header class="project-information screen-reader-text">
        <h1>Welcome to the <span class="projectName">Virtual Consultation</span></h1>
        <h2 class="sceneName"></h2>
      </header>
      <?php // TODO: Insert Screen reader help
      ?>
      <div id="pano"></div><!-- Initialise the scene -->
      <?php if (file_exists('inc/partials/sidebar.php')) include_once('inc/partials/sidebar.php'); ?>
    </div>

    <div class="elements">
      <?php
      $scene_includes = array(
        'modals/start.php',
        'modals/boards.php',
        'modals/images.php',
        'modals/downloads.php',
        'modals/contact.php',
        'modals/faqs.php',
        'modals/image-compares.php',
        'modals/videos.php',
        'modals/maps.php',
        'modals/events.php',
        'modals/timeline.php',
        'modals/overlays.php',
        'modals/galleries.php',
      );
      foreach ($scene_includes as $file) {
        $filepath = 'inc/' . $file;
        if (file_exists($filepath)) include_once($filepath);
      }
      ?>

    </div>

    <?php
    $after_scene_includes = array(
      'inc/partials/view-controls.php',
      'inc/scripts.php'
    );
    foreach ($after_scene_includes as $file) {
      if (file_exists($file)) include_once($file);
    }
    ?>

  <?php endif; ?>
</body>

</html>
