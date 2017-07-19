<?php
  $sizes = array(2880, 1920, 1984, 992, 1536, 768, 1088, 544);
  $image = $data->image()->toFile();
  $imagemobile = ($data->imagemobile()->toFile()) ? $data->imagemobile()->toFile() : $image;
?>

<section class="project-intro">
  <?php
    retinaimages($image, $sizes, 'project-intro__image', $imagemobile, $page->uid());
  ?>

  <div class="project-intro__text">

  <h3 class="project-intro__ol"><?php echo $data->subline()->html(); ?></h3>

  <p class="project-intro__copy"><?php echo $data->copy()->html(); ?></p>

  <div class="project-intro__details">
    <div class="project-intro__details__item">
      <h3 class="project-intro__details__title">Type</h3>
      <p class="project-intro__details__content"><?php echo $data->type()->html() ?></p>
    </div>
    <div class="project-intro__details__item">
      <h3 class="project-intro__details__title">My Role</h3>
      <p class="project-intro__details__content"><?php echo $data->role()->html() ?></p>
    </div>
    <div class="project-intro__details__item">
      <h3 class="project-intro__details__title">Year</h3>
      <p class="project-intro__details__content"><?php echo $data->year()->html() ?></p>
    </div>
    <div class="project-intro__details__item">
      <?php
        if(!$data->agency()->isEmpty()):
      ?>
      <h3 class="project-intro__details__title">Agency</h3>
      <p class="project-intro__details__content"><?php echo $data->agency()->html() ?></p>
      <?php
        endif;
      ?>
    </div>

    <?php
      if(!$data->link()->isEmpty()):
    ?>

    <a class="project-intro__link <?php if($data->agency()->isEmpty()) echo "project-intro__link--agency" ?>" target="_blank" href="<?php echo $data->link()->html() ?>">
      <?php echo $data->linklabel()->html() ?>
    </a>

    <?php
      endif;
      ?>
  </div>



  </div>
</section>
