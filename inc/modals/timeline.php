<?php

// Enqueue Script
global $scripts;
$scripts['stickybits'] = '/dist/inc/stickybits.min.js';

$phases = array(
  array(
    'date' => '10 December 2020',
    'title' => 'First Phase of Project',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque.',
    'image' => 'https://placekitten.com/300/300'
  ),
  array(
    'date' => '20 October 2021',
    'title' => 'Second Phase of Project',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque.',
    'image' => 'https://placekitten.com/300/300'
  ),
  array(
    'date' => '30 October 2021',
    'title' => 'Third Phase of Project',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque.',
    'image' => 'https://placekitten.com/300/300'
  ),
  array(
    'date' => '14 October 2022',
    'title' => 'Fourth Phase of Project',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque.',
    'image' => 'https://placekitten.com/300/300'
  ),
);
?>
<div id="modal-timeline" class="modal modal-timeline">
  <h3>Project Timeline</h3>
  <p>You can view the project stages below.</p>
  <article class="timeline row">
    <nav class="col md-4 hide-below-md">
      <ul class="timeline-nav">
        <?php
        $i = 1;
        foreach ($phases as $phase) {
          $class = timeline_get_class($phase['date']);
          // Remove day from date
          $formatted_date = date('F Y', strtotime($phase['date']));
        ?>
          <li class="<?= $class; ?>">
            <a href="#timeline-phase-<?= $i; ?>"><?= $formatted_date; ?><span class="title"><?= $phase['title']; ?></span></a>
          </li>
        <?php $i++;
        }; ?>
      </ul>
    </nav>
    <div class="timeline-wrapper col">

      <?php
      $i = 1;
      foreach ($phases as $phase) {
        $class = timeline_get_class($phase['date']);
        // Remove day from date
        $formatted_date = date('F Y', strtotime($phase['date']));
      ?>
        <section class="timeline-section <?= $class; ?>" id="timeline-phase-<?= $i; ?>">
          <h4 class="timeline-milestone"><?= $phase['title']; ?></h4>
          <h5 class="timeline-date"><?= $formatted_date; ?> <span class="timeline-status"><?php echo ucwords($class); ?></span></h5>
          <div class="row">
            <div class="col md-8">
              <p><?= $phase['desc']; ?></p>
            </div>
            <div class="col md-4"><img src="<?= $phase['image']; ?>" alt="<?= $phase['title']; ?>"></div>
          </div>
        </section>
      <?php $i++;
      };
      ?>
    </div>
  </article>
</div>
