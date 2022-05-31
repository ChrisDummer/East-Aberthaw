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
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg?v=REPLACEWITHCURRENTBUILDVERSION", {
        cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg?v=REPLACEWITHCURRENTBUILDVERSION"
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
