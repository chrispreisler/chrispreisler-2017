<?php
  $sizes = array(1200, 600, 900, 450, 1200, 600, 1088, 544);
  $imagegroup = $data->images()->toStructure();
  $image1 = $imagegroup->nth(0)->image()->toFile();
  $image2 = $imagegroup->nth(1)->image()->toFile();
?>

<section class="fourimages">
  <div class="fourimages__text">
    <h3 class="fourimages__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="fourimages__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="fourimages__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <div class="fourimages__imagegroup-first">
    <?php
      retinaimages($image1, $sizes, 'fourimages__imagegroup-first__image');
    ?>
  </div>
  <div class="fourimages__imagegroup-second">
    <?php
      retinaimages($image2, $sizes, 'fourimages__imagegroup-second__image');
    ?>
  </div>
</section>
