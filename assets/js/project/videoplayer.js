/**
 * Function to play youTube embedded video
 */

function playVimeoVideo() {
  event.target.play();
  //vimeoPlayer.play();
}
function stopVideo(videoContainer) {
  // When a modal with class modal-video is closed, stop autoplay
  var iframe = videoContainer.find('iframe');
  if (iframe) {
    var src = iframe.prop("src");
    src = src.replace("&autoplay=1", "");
    iframe.prop("src", src);
  }
};

function playVideo(videoWrapper, iFrameObject, buttonObject, modalObject) {

  if ($('body').hasClass('phone')) {
    return; // Dont go any further...
  }
  if (!$(modalObject).hasClass('has-played')) {
    modalObject.addClass('has-played');

    //console.log(videoWrapper, iFrameObject, buttonObject);

    videoWrapper.addClass('playing'); // Fades out the overlay

    if (buttonObject.hasClass('platform-vimeo')) {
      if (typeof iFrameObject.attr('src') === 'undefined') {
        iFrameObject.attr('src', buttonObject.data('src')); // Insert the src from the button's data-attr
        var vimeoPlayer = new Vimeo.Player(iFrameObject); // Create Vimeo Player
        vimeoPlayer.on('loaded', playVimeoVideo); // Play when loaded
      } else {
        // If the video already has a src, play it
        var vimeoPlayer = new Vimeo.Player(iFrameObject);
        playVimeoVideo();
      }
      vimeoPlayer.play();
    }
    else if (buttonObject.hasClass('platform-youtube')) {
      //console.log(buttonObject);
      if (typeof iFrameObject.attr('src') === 'undefined') {
        iFrameObject.attr('src', buttonObject.data('embed')); // Insert the embed src from the button's data-attr
        iFrameElem = iFrameObject[0]; // Convert to vanilla JS element or the API breaks
        var youTubePlayer = new YT.Player(iFrameElem, {
          // Use the YouTube API to create a new player
          events: {
            //"onReady": playYouTubeVideo,
            //"onError": function (e) {
            //  console.log(e);
            //}
          },
        });

        // Fallback if the API doesn't work
        if (typeof youTubePlayer.playVideo === 'undefined') {
          youTubePlayer = iFrameObject;
          iFrameObject.attr('src', iFrameObject.attr('src').replace('autoplay=0', 'autoplay=1'));
        }
      }
      else {
        // If the video already has a src, play it
        var youTubePlayer = new YT.Player(iFrameObject);
        playYouTubeVideo;
      }
    }
  }
}

(function ($) {
  $(document).on('click touch', '.video-wrapper', function () {
    var videoWrapper = $(this),
        videoButton = videoWrapper.find('button.play'),
        iframeElement = videoWrapper.find('iframe'),
        modal = videoWrapper.closest('.modal');

    if ($('body').hasClass('phone')) {
      window.open(videoButton.data('src'));
      return; // Dont go any further...
    }
    playVideo(videoWrapper, iframeElement, videoButton,modal);
    return;
  });
})(jQuery);
