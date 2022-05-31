var pano = document.getElementById("pano");
//var firstModal = $('#modal-start'); // Comment in if you want an opening modal
const dataModalGroups = ['modal-open', 'modal-important']; // Declares a const array for modal groups; we want '.modal-open' as a fallback. We also add '.modal-important' for important content

var activeModal = '',
  previousModal = '';

/**
 * Hooks for Magnific popup plugin.
 * Activated on Open and Change
 */
function modalChangeEvents(modalObject = null, prevModalObject = null) {

  if (prevModalObject) {
    // Stop video from playing
    if ($(prevModalObject).hasClass('modal-video')) {
      stopVideo(prevModalObject);
    }
    markLinkVisited(prevModalObject);
  }

  if (modalObject) {
    if ($(modalObject).hasClass('modal-compare')) {
      var imageCompareItem = $(modalObject).find('.image-compare');
      $(function () {
        imageCompareItem.twentytwenty();
      });
    }
    else if ($(modalObject).hasClass('modal-video')) {
      var videoButton = $(modalObject).find('button.play'),
      videoWrapper = videoButton.closest('.video-wrapper'),
        iframeElement = videoWrapper.find('iframe'),
        modal = videoButton.closest('.modal');
      playVideo(videoWrapper, iframeElement, videoButton, modal);
    }
    else if ($(modalObject).hasClass('modal-timeline')) {
      var timelineNav = $(modalObject).find('.timeline-nav');
      var stickybit = stickybits(timelineNav); // Init on Timeline Nav
    }
    else if ($(modalObject).hasClass('modal-gallery')) {
      var slider = $(modalObject).find('.splide');
      // Only init if not already
      if (!slider.hasClass('is-initialized')) {
        new Splide(slider[0], {
          //arrows: false,
          type: 'loop',
          autoplay: true
        }).mount();
      }
    }
  }
}

$(document).ready(function () {
  var environmentData = window.APP_DATA;

  // Initialize the first magnificPopup
  if(typeof firstModal !== 'undefined') {
    $.magnificPopup.open({
      items: {
          src: firstModal
        },
        type: 'inline',
        showCloseBtn: false,
        closeOnBgClick: false,
        enableEscapeKey: false,
        removalDelay: 400, // Delay in milliseconds before popup is removed
        mainClass: 'modal-fade', // Class to apply to this popup
      callbacks: {
        open: function (item) {
          $('body').addClass('modal-visible');
          },
        close: function (item) {
          $('body').removeClass('modal-visible');
            modalChangeEvents(null,this.content);
            // Opens sidebar if window wider than 800
            if ($(window).width() > (800)) {
              toggleSidebar('open','sidebar-information');
            }
          }
        }
    });
  }
  else {
   if ($(window).width() > (800)) {
      toggleSidebar('open','sidebar-information');
   }
  }

  // Loop through scenes and hotspots and push unique modal groups to array
  environmentData.scenes.map(function (sceneData) {
    sceneData.modalHotspots.map(function (hotspotsData) {
      if (hotspotsData.modal_group) {
        // Prevent dupes...
        if (dataModalGroups.indexOf(hotspotsData.modal_group) === -1) {
          dataModalGroups.push(hotspotsData.modal_group);
        }
      }
    });
  });

  // Loop each group and initialize magnificPopup
  dataModalGroups.forEach(function (item, index) {
    $('.' + item).magnificPopup({
      type: 'inline',
      closeBtnInside: false,
      gallery:{
        enabled:true,
      },
      removalDelay: 400, // Delay in milliseconds before popup is removed
      mainClass: 'modal-fade', // Class to apply to this popup
      callbacks: {
        open: function (item) {
          $('body').addClass('modal-visible');
          },
        close: function (item) {
          $('body').removeClass('modal-visible');
          modalChangeEvents(null,this.content);
        },
        // Hook into change event
        change: function (item) {
          previousModal = activeModal;
          activeModal = this.content;
          modalChangeEvents(activeModal,previousModal);
        }
      }
    });
  });

});

// Function to hide the preloader when the first scene is loaded
function hidePreloader() {
  var preloader = $('#preloader');
  var preloaderFadeOutTime = 500;

  if(!preloader.hasClass('loaded')) {
    // Only run this once by setting a .loaded class on the preloader
    preloader.fadeOut(preloaderFadeOutTime);
    preloader.addClass('loaded');
    $('body').addClass('loaded');
  };
};

// Run the hidePreloader function when the first scene is loaded
marzipano_viewer.stage().addEventListener('renderComplete', function(eventName, complete) {
  if(eventName) {
    hidePreloader();
  }
});

/**
 * This function takes the ID of an anchor element, and adds a class of 'user-viewed' to it.
 * This is used by the modal(change) event to mark links in the TOC as 'user-viewed'
 */
 function markLinkVisited(closedModal) {
   try {
     var modalId = closedModal.attr('id');
     $('a[href$="#' + modalId + '"]').addClass('user-viewed');
     closedModal.addClass('user-viewed');
   // var visitedLinkElement = document.getElementById(modalId);
   // visitedLinkElement.classList.add('opened');
  }catch(e){}
 }

/**
 * Click to get pitch and yaw
 * @link https://groups.google.com/forum/#!topic/marzipano/P3OWr0lkE0I
 */

function scene_debug() {
  pano.addEventListener("click", function (e) {
    var view = marzipano_viewer.view();
    var loc  = view.screenToCoordinates({x : e.clientX, y: e.clientY});
    var position = { yaw: loc.yaw, pitch: loc.pitch};
    console.log(view.screenToCoordinates({x : e.clientX, y: e.clientY}));
  });
};

// Closes modals on click
function closeModal() {
  $.magnificPopup.close();
}

/**
 * Toggles active class on hotspot when hovered
 */
$(document).on('mouseenter touchstart mouseleave touchend', '.hotspot', function () {
  $(this).toggleClass("active");
});

/**
 * Allows jumping between scenes if you add class .scene-link to an anchor
 */
$(document).on("click touch", ".scene-link", function (e) {
  e.preventDefault();
  var scene = $(this).data('scene');
  var lookat = $(this).data('lookat');
  switchMarzipanoScene(findMarzipanoScene(scene),lookat);
});
