<?php

/**
 * See https://github.com/serbanghita/Mobile-Detect/issues/845 and many more issues on Github.
 * Safari on iOS masquerades as a desktop since 2019 and there is nothing to be done about it.
 * This snippet will check the user agent and if it is macintosh will set devicetype to phone to
 * force the degraded version to load.
 */
if (!function_exists('epls_get_device')) :
  function epls_get_device()
  {
    $deviceDetect = new Mobile_Detect;
    $deviceType = ($deviceDetect->isMobile() ? ($deviceDetect->isTablet() ? 'tablet' : 'phone') : 'computer');

    // Force tablets to be phones
    if ($deviceType == 'computer') {
      if (strpos($_SERVER['HTTP_USER_AGENT'], "Macintosh") > 0 && strpos($_SERVER['HTTP_USER_AGENT'], "Version") > 0) {
        // This is either an iPad or Safari on MacOS so set deviceType to mobile
        $deviceType = 'phone';
      }
    } elseif ($deviceType == 'tablet') {
      $deviceType = 'phone';
    }

    return $deviceType;
  }
endif;

if (!function_exists('epls_get_version')) :
  function epls_get_version()
  {
    $content = file_get_contents('package.json');
    $content = json_decode($content, true);
    $version = '?v=' . $content['version'];
    return $version;
  }
endif;

/**
 * Adds a function to display SVGs from the spritesheet.
 */
if (!function_exists('epls_icon')) :
  function epls_icon($icon, $classes = NULL)
  {
    // Define SVG sprite file.
    $icon_path = 'dist/icons/' . $icon . '.svg';

    // Pass optional classes
    $class = 'icon';
    if ($classes) {
      $class .= " " . $classes;
    }

    // If it exists, include it.
    if (file_exists($icon_path)) {
      $use_link = 'dist/icons/icons.svg#icon-' . $icon;
      return '<svg class="' . $class . '"><use xlink:href="' . $use_link . '" /></svg>';
    } else {
      return '';
    }
  }
endif;

/**
 * Determines the platform of a video by analysing the URL
 */
if (!function_exists('epls_get_video_platform')) :
  function epls_get_video_platform($video_url)
  {
    $platform = false;
    if (strpos($video_url, 'vimeo.com') !== false) {
      $platform = 'vimeo';
    } elseif (
      strpos($video_url, 'youtube.com') !== false ||
      strpos($video_url, 'youtu.be' !== false) ||
      strpos($video_url, 'youtube-nocookie.com' !== false)
    ) {
      $platform = 'youtube';
    }
    return $platform;
  }
endif;

/**
 * Prepares and displays an oembed video with play button
 */
if (!function_exists('epls_embed_video')) :
  function epls_embed_video($video_url, $aspect_ratio = '16x9')
  {

    global $deviceType; // Get from global scope
    global $scripts;

    $platform = epls_get_video_platform($video_url); // Finds the platform from the URL
    $oembed_url = $video_url;

    if ($platform === 'vimeo') {

      if (preg_match('%^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$%im', $oembed_url, $match)) {
        // Strip out the video ID
        $video_id = $match[3];
      }

      $vimeo_data = unserialize(file_get_contents("https://vimeo.com/api/v2/video/$video_id.php")); // Use Vimeo API to get video information
      $video_thumbnail_lq = $vimeo_data[0]['thumbnail_medium']; // Get a mid res thumbnail
      $video_thumbnail_hq = $vimeo_data[0]['thumbnail_large']; // Get a high res thumbnail

      // Vimeo params
      $params = array(
        'byline'        => 0,
        'portrait'      => 0,
        'title'         => 0,
        'autoplay'      => 1,
        'color'         => '#ff0000'
      );
      $oembed_url = str_replace('vimeo.com/', 'player.vimeo.com/video/', $oembed_url); // Add /video to allow embed
      $oembed_url .= '?' . http_build_query($params);

      if ($deviceType != 'phone') $scripts['vimeo'] = 'https://player.vimeo.com/api/player.js'; // Enqueue script

    } elseif ($platform === 'youtube') {
      if (preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/\s]{11})%i', $oembed_url, $match)) {
        // Strip out the video ID
        $video_id = $match[1];
      }

      // TODO: Add option for thumbnail override as a function arg?
      $video_thumbnail_lq = 'https://i.ytimg.com/vi/' . $video_id . '/mqdefault.jpg'; // Get a mid res thumbnail
      $video_thumbnail_hq = 'https://i.ytimg.com/vi/' . $video_id . '/maxresdefault.jpg'; // Get a high res thumbnail

      $page_url = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];

      // YouTube params
      $params = array(
        'rel'            => 0,
        'autoplay'       => 0,
        'color'          => 'white',
        'modestbranding' => 1,
        'enablejsapi'    => 1,
        'controls'       => 1,
        'version'        => 3,
        'origin'         => $page_url
      );
      $oembed_url = str_replace(array('youtube.com', 'youtu.be'), "youtube-nocookie.com", $oembed_url); // Use No Cookie version of YouTube
      $oembed_url = str_replace('/watch?v=', '/embed/', $oembed_url); // Replace /watch with /embed
      $oembed_url .= '?' . http_build_query($params);

      if ($deviceType != 'phone') $scripts['youtube'] = 'https://www.youtube.com/iframe_api'; // Enqueue script

    }
    if ($platform) { ?>
      <div class="video-wrapper">
        <div class="video-overlay has-bg-img" style="background-image:url('<?= $video_thumbnail_lq; ?>')" data-bg-img="<?= $video_thumbnail_hq; ?>">
          <button class="play platform-<?= $platform; ?>" data-src="<?= $video_url; ?>" data-embed="<?= $oembed_url; ?>" title="Play Video"><?= epls_icon('play'); ?></button>
        </div>
        <div class="embed-container ratio-<?= $aspect_ratio; ?>">
          <?php if ($deviceType != 'phone') : ?>
            <iframe width="640" height="390" type="text/html" allow="autoplay; encrypted-media" allowfullscreen title="Embedded Video"></iframe>
          <?php endif; ?>
        </div>
      </div>
<?php } // if ( $platform )
  }
endif;

if (!function_exists('epls_human_filesize')) :
  function epls_human_filesize($bytes, $decimals = 2)
  {
    $sz = 'BKMGTP';
    $factor = floor((strlen($bytes) - 1) / 3);
    $output = sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor] . 'b';

    return $output;
  }
endif;

if (!function_exists('timeline_get_class')) :
  function timeline_get_class($date)
  {
    $current_datetime = new DateTime();
    $current_datetime = $current_datetime->getTimestamp();
    $one_week = 604800;

    $phase_datetime = strtotime($date);
    // Colour Coding
    if ($phase_datetime <= ($current_datetime - ($one_week * 4))) {
      $class = 'complete';
    } elseif ($phase_datetime >= ($current_datetime + ($one_week * 4))) {
      $class = 'upcoming';
    } else {
      $class = 'in-progress';
    }
    return $class;
  };
endif;
