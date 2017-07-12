<?php snippet('header') ?>

  <main class="main" id="barba-wrapper" role="main">

    <div class="barba-container content" data-namespace="<?php echo $page->id(); ?>">

      <?php
        foreach($page->builder()->toStructure() as $section):
          snippet('components/' . $section->_fieldset(), array('data' => $section));
        endforeach;
      ?>

    </div>

  </main>

<?php snippet('footer') ?>
