// Note: These should match the values set in scss. Currently it is a manual process to keep them in sync
var breakPoints = {
  navBar: 900,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1800,
};

/*! jellyfish-ui 3.3.0
 * © 2022-01 Matt Weet - https://www.mattweet.com */

function jfSetCookie(name,value,days){var expires;if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires=";expires="+date.toUTCString()}else expires="";document.cookie=name+"="+encodeURIComponent(value)+expires+";path=/"}function jfGetCookie(cookiename){for(var name=cookiename+"=",ca=decodeURIComponent(document.cookie).split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(name))return c.substring(name.length,c.length)}return""}function jfDestroyCookie(name){document.cookie=name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}function jfdebug(){document.getElementsByTagName("body")[0].classList.toggle("jf-debug")}function jfLazyLoadBackgroundImage(element){var bgImage=element.getAttribute("data-bg-img");element.style.backgroundImage="url("+bgImage+")",element.removeAttribute("data-bg-img")}!function($){$("button.font-size").click(function(){$(this).hasClass("font-size-sm")?($(document.body).removeClass("font-size-md font-size-lg").addClass("font-size-sm"),$("button.font-size").removeClass("active"),$(this).addClass("active"),jfSetCookie("fontsize","sm")):$(this).hasClass("font-size-md")?($(document.body).removeClass("font-size-sm font-size-lg").addClass("font-size-md"),$("button.font-size").removeClass("active"),$(this).addClass("active"),jfSetCookie("fontsize","md")):$(this).hasClass("font-size-lg")&&($(document.body).removeClass("font-size-sm font-size-md").addClass("font-size-lg"),$("button.font-size").removeClass("active"),$(this).addClass("active"),jfSetCookie("fontsize","lg"))}),$("button.toggle-contrast").click(function(){$(this).hasClass("active")?($(document.body).removeClass("dark-ui"),$(this).removeClass("active"),jfSetCookie("ui-mode","light")):($(document.body).addClass("dark-ui"),$(this).addClass("active"),jfSetCookie("ui-mode","dark"))}),$(document).ready(function($){switch(jfGetCookie("fontsize")){case"sm":$(document.body).removeClass("font-size-md font-size-lg").addClass("font-size-sm"),$("button.font-size").removeClass("active"),$("button.font-size-sm").addClass("active");break;case"md":$(document.body).removeClass("font-size-sm font-size-lg").addClass("font-size-md"),$("button.font-size").removeClass("active"),$("button.font-size-md").addClass("active");break;case"lg":$(document.body).removeClass("font-size-md font-size-md").addClass("font-size-lg"),$("button.font-size").removeClass("active"),$("button.font-size-lg").addClass("active")}switch(jfGetCookie("ui-mode")){case"dark":$(document.body).addClass("dark-ui"),$("button.toggle-contrast").addClass("active")}})}(jQuery),function($){$('a[href^="mailto:"]').click(function(){if("undefined"!=typeof gtag)return gtag("event","contact",{event_category:"Email Enquiry",event_action:"Mailto Click",event_label:$(this).attr("href")}),!0}),$('a[href^="tel:"]').click(function(){if("undefined"!=typeof gtag)return gtag("event","contact",{event_category:"Telephone Enquiry",event_action:"Tel Link Click",event_label:$(this).attr("href")}),!0}),$('a[href$=".pdf"]').click(function(){if("undefined"!=typeof gtag)return gtag("event","contact",{event_category:"PDF Download",event_action:"Download",event_label:$(this).attr("href")}),!0}),$("a:not([href*='"+document.domain+"'],[href*='mailto'],[href*='tel'],a[href$='.pdf'])").click(function(event){if("undefined"!=typeof gtag&&"#"!=$(this).attr("href").charAt(0)&&!$(this).attr("href").startsWith("javascript"))return gtag("event","contact",{event_category:"External Link",event_action:"Link Click",event_label:$(this).attr("href")}),!0})}(jQuery),document.addEventListener("DOMContentLoaded",function(){var lazyBackgroundElements=[].slice.call(document.querySelectorAll(".has-bg-img"));if("IntersectionObserver"in window){let lazyBackgroundObserver=new IntersectionObserver(function(entries,observer){entries.forEach(function(entry){entry.isIntersecting&&(jfLazyLoadBackgroundImage(entry.target),lazyBackgroundObserver.unobserve(entry.target))})},{rootMargin:"0px 0px 300px 0px"});lazyBackgroundElements.forEach(function(lazyBackground){lazyBackgroundObserver.observe(lazyBackground)})}else lazyBackgroundElements.forEach(function(lazyBackground){jfLazyLoadBackgroundImage(lazyBackground)})}),function($){$(".navbar .hamburger").on("click touch",function(e){var $navbar=$(this).parents(".navbar"),$navmenu=$navbar.find(".navbar-menu"),$navbarHamburgers=$navbar.find(".hamburger");$navmenu.length&&($navmenu.hasClass("is-off-canvas")?($navmenu.hasClass("is-active")&&($navmenu.addClass("closing"),setTimeout(function(){$navmenu.removeClass("closing")},550)),$("body").toggleClass("has-active-nav")):$navmenu.slideToggle(),$navmenu.toggleClass("is-active"),$navbarHamburgers.length&&($navmenu.hasClass("is-off-canvas")&&$navbarHamburgers.first().toggle(),$navbarHamburgers.each(function(){"true"===$(this).attr("aria-expanded")?($(this).attr("aria-expanded","false"),$(this).removeClass("is-active")):($(this).attr("aria-expanded","true"),$(this).addClass("is-active"))})))}),$(document).on("click",'li.has-children > a:not(".clicked"), li.menu-item-has-children > a:not(".clicked")',function(e){$(window).width()<breakPoints.navBar&&($(this).addClass("clicked"),e.preventDefault(),$(this).parent("li").toggleClass("drop-active").attr("aria-expanded","true"))})}(jQuery);
function sendCurrentSceneToGA(action = 'Scene Enter') {
  //console.log(action, currentSceneId);

  // Send into GA as an event
  if (typeof gtag !== 'undefined') {
    gtag("event", "scene-change", {
      event_category: "Scene Navigation",
      event_action: action,
      event_label: currentSceneId,
    });
    return true;
  }

}

