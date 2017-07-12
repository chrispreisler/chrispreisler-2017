<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/manifest.json">
  <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ff1d23">
  <link rel="shortcut icon" href="/favicon/favicon.ico">
  <meta name="msapplication-config" content="/favicon/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  <?php echo css('assets/public/stylesheets/main.css') ?>

  <script src="https://use.typekit.net/oia7jei.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>

</head>
<body>
  <div class="page__overlay"></div>

  <header class="header" role="banner">
    <a class="logo" href="<?php echo url() ?>" data-namespace="projects">
      <svg width="54" height="59" viewBox="0 0 54 59" xmlns="http://www.w3.org/2000/svg">
        <style type="text/css">
          .cplogo{stroke: currentColor;}
          </style>
          <title>Chris Preisler Logo</title>
          <path class="cplogo" d="M26.872 2.377c-11.68 0-24.745 9.446-24.745 22.088v32.53l15.29-12.522c.144-.12.337-.16.516-.105.075.02 7.62 2.207 11.068 2.207 12.324 0 22.734-10.123 22.734-22.106 0-10.43-10.633-22.093-24.862-22.093z" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>

    <nav class="nav" role="navigation">
      <ul class="nav__list">
        <?php
          foreach($pages->visible() as $p):
        ?>
          <li class="nav__list__item ">
            <a class="nav__link <?php e($p->isOpen(), 'nav__link--active') ?>"
               data-namespace="<?php echo $p->id() ?>"
               data-hover ="<?php echo $p->title()->html() ?>"
               href="<?php echo $p->url() ?>">
              <?php echo $p->title()->html() ?>
            </a>
          </li>
        <?php endforeach ?>
          <li class="nav__list__item">
            <a href="mailto:hello@chrispreisler.com" class="nav__link">Hire me</a>
            <span>👋</span>
          </li>
      </ul>
    </nav>

    <div class="nav__circle-bg"></div>

    <button class="nav__btn" type="button" role="button" aria-label="Toggle Navigation">
      <span class="nav__btn__lines"></span>
    </button>

  </header>
