<div id="modal-faqs-<?= $i; ?>" class="modal modal-faqs modal-small">
  <?php if ($faq_group['title']) echo '<h3>' . $faq_group['title'] . '</h3>'; ?>
  <?php if ($faq_group['desc']) echo '<p>' . $faq_group['desc'] . '</p>'; ?>
  <div data-aria-accordion>
    <?php
    foreach ($faq_group['faqs'] as $faq) { ?>
      <h4 data-aria-accordion-heading>
        <?= $faq['question']; ?>
      </h4>
      <div data-aria-accordion-panel>
        <p>
          <?= $faq['answer']; ?>
        </p>
      </div>
    <?php };
    ?>
  </div>
</div>