/**
 * Whenever the scene is changed send to GA as an event
 */
$(document).ready(function () {
  viewer.addEventListener('sceneChange', () => {
    sendCurrentSceneToGA('Scene Enter');
  });
});

/**
 * Send current scene to GA on document close
 */
 window.onunload = e => {
  sendCurrentSceneToGA('Website Exit');
 // debugger;
};

// @link https://github.com/kiprotect/klaro/blob/master/dist/config.js
var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  //styling: {
  //    theme: ['light', 'top', 'wide'],
  //},
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  //cookieDomain: '.github.com',
  //cookiePath: '/',
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  //disablePoweredBy: true,
  //additionalClass: 'my-klaro',
  //lang: 'en',
  translations: {
    en: {
    cloudflare: {
        description: 'Protection against DDoS attacks',
    },
    googleFonts: {
        description: 'Web fonts hosted by Google.',
      },
      googleAnalytics: {
        description: 'Collecting anonymous usage data to improve the content served on this website.',
    },
    }
    },
  // This is a list of third-party services that Klaro will manage for you.
  services: [
    {
      name: 'googleFonts',
      title: 'Google Fonts',
      purposes: ['styling'],
    },
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      optOut: false,
      onlyOnce: true,
    },
    //{
    //  name: 'cloudflare',
    //  title: 'Cloudflare',
    //  purposes: ['security'],
    //  required: true,
    //  default: true,
    //},

],
};

// TODO: See how Embedded YouTube works @link https://www.fabian-keller.de/blog/integrate-klaro-consent-management/

/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Hoist to the document so they can be called outside of the self invoking function
var switchMarzipanoScene;
var findMarzipanoScene;
var viewer;

