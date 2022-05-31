<?php
$is_public_sector = false; // If this is for a public sector e.g. council, change this to true - it adds some additional info into the accessibility panel.
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">

  <title>Accessibility Statement</title>
  <meta name="description" content="Accessibility Statement for 360 degree virtual event web applications">
  <meta name="robots" content="noindex">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="stylesheet" href="dist/css/style.min.css" media="all">
</head>

<body style="background:white !important; overflow:auto!important">

  <header style="padding: 3rem 0" class="bg-dark">
    <div class="container">
      <div class="row justify-center">
        <div class="col md-8">
          <h1>Accessibility Statement</h1>
        </div>
      </div>
    </div>
  </header>
  <main style="padding: 3rem 0" class="bg-light">
    <section class="container">
      <div class="row justify-center">
        <div class="col md-8">
          <p class="bold">This accessibility statement applies to the web application at
            <?= $_SERVER['HTTP_HOST']; ?>
          </p>

          <p>This website was designed and developed by EPLS. The website utilises an open source 360° media viewer technology, as well as other frameworks, to deliver an immersive 'virtual event' experience.
          </p>
          <p>We want as many people as possible to be able to use this web application, and have made a considerable effort to ensure it is accessible. For example, that means you should be able to:</p>
          <ul>
            <li>change the font size</li>
            <li>zoom in up to 300% without the text spilling off the screen</li>
            <li>navigate most of the website using just a keyboard</li>
            <li>navigate most of the website using speech recognition software</li>
            <li>listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
          </ul>
          <p>We’ve also made the website text as simple as possible to understand.</p>
          <p><a href="https://mcmw.abilitynet.org.uk/" target="_blank" rel="nofollow">AbilityNet</a> has advice on making your device easier to use if you have a disability.</p>

          <h3>How accessible this website is</h3>
          <p>We know some parts of this website are not fully accessible:</p>
          <ul>
            <li>some images contain large amounts of text. Where possible, we provide downloadable PDFs which you can view locally - for example with Adobe Acrobat - using a screen reader to read the text.</li>
            <li>you cannot modify the line height or spacing of text</li>
            <li>you cannot modify the contrast of the web page</li>
            <li>you cannot skip to the main content when using a screen reader</li>
            <li>it is not possible to 'navigate' within the space using the arrow keys alone. This is a known issue with the open source technology and we are awaiting a fix. Using your keyboard you can 'tab' and use your enter key in order to access content.</li>
            <li>the tab order is generated by the open source software, and is not always logical. We attempt to group similar content together to alleviate this issue where possible.</li>
          </ul>

          <h3>How to get information in an accessible format</h3>
          <p>If you need information on this website in a different format like accessible PDF, large print, easy read, audio recording or braille please contact <a href="mailto:support@epls.design">support@epls.design</a>.
            We will consider your request and get back to you.</p>

          <h3>Reporting accessibility problems with this website</h3>
          <p>We’re always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we’re not meeting accessibility requirements, please contact <a href="mailto:support@epls.design">support@epls.design</a>.</p>

          <?php if ($is_public_sector == true) : ?>
            <h3>Enforcement procedure</h3>
            <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you’re not happy with how we respond to your complaint, you can <a href="https://www.equalityadvisoryservice.com/" target="_blank" rel="nofollow">contact the Equality Advisory and Support Service (EASS)</a>.</p>
            <h3>Technical information about this website’s accessibility</h3>
            <p>EPLS is committed to making this website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>
          <?php endif; ?>

          <h3>Compliance status</h3>
          <p>This website is partially compliant with the <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="nofollow">Web Content Accessibility Guidelines version 2.1</a> AA standard, due to the non-compliances outlined under the section 'How accessible this website is'.</p>

          <h3>Preparation of this accessibility statement</h3>
          <p>This statement was prepared on 18/11/2021. It was last reviewed on 18/11/2021. This website was last tested on 18/11/2021. The test was carried out by EPLS using SiteImprove.</p>
        </div>
      </div>
    </section>
  </main>
</body>

</html>
