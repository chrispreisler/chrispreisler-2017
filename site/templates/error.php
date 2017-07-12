<?php
  $randomproject = $pages->find('projects')->children()->shuffle()->first();
?>

<?php snippet('header') ?>

<main class="main" id="barba-wrapper" role="main">

  <div class="barba-container content content--error" data-namespace="<?php echo $page->id(); ?>">

    <section class="error">
      <h3 class="error__ol"><? echo $page->overline()->html() ?></h3>
      <h1 class="error__hl"><? echo $page->headline()->html() ?></h1>
      <a class="error__link"
         href="<?php echo $randomproject->url() ?>"
         class="error__link"
         data-namespace="teaser"
         data-project-name="<?php echo $randomproject->uid() ?>">
        <? echo $page->linklabel()->html() ?>
      </a>
    </section>


  </div>

</main>

<?php snippet('footer') ?>
