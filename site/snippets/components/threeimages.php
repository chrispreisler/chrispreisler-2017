<?php
  //$sizes = array(2560, 1984, 1536, 1088);
  $imagegroup = $data->images()->toStructure();
?>

<section class="threeimages">
  <div class="threeimages__text">
    <h3 class="threeimages__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="threeimages__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="threeimages__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <div class="threeimages__list">
    <div class="threeimages__item-first">
      <img class="threeimages__item-first__image" src="<?php echo $imagegroup->nth(0)->image()->toFile()->url(); ?>">
    </div>
    <div class="threeimages__item-second">
      <img class="threeimages__item-second__image" src="<?php echo $imagegroup->nth(1)->image()->toFile()->url(); ?>">
    </div>
    <div class="threeimages__item-third">
      <img class="threeimages__item-third__image" src="<?php echo $imagegroup->nth(2)->image()->toFile()->url(); ?>">
    </div>
  </div>
</section>
