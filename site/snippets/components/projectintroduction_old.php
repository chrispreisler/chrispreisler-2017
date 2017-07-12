<?php
  $sizes = array(2880, 1984, 1984, 992, 1536, 768, 1088, 544);
  $image = $data->image()->toFile();
  $imagemobile = ($data->imagemobile()->toFile()) ? $data->imagemobile()->toFile() : $image;
?>

<section class="project-intro">
  <?php
    retinaimages($image, $sizes, 'project-intro__image', $imagemobile);
  ?>
  <div class="project-intro__text">

  <div class="project-intro__details project-intro__details--<?php echo $page->uid() ?>">
    <div class="project-intro__details__item">
      <p class="project-intro__details__title">Year</p>
      <p class="project-intro__details__content"><?php echo $data->year()->html() ?></p>
    </div>
    <div class="project-intro__details__item">
      <p class="project-intro__details__title">My Role</p>
      <p class="project-intro__details__content"><?php echo $data->role()->html() ?></p>
    </div>
    <div class="project-intro__details__item">
      <p class="project-intro__details__title">Type</p>
      <p class="project-intro__details__content"><?php echo $data->type()->html() ?></p>
    </div>
  </div>

  <div class="project-intro__info">
    <div class="project-intro__info__item">
      <h1 class="project-intro__info__hl project-intro__info__hl--<?php echo $page->uid() ?>">
        <?php
          echo $data->headline()->html();
        ?>
      </h1>
      <h1 class="project-intro__info__sl project-intro__info__sl--<?php echo $page->uid() ?>"><?php echo $data->subline()->html() ?></h1>
      <a class="project-intro__link" target="_blank" href="<?php echo $data->link()->html() ?>">
        <?php echo $data->linklabel()->html() ?>
      </a>
    </div>
    <p class="project-intro__info__copy"><?php echo $data->copy()->html() ?></p>
  </div>

  </div>
</section>
