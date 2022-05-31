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
