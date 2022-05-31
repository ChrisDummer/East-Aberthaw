<?php
$currenttime = time();
$has_events = false;
?>

<div id="modal-events-<?= $i; ?>" class="modal modal-events modal-small">
  <?php if ($event_group['title']) echo '<h3>' . $event_group['title'] . '</h3>'; ?>
  <?php if ($event_group['desc']) echo '<p>' . $event_group['desc'] . '</p>'; ?>
  <?php
  foreach ($event_group['events'] as $event) {
    if (strtotime($event['date']) >= $currenttime) {
      $has_events = true;
    }
  }
  if ($has_events) { ?>
    <table class="is-hoverable">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date and Time</th>
          <th>Joining Instructions</th>
        </tr>
      </thead>
      <tbody>
        <?php
        foreach ($event_group['events'] as $event) {
          if (strtotime($event['date']) >= $currenttime) { ?>
            <tr>
              <td><?php if ($event['title']) echo '<span class="bold">' . $event['title'] . '</span>'; ?></td>
              <td>
                <?php
                if ($event['date']) echo '<p class="mb-sm">' . $event['date'] . '</p>';
                if ($event['ical-file']) echo '<a class="button xsmall outline has-icon-left hide-below-sm" href="' . $event['ical-file'] . '" title="Add to Calendar" class="ical-link no-ul">' . epls_icon('calendar', 'icon__inline') . ' Add to your calendar</a>';
                ?>
              </td>
              <td>
                <?php
                if ($event['zoom-link']) echo '<p class="small mb-sm">You will need to <a href="https://www.zoom.us" target="_blank" rel="nofollow" title="Download Zoom to join this meeting">download Zoom</a> to join this meeting.</p>';
                if ($event['zoom-link']) echo '<a class="button small" title="Join the event online via Zoom" target="_blank" rel="nofollow" href="' . $event['zoom-link'] . '">Join this event online</a>';
                ?>
              </td>
            </tr>
      <?php
          }
        };
        echo '</tbody></table>';
      } else {
        echo '<p class="bold">There are currently no scheduled upcoming events.</p>';
      }
      ?>
</div>
