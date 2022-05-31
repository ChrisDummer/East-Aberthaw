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
