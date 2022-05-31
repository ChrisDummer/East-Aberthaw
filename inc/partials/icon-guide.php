<h4>Guide to icons</h4>
<p>You can interact with any element with an icon. This will bring up a pop up window with more information. The key below highlights some of the icons you will encounter in this space:</p>

<?php
$icons = [
  'hotspot' => [
    'title' => 'Hotspot',
    'desc' => 'Allows you to view the indicated graphic in more detail'
  ],

  'form' => [
    'title' => 'Form',
    'desc' => 'Displays a form which you can complete to provide feedback or get in touch'
  ],
  'download' => [
    'title' => 'Downloads',
    'desc' => 'Allows you to download documents for offline reading'
  ],
  'chat' => [
    'title' => 'Contact Information',
    'desc' => 'Displays contact information'
  ],
  'image' => [
    'title' => 'Image(s)',
    'desc' => 'Displays an image gallery or single image'
  ],
];
?>

<table class="has-border">
  <thead>
    <tr>
      <th class="text-center">Icon</th>
      <th>Name / Description</th>
    </tr>
  </thead>
  <tbody class="small-text">

    <tr>
      <td class="text-center"><span class="bold">1</span></td>
      <td><strong>Display Board</strong><br>Enlarges the board to allow you to view the content. The numbers dictate our suggested reading order</td>
    </tr>
    <?php foreach ($icons as $icon => $detail) { ?>
      <tr>
        <td class="text-center"><?php echo epls_icon($icon, 'icon__inline'); ?></td>
        <td><strong><?= $detail['title']; ?></strong><br><?= $detail['desc']; ?></td>
      </tr>
    <?php }; ?>

  </tbody>
</table>