(function () {

  // Set up variables for Marzipano
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA; // reads data.js

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('.sceneName');
  var projectNameElement = document.querySelector('.projectName');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  /**********************************
   *
   * Desktop / Mobile Detection
   *
   **********************************/

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  /**********************************
   *
   * Marzipano Setup
   *
   **********************************/

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  viewer = new Marzipano.Viewer(panoElement, viewerOpts);
  var restrictPitch = data.settings.restrictPitch;

  // Create scenes by looping through JSON map.
  var scenes = data.scenes.map(function (data) {
    var urlPrefix = "dist/img/tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg?v=1.2.9", {
        cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg?v=1.2.9"
      });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    // Allows us to restrict pitch in the settings (prevent up and down movement)
    if (restrictPitch) {
      var limitPitch = Marzipano.RectilinearView.limit.pitch(0, 0); // Limits pitch to prevent the viewer scrolling up and down
      var limitTraditional = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
      var limiter = Marzipano.util.compose(limitPitch, limitTraditional);
    } else {
      // Standard full 360 mode
      var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    }
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function (hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, {
        yaw: hotspot.yaw,
        pitch: hotspot.pitch
      });
    });

    // Create modal hotspots.
    data.modalHotspots.forEach(function (hotspot) {
      var element = createInteractionElement(hotspot);
      scene.hotspotContainer().createHotspot(element, {
        yaw: hotspot.yaw,
        pitch: hotspot.pitch
      }); // element needs to be the ID
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function (hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, {
        yaw: hotspot.yaw,
        pitch: hotspot.pitch
      });
    });

    // Create Overlays.
    data.overlays.forEach(function (overlay) {
      var element = document.getElementById(overlay.id);
      if (element) {
        $(element).css({
          "width": overlay.width,
          "height": overlay.height
        });
        scene.hotspotContainer().createHotspot(element, {
          yaw: overlay.yaw,
          pitch: overlay.pitch
        }, {
          perspective: {
            radius: overlay.distance,
            extraTransforms: overlay.extraTransforms
          }
        });
      }
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Add class to body if control buttons enabled
  if (data.settings.viewControlButtons) {
    document.body.classList.add('control-buttons-enabled');
  };

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });

  if (data.settings.autorotateEnabled) {
    document.body.classList.add('autorotate-enabled');
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle if setting enabled.
  if (data.settings.viewControlButtons) {
    autorotateToggleElement.addEventListener('click', toggleAutorotate);
  }

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set variables for viewControls if enabled.
  if (data.settings.viewControlButtons) {
    var viewLeftElement = document.querySelector('#viewLeft');
    var viewRightElement = document.querySelector('#viewRight');
    var viewInElement = document.querySelector('#viewIn');
    var viewOutElement = document.querySelector('#viewOut');
    // Dynamic parameters for controls.
    var velocity = 0.7;
    var friction = 3;
  }

  // Register the custom control method for DeviceOrientationControl
  var deviceOrientationControlMethod = new DeviceOrientationControlMethod();

  // Associate view controls with elements.
  var controls = viewer.controls();

  // Attach viewControl buttons to viewer.controls if enabled.
  if (data.settings.viewControlButtons) {
    controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
    controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
    controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
    controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);
  }

  // Attach deviceOrientation method to viewer.controls.
  controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

  // Set up control for enabling/disabling device orientation
  var deviceOrientationEnabled = false;
  var toggleOrientationElement = document.getElementById('toggleDeviceOrientation');

  /**********************************
   *
   * Gryoscope controls for smart devices
   *
   **********************************/

   // Function to request permission to use gyros on iOS 13+
   function requestPermissionForIOS() {
    window.DeviceOrientationEvent.requestPermission().then(function (response) {
      if (response === 'granted') {
        var currentScene = findSceneById(window.currentSceneId); // Pass the current scene ID

        enableDeviceOrientation(currentScene); // Run the enable function
      }
    }).catch(function (e) {
      console.error(e);
    });
  }

  // Function to enable Gyro controls on the device
  function enableDeviceOrientation(scene) {
    deviceOrientationControlMethod.getPitch(function (err, pitch) {
      if (!err) {
        scene.view.setPitch(pitch);
      }
    });
    controls.enableMethod('deviceOrientation'); // Enable this control method
    deviceOrientationEnabled = true;
    if (toggleOrientationElement.classList.contains('touchenabled')) {
      // Update classes on toggle button
      toggleOrientationElement.classList.remove('touchenabled');
      toggleOrientationElement.classList.add('gyroenabled');
    }
  }

  // Function to check if device is iOS and run the appropriate function
  function enableAugmentedMode() {
    if (window.DeviceOrientationEvent) {
      if (typeof (window.DeviceOrientationEvent.requestPermission) == 'function') {
        requestPermissionForIOS();
      } else {
        var currentScene = findSceneById(window.currentSceneId); // Pass the current scene ID
        enableDeviceOrientation(currentScene);
      }
    }
  }

  // Function to disable Gyro controls
  function disableAugmentedMode() {
    controls.disableMethod('deviceOrientation'); // Disable control method
    deviceOrientationEnabled = false;
    if (toggleOrientationElement.classList.contains('gyroenabled')) {
      // Update classes on toggle button
      toggleOrientationElement.classList.remove('gyroenabled');
      toggleOrientationElement.classList.add('touchenabled');
    }
  }

  // Function to toggle between control methods.
  function toggleInteractionMethod() {
    if (deviceOrientationEnabled) {
      disableAugmentedMode();
    } else {
      enableAugmentedMode();
    }
  }

  // Bind function to toggle button.
  toggleOrientationElement.addEventListener('click', toggleInteractionMethod);

  /**********************************
   *
   * Marzipano Helper Functions
   *
   **********************************/

  // Sanitize text
  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  // Switch scenes, run functions appropriately
  function switchScene(scene, lookat='') {
    window.currentSceneId = scene.data.id; // Set ID ref of new scene to global variable
    stopAutorotate();

    // If lookat is current, pass the user's current viewpoint to the scene else reset to default
    // @link https://github.com/google/marzipano/issues/229
    let viewParams;
    if (lookat === 'current') {
      viewParams = window.marzipano_viewer.view().parameters();
     // console.log('currentView');
    }
    else if (lookat === undefined || lookat === '0' || lookat === '') {
      //console.log('undefined');
      viewParams = scene.data.initialViewParameters ;
    }
    else {
      // Pass coords eg. {pitch: 0, yaw: -1.5138299475206516}
      viewParams = lookat;
     // console.log(lookat);
    }

    scene.view.setParameters(viewParams); // TODO: On scene-links this doesn't seem to work?
    //scene.view.setParameters(viewer.view() && viewer.view().parameters() || scene.data.initialViewParameters);

    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    //enableDeviceOrientation(scene); // Comment in to enable gyro control by default
  }
  switchMarzipanoScene = switchScene;

  // Update scene name within HTML element
  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
    window.marzipano_viewer = viewer;
  }

  // Update project name within HTML element
  function updateProjectName() {
    projectNameElement.innerHTML = sanitize(data.name);
  }

  // Start autorotate
  function startAutorotate() {
    if (data.settings.autorotateEnabled) {
      if (!autorotateToggleElement.classList.contains('enabled')) {
        return;
      }
      viewer.startMovement(autorotate);
      viewer.setIdleMovement(3000, autorotate);
    }
  }

  // Stop autorotate
  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  // Autorotate off/on
  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }
  findMarzipanoScene = findSceneById;

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }


  /**********************************
   *
   * Set up interactive elements
   *
   **********************************/

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Add Classes
    if (hotspot.classes) {
      wrapper.classList.add(hotspot.classes);
    }

    // Create icon element.
    var svgns = 'http://www.w3.org/2000/svg',
      xlinkns = 'http://www.w3.org/1999/xlink',
      icon = document.createElementNS(svgns, 'svg'),
      use = document.createElementNS(svgns, 'use'),
      icon_link = 'dist/icons/icons.svg#icon-navigate';

    // Add classes and attributes to icon.
    icon.classList.add('icon');
    icon.classList.add('hotspot-icon');
    use.setAttributeNS(xlinkns, 'xlink:href', icon_link);
    icon.appendChild(use);

    // Set rotation transform.
    var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function () {
      switchScene(findSceneById(hotspot.target),hotspot.lookat);
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Add Classes
    if (hotspot.classes) {
      wrapper.classList.add(hotspot.classes);
    }

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');

    // Create icon element.
    var svgns = 'http://www.w3.org/2000/svg',
      xlinkns = 'http://www.w3.org/1999/xlink',
      icon = document.createElementNS(svgns, 'svg'),
      use = document.createElementNS(svgns, 'use'),
      icon_link = 'dist/icons/icons.svg#icon-information';

    // Add classes and attributes to icon.
    icon.classList.add('icon');
    icon.classList.add('hotspot-icon');
    use.setAttributeNS(xlinkns, 'xlink:href', icon_link);

    icon.appendChild(use);
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');

    // Create icon element.
    var svgns = 'http://www.w3.org/2000/svg',
      xlinkns = 'http://www.w3.org/1999/xlink',
      closeIcon = document.createElementNS(svgns, 'svg'),
      use = document.createElementNS(svgns, 'use'),
      icon_link = 'dist/icons/icons.svg#icon-close';

    // Add classes and attributes to icon.
    closeIcon.classList.add('icon');
    closeIcon.classList.add('info-hotspot-close-icon');
    use.setAttributeNS(xlinkns, 'xlink:href', icon_link);

    closeIcon.appendChild(use);
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode. TODO: Replace with actual modal plugin rather than this native modal
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function () {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function createInteractionElement(hotspot) {

    var is_modal = hotspot.is_modal;

    // Create wrapper element to hold icon.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('modal-hotspot');

    if (hotspot.type) {
      wrapper.classList.add('is-' + hotspot.type);
    }

    // Add Classes
    if (hotspot.classes) {
      wrapper.classList.add(hotspot.classes);
    }

    // Create link element and set attributes for modal
    var anchor = document.createElement('a');
    anchor.setAttribute('href',hotspot.target);
    if (is_modal || is_modal == null) {
      if (hotspot.modal_group) {
        anchor.classList.add(hotspot.modal_group);
      }
      else {
        anchor.classList.add('modal-open');
      }
    }
    anchor.setAttribute('title', hotspot.title);

    if (data.settings.numberAsIcon == true && hotspot.number) {
      var icon = document.createElement("div");
        icon.innerHTML = hotspot.number;
        icon.classList.add("hotspot-number");
    }
    else {
    // Create icon element.
    var svgns = 'http://www.w3.org/2000/svg',
      xlinkns = 'http://www.w3.org/1999/xlink',
      icon = document.createElementNS(svgns, 'svg'),
      use = document.createElementNS(svgns, 'use'),
      icon_link = 'dist/icons/icons.svg#icon-' + hotspot.type;

      // Add classes and attributes to icon.
      icon.classList.add('icon');
      icon.classList.add('hotspot-icon');
      use.setAttributeNS(xlinkns, 'xlink:href', icon_link);

      icon.appendChild(use);

      // Create Number Element
      if(hotspot.number) {
        var tooltipNumber = document.createElement('div');
        tooltipNumber.innerHTML = hotspot.number;
        tooltipNumber.classList.add('hotspot-number');
        tooltipNumber.classList.add('is-mini');
        wrapper.appendChild(tooltipNumber);
      }

    }

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div'),
    tooltipTitle = document.createElement('div');

    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('modal-hotspot-tooltip');

    tooltipTitle.innerHTML = hotspot.title;
    tooltipTitle.classList.add('tooltip-title');
    tooltip.appendChild(tooltipTitle);

    if(hotspot.description) {
      tooltip.classList.add('has-description');
      var tooltipDescription = document.createElement('div');
      tooltipDescription.innerHTML = hotspot.description;
      tooltipDescription.classList.add('tooltip-description');
      tooltip.appendChild(tooltipDescription);
    }

    anchor.appendChild(icon);
    wrapper.appendChild(anchor);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
      'wheel', 'mousewheel'
    ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  // Display the initial scene.
  var sceneurl = window.location.hash.substr(1);
  var newscene = findSceneById(sceneurl);
  if (newscene) {
    //console.log(newscene);
    switchScene(newscene);
  } else {
    // Display the initial scene.
    switchScene(scenes[0]);
  }

  // Update project name
  updateProjectName();

})();

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

function toggleSidebar($direction = 'open',$section = null) {
  if ($direction == 'close') {
    // Hide the sidebar
    $('body').removeClass('has-active-sidebar');
    $('.sidebar').removeClass('active').addClass('closing');
    $('.sidebar-close').hide(300);
    $('.widget-icon.tab').attr("aria-expanded", "false").removeClass('active'); // Remove active from all tabs
    // Set time out because if we just use .active the sidebar is visible when we resize browser viewport
    setTimeout(function(){
      $('.sidebar').removeClass('closing');
    }, 500);
  }
  else {
    // Show the sidebar
    $('body').addClass('has-active-sidebar');
    $('.sidebar').addClass('active');
    $('.sidebar-close').show(300);
    if ($section) {
      toggleSidebarSection($section);
    }
  }
};

// TODO: Set focus in sidebar content?

function toggleSidebarSection(section_id) {
  // Find jQuery objects based on section_id passed. This will only work if it is a unique ID.
  var $tab = $('[aria-controls="' + section_id + '"'),
    $sidebarSection = $('#' + section_id);

  // Only if both exist in the DOM
  if ($tab.length == 1 && $sidebarSection.length == 1) {
    if ($tab.hasClass('active')) {
      toggleSidebar('close');
      $tab.attr("aria-expanded", "false").removeClass('active');
      $sidebarSection.removeClass('active').fadeOut(500);
    }
    else {
      toggleSidebar('open');
      $('.sidebar-section').removeClass('active').fadeOut(0);
      $sidebarSection.addClass('active').fadeIn();
      $('.widget-icon.tab').attr("aria-expanded", "false").removeClass('active');
      $tab.attr("aria-expanded", "true").addClass('active');
    }
  }
}

$(document).on("click touch", ".widget-icon.tab", function () {
  var section_id = $(this).attr("aria-controls");
  toggleSidebarSection(section_id);
});

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
