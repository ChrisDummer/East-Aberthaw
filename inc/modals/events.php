<?php
$event_groups = array(
  array(
    'title' => 'Events',
    'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nisl nec pulvinar pellentesque. Curabitur non venenatis neque. Vestibulum et justo sit amet libero feugiat vehicula. Suspendisse cursus eros ante, ac placerat purus cursus in. Sed nunc mi, tempus eu dui nec, volutpat dapibus urna. Aliquam congue, leo id gravida pellentesque, eros nunc rutrum sem, ultricies pulvinar justo nunc a ipsum. Vivamus pretium pharetra ultrices. Vestibulum non mi ac urna dictum iaculis. Mauris eget mi eu diam pharetra pretium. Integer dapibus tristique velit eget ornare.',
    'events' => array(
      array(
        "date"        => "May 10, 2021 06:00 PM",
        "title"       => "Former Quinta Club Virtual Presentation 2",
        "zoom-link"   => "https://zoom.us/j/91019390537?pwd=aUY0NkZOOVlBQ0lDK3VkWnlJNWxhQT09",
        "zoom-creds"  => 'Meeting ID: 910 1939 0537 | Passcode: 932756',
        "ical-file"   => "dist/ical/hendon-hub-may-10.ics"
      ),
      array(
        "date"        => "May 11, 2021 06:00 PM",
        "title"       => "Osidge Lane Virtual Presentation 2",
        "zoom-link"   => "https://zoom.us/j/93030102367?pwd=Q0pZb0tad0V1T1ZEQlBUTnJZOWZ3QT09",
        "zoom-creds"  => 'Meeting ID: 930 3010 2367 | Passcode: 484172',
        "ical-file"   => "dist/ical/hendon-hub-may-11.ics"
      ),
      array(
        "date"        => "May 13, 2022 06:00 PM",
        "title"       => "Hendon Hub - Virtual Presentation 3",
        "zoom-link"   => "https://zoom.us/j/92490922234?pwd=NXhzeWJaT2gvbWdtWXpkc1BNZWNwQT09",
        "zoom-creds"  => 'Meeting ID: 924 9092 2234 | Passcode: 022775',
        "ical-file"   => "dist/ical/hendon-hub-may-13.ics"
      ),
      array(
        "date"        => "May 20, 2022 06:00 PM",
        "title"       => "Hendon Hub - Virtual Presentation 4",
        "zoom-link"   => "https://zoom.us/j/92193195489?pwd=enJodEppb0x4THAvZHF6NmpGWHp1Zz09",
        "zoom-creds"  => 'Meeting ID: 921 9319 5489 | Passcode: 473960',
        "ical-file"   => "dist/ical/hendon-hub-may-20.ics"
      )
    )
  ),
);

if (!empty($event_groups)) :
  $i = 1;
  foreach ($event_groups as $event_group) {
    include("inc/modal-templates/event-group.php");
    $i++;
  }
endif;
