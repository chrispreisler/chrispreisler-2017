<?php
  $sizes = array(1400, 700, 900, 450, 700, 350, 1088, 544);
  $sizesfull = array(2400, 1200, 1984, 992, 1536, 768, 1088, 544);
  //$image = $data->image()->toFile();
?>

<section class="siximages">
  <div class="siximages__text">
    <h3 class="siximages__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="siximages__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="siximages__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <div class="siximages__images">
  <?php

    $teasercount = ceil(count($data->images()->toStructure()) / 2);
    $counter = 0;

    foreach($data->images()->toStructure() as $image):
    $image = $image->image()->toFile();

    if($counter % 2 == 0):
  ?>
    <div class="siximages__column siximages__column--half">
  <?php
    retinaimages($image, $sizes, 'siximages__image');
    elseif($counter == 1):
  ?>
    <div class="siximages__column siximages__column--full">
  <?php
      if(!$data->videoitem()->empty()):
        includevideo($page->video($data->videoitem()), 1063, 610, 'siximages__video');
      else:
        retinaimages($image, $sizesfull, 'siximages__image');
      endif;
    else:
      retinaimages($image, $sizes, 'siximages__image');


    endif;
  if($counter == 0 || $counter % 2 != 0):
?>
  </div>
<?php
  endif;
  $counter++;
  endforeach;
?>
  </div>
</section>
