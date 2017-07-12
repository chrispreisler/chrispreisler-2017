<?php
  function retinaimageslazy($image, $sizes, $class, $imagemobile = null, $imageoverlay = null) {
    if(!isset($imagemobile)) {
      $imagemobile = $image;
    }
?>
    <picture class="<?php echo $class ?>">

      <?php
        if(isset($imageoverlay)):
      ?>
        <div class="image__overlay image__overlay--<?php echo $imageoverlay ?>"></div>
      <?php
        endif;
      ?>
      <source data-srcset="<?php echo $image->resize($sizes[1])->url(); ?>, <?php echo $image->resize($sizes[0])->url() ?> 2x"
              media="(min-width: 62em)">
      <source data-srcset="<?php echo $image->resize($sizes[3])->url(); ?>, <?php echo $image->resize($sizes[2])->url(); ?> 2x"
              media="(min-width: 48em)">
      <source data-srcset="<?php echo $image->resize($sizes[5])->url(); ?>, <?php echo $image->resize($sizes[4])->url(); ?> 2x"
              media="(min-width: 34em)">
      <img    data-src="<?php echo $imagemobile->resize($sizes[7])->url(); ?> | <?php echo $imagemobile->resize($sizes[6])->url(); ?>"
              class="b-lazy"
              alt="<?php echo $image->name() ?>">
    </picture>

<?
  }
?>
