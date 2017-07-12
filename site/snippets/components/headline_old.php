<?php
if($data->headlineimage()->toFile() !== null) {
  $headlineimagesize = $data->headlineimage()->toFile()->dimensions()->width();
}
?>

<section class="headline <?php if(isset($headline)) echo "headline" . $headline ?>">
  <h3 class="headline__ol <?php if(isset($headline)) echo "headline__ol" . $headline ?>">
    <span class="largeteaser__ol__line"></span>
    <span class="largeteaser__ol__text"><?php echo $data->headline()->html();?></span>
  </h3>
  <!-- <h3 class="headline__hl <?php if(isset($headline)) echo "headline__hl" . $headline ?>">
    <?php
      echo $data->headline()->html();
      if($data->headlineimage()->toFile() !== null) {
    ?>
      <img class="headline__hl__image"
         srcset="<?php echo $data->headlineimage()->toFile()->resize($headlineimagesize/2)->url(); ?> 1x,
                 <?php echo $data->headlineimage()->toFile()->url(); ?> 2x"
         alt="<?php echo $data->headlineimage()->name() ?>">
    <?php
      }
    ?>
  </h3>  -->
  <?php
    if(!$data->subline()->isEmpty()):
  ?>
  <h1 class="headline__hl <?php if(isset($headline)) echo "headline__hl" . $headline ?>"><?php echo $data->subline()->html() ?></h1>
  <?php
    endif;
  ?>
</section>
