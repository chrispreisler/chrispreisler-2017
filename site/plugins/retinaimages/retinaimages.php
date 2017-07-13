<?php
  function retinaimages($image, $sizes, $class, $imagemobile = null, $imageoverlay = null) {
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
      <source srcset="<?php echo $image->resize($sizes[1], null, 80)->url(); ?>, <?php echo $image->resize($sizes[0], null, 80)->url() ?> 2x"
              media="(min-width: 62em)">
      <source srcset="<?php echo $image->resize($sizes[3], null, 80)->url(); ?>, <?php echo $image->resize($sizes[2], null, 80)->url(); ?> 2x"
              media="(min-width: 48em)">
      <source srcset="<?php echo $image->resize($sizes[5], null, 80)->url(); ?>, <?php echo $image->resize($sizes[4], null, 80)->url(); ?> 2x"
              media="(min-width: 34em)">
      <img    srcset="<?php echo $imagemobile->resize($sizes[7], null, 80)->url(); ?>, <?php echo $imagemobile->resize($sizes[6], null, 80)->url(); ?> 2x"
              alt="<?php echo $image->name() ?>">
    </picture>

<?
  }
?>
