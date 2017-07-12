<?php
if($data->headlineimage()->toFile() !== null) {
  $headlineimagesize = $data->headlineimage()->toFile()->dimensions()->width();
}
?>

<section class="headline <?php if(isset($headline)) echo "headline" . $headline ?>">
  <?php
    if(!$data->headline()->isEmpty()):
  ?>
  <h3 class="headline__ol <?php if(isset($headline)) echo "headline__ol" . $headline ?>">
    <span class="headline__ol__line"></span>
    <span class="headline__ol__text"><?php echo $data->headline()->html();?></span>
  </h3>
  <?php
    endif;
  ?>

  <h1 class="headline__hl <?php if(isset($headline)) echo "headline__hl" . $headline ?>"><?php echo $data->subline()->html() ?></h1>

</section>
