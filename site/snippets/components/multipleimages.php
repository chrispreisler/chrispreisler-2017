<?php
  $sizes = array(1400, 700, 900, 450, 700, 350, 360, 190);
  //$image = $data->image()->toFile();
?>

<section class="multipleimages">
  <div class="multipleimages__text">
    <h3 class="multipleimages__sl"><?php echo $data->subline()->html(); ?></h2>
    <h2 class="multipleimages__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="multipleimages__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <div class="multipleimages__images">
  <?php

  $teasercount = ceil(count($data->images()->toStructure()) / 2);
  $counter = 0;

  foreach($data->images()->toStructure() as $image):
  $image = $image->image()->toFile();

    if($counter == 0 || $counter == $teasercount):
  ?>

    <div class="multipleimages__column">

  <?php
    endif;

    retinaimages($image, $sizes, 'multipleimages__image');

    if($counter == $teasercount - 1):
  ?>

    </div>

  <?php
    endif;
    $counter++;

  endforeach;
  ?>
  </div>
</section>
