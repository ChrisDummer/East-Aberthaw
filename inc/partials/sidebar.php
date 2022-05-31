<?php
$sidebar_sections = [
  'information' => [
    'icon' => 'info-circle',
    'title' => 'Website information'
  ],
  'help' => [
    'icon' => 'help',
    'title' => 'Help'
  ],
  'feedback' => [
    'icon' => 'form',
    'title' => 'Share your feedback'
  ],
  'accessibility' => [
    'icon' => 'accessibility',
    'title' => 'Accessibility'
  ]
];
?>

<aside class="sidebar">
  <nav class="sidebar-nav">
    <ul>
      <?php
      // Set up the tabs
      foreach ($sidebar_sections as $section => $detail) {
        echo '<li><a href="javascript:void(0);" title="' . $detail['title'] . '" class="widget-icon tab" aria-expanded="false" aria-label="' . $detail['title'] . '" aria-controls="sidebar-' . $section . '">' . epls_icon($detail['icon']) . '</a></li>';
      }; ?>
      <li><a href="javascript:toggleSidebar('close');" title="Close Sidebar" class="widget-icon sidebar-close" style="display:none;"><?= epls_icon('close'); ?></a></li>
      <li class="epls-link">
        <?php $slug = str_replace(' ', '-', strtolower($client_name)); ?>
        <a href="https://epls.design/?utm_source=client&utm_medium=virtual-environment&utm_campaign=<?= $slug; ?>" rel="author" title="EPLS Design - Winchester based full service agency" target="_blank">
          <img src="../../dist/img/branding/epls-design-digital.svg" alt="Virtual event and consultation solutions by EPLS Design. Print, Design, Creative, Branding and Digital. Winchester based full service agency. Copyright EPLS <?= date('Y'); ?>">
        </a>
      </li>
    </ul>
  </nav>
  <div class="sidebar-content">
    <?php
    // Include the partials
    foreach ($sidebar_sections as $section => $detail) {
      $filepath = 'inc/partials/sidebar/' . $section . '.php';
      if (file_exists($filepath)) {
        echo '<div class="sidebar-section" id="sidebar-' . $section . '">';
        include_once($filepath);
        echo '</div>';
      }
    }; ?>
  </div>
</aside>
