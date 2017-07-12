<?php
  $sizes = array(3200, 1600, 1984, 992, 1536, 768, 1088, 544);
  $image = $data->image()->toFile();
?>

<section class="oneimage">
  <?php
    if(!$data->headline()->empty()):
  ?>
  <div class="oneimage__text">
    <h3 class="oneimage__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="oneimage__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="oneimage__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <?php
    endif;

    retinaimages($image, $sizes, 'oneimage__image');
  ?>
</section>
