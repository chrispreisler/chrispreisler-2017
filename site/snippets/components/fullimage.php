<?php
  $sizes = array(2880, 1920, 1984, 992, 1536, 768, 1088, 544);
  $image = $data->image()->toFile();
?>

<section class="fullimage">
  <?php
    if(!$data->headline()->isEmpty()):
  ?>
  <div class="fullimage__text">
    <h3 class="fullimage__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="fullimage__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="fullimage__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <?php
    endif;

    retinaimages($image, $sizes, 'fullimage__image');
  ?>
</section>
